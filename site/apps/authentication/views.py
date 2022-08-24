from django.contrib.auth import authenticate
from django.contrib.auth import login as auth_login
from django.contrib.auth import logout
from django.contrib.auth.views import LoginView
from django.http import HttpResponseForbidden
from django.http import HttpResponseRedirect
from django.shortcuts import redirect
from django.shortcuts import render
from django.urls import reverse_lazy
from django.views.generic import FormView
from django.views.generic import TemplateView

# locale imports
from .forms import EmailForm
from .forms import ResetPasswordForm
from .forms import SignUpForm
from .models import CustomUser
from .models import Profile

from config.loader import email_client

from services.common import randomlink


class LoginView(LoginView):
    template_name = "authentication/login.html"


class SignUpView(TemplateView):
    template_name = "authentication/signup.html"

    def dispatch(self, request, *args, **kwargs):

        if request.method == "POST":
            form = SignUpForm(request.POST)
            if form.is_valid():
                user = form.save()
                user.profile.username = form.cleaned_data.get("username")
                user.profile.balance = 0
                user.profile.wholesale_balance = 0
                link = randomlink(8)
                user.profile.ref_link = link
                user.profile.save()
                email = form.cleaned_data.get("email")
                my_password = form.cleaned_data.get("password1")
                user = authenticate(email=email, password=my_password)
                auth_login(request, user)
                return HttpResponseRedirect("/")
            else:
                return redirect("news")
        else:
            logout(request)
            form = SignUpForm()
            return render(request, self.template_name, {"form": form})


class RefSignUpView(TemplateView):
    template_name = "authentication/signup.html"

    def dispatch(self, request, token, *args, **kwargs):

        if request.method == "POST":
            form = SignUpForm(request.POST)
            if form.is_valid():
                user = form.save()
                user.profile.email = form.cleaned_data.get("email")
                user.profile.balance = 0
                user.profile.wholesale_balance = 0
                link = randomlink(8)
                user.profile.ref_link = link
                prof = Profile.objects.get(ref_link=token)
                user.profile.ref = prof
                user.profile.save()
                username = form.cleaned_data.get("username")
                my_password = form.cleaned_data.get("password1")
                user = authenticate(username=username, password=my_password)
                auth_login(request, user)
                return HttpResponseRedirect("/")
            else:
                return redirect("news")
        else:
            form = SignUpForm()
            return render(
                request,
                self.template_name,
                {"form": form, "request": request},
            )


class ForgotPassView(FormView):
    template_name = "authentication/forgot-pass.html"
    form_class = EmailForm
    success_url = reverse_lazy("login")

    def form_valid(self, form):
        email = form.cleaned_data.get("email")

        user = CustomUser.objects.filter(email=email).first()
        if user:
            secret_key = randomlink(8)
            user.profile.secret_key = secret_key
            user.profile.save()
            rev = self.request.build_absolute_uri(
                reverse_lazy(
                    "secret_key",
                    kwargs={"secret_key": secret_key},
                )
            )
            email_client.send_message(email, "Восстановление пароля", rev)
        return super().form_valid(form)


class SecretKeyView(FormView):
    template_name = "authentication/changepass.html"
    form_class = ResetPasswordForm

    def form_valid(self, form):
        profile = Profile.objects.get(secret_key=self.kwargs["secret_key"])
        profile.secret_key = ""
        profile.save()

        new_pass = form.cleaned_data.get("password1")
        profile.user.set_password(new_pass)
        profile.user.save()

        return redirect("login")

    def get(self, request, secret_key, *args, **kwargs):

        try:
            Profile.objects.get(secret_key=secret_key)
        except Profile.DoesNotExist:
            return HttpResponseForbidden()

        return self.render_to_response(self.get_context_data())
