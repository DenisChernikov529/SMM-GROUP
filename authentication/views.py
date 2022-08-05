from django.shortcuts import render
from django.views.generic import TemplateView
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import authenticate, logout
from django.contrib.auth import login as auth_login
from django.http import HttpResponseRedirect
from django.shortcuts import redirect

# locale imports
from .forms import SignUpForm, EmailForm
from .models import Profile

from services import common


class LoginView(TemplateView):
    template_name = "app/login.html"

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
    template_name = "app/signup.html"

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
    template_name = "app/forgot-pass.html"

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
                    secret_key = randomlink(8)
                    user.secret_key = secret_key
                    user.save()
                    rev = request.build_absolute_uri(
                        reverse(
                            "seckey",
                            kwargs={"key": secret_key},
                        )
                    )
                    sendmessage(rev, email)
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
