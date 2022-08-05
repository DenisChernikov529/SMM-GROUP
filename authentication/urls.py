from django.urls import path, include

# locale imports
from .views import (
    ForgotPassView,
    LoginView,
    SignUpView,
)

urlpatterns = [
    path("forgot-pass/", ForgotPassView.as_view(), name="forgot_pass"),
    path("login/", LoginView.as_view(), name="login"),
    path("signup/", SignUpView.as_view(), name="signup"),
]
