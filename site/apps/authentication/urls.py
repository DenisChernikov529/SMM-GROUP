from django.urls import path

# locale imports
from .views import ForgotPassView
from .views import LoginView
from .views import RefSignUpView
from .views import SignUpView, SecretKeyView


urlpatterns = [
    path("forgot-pass/", ForgotPassView.as_view(), name="forgot_pass"),
    path("login/", LoginView.as_view(), name="login"),
    path("ref/<str:token>/", RefSignUpView.as_view(), name="ref"),
    path("signup/", SignUpView.as_view(), name="signup"),
    path(
        "seckey/<str:secret_key>/",
        SecretKeyView.as_view(),
        name="secret_key",
    ),
]
