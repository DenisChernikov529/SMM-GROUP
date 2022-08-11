from django.contrib.auth import authenticate
from django.contrib.auth import login as auth_login
from django.contrib.auth import logout
from django.contrib.auth.forms import AuthenticationForm
from django.http import HttpResponseRedirect
from django.shortcuts import redirect
from django.shortcuts import render
from django.urls import reverse
from django.views.generic import TemplateView

# locale imports
from .forms import EmailForm
from .forms import ResetPasswordForm
from .forms import SignUpForm
from .models import Profile

from services import common


class RefSignUpView(TemplateView):
    template_name = "signup.html"

    def dispatch(self, request, token, *args, **kwargs):

        if request.method == "POST":
            form = SignUpForm(request.POST)
            if form.is_valid():
                user = form.save()
                user.profile.email = form.cleaned_data.get("email")
                user.profile.balance = 0
                user.profile.wholesale_balance = 0
                link = common.randomlink(8)
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


class LoginView(TemplateView):
    template_name = "login.html"

    def dispatch(self, request, *args, **kwargs):
        context = {}
        if request.method == "POST":
            username = request.POST["username"]
            password = request.POST["password"]
            user = authenticate(username=username, password=password)

            if user is not None:
                auth_login(request, user)

                return HttpResponseRedirect("/")
            else:
                context["error"] = "Логин или пароль неправильные"
                form = AuthenticationForm()
                context["form"] = form
                return render(request, self.template_name, context)
        else:
            form = AuthenticationForm()
            context["form"] = form
            return render(request, self.template_name, context)


class SignUpView(TemplateView):
    template_name = "signup.html"

    def dispatch(self, request, *args, **kwargs):

        if request.method == "POST":
            form = SignUpForm(request.POST)
            if form.is_valid():
                user = form.save()
                user.profile.email = form.cleaned_data.get("email")
                user.profile.balance = 0
                user.profile.wholesale_balance = 0
                link = common.randomlink(8)
                user.profile.ref_link = link
                user.profile.save()
                username = form.cleaned_data.get("username")
                my_password = form.cleaned_data.get("password1")
                user = authenticate(username=username, password=my_password)
                auth_login(request, user)
                return HttpResponseRedirect("/")
            else:
                return redirect("news")
        else:
            logout(request)
            form = SignUpForm()
            return render(request, self.template_name, {"form": form})


class ForgotPassView(TemplateView):
    template_name = "forgot-pass.html"

    def dispatch(self, request, *args, **kwargs):
        if request.method == "POST":
            form = EmailForm(request.POST)
            if form.is_valid():
                email = form.cleaned_data.get("email")

                try:
                    user = Profile.objects.get(email=email)
                except Exception:
                    user = []
                if bool(user):
                    secret_key = common.randomlink(8)
                    user.secret_key = secret_key
                    user.save()
                    rev = request.build_absolute_uri(
                        reverse(
                            "seckey",
                            kwargs={"key": secret_key},
                        )
                    )
                    common.sendmessage(rev, email)
                    return redirect("login")
                else:
                    form = EmailForm()
                    error = "Такой почты нет"
                    return render(
                        request,
                        self.template_name,
                        {"request": request, "form": form, "error": error},
                    )
        else:
            form = EmailForm()
            return render(
                request,
                self.template_name,
                {"request": request, "form": form},
            )


class SecretKeyView(TemplateView):
    template_name = "changepass.html"

    def dispatch(self, request, key, *args, **kwargs):
        if request.method == "POST":
            form = ResetPasswordForm(request.POST)
            if form.is_valid():
                user = Profile.objects.get(secret_key=key)
                user.secret_key = ""

                new_pass = form.cleaned_data.get("password1")

                user.user.set_password(new_pass)
                user.user.save()
                user.save()
                return redirect("login")
            else:
                return HttpResponse("lol")
        else:
            try:
                user = Profile.objects.get(secret_key=key)
            except Exception:
                return HttpResponse("403 Forbidden")
            form = ResetPasswordForm()
            return render(
                request,
                self.template_name,
                {"form": form},
            )