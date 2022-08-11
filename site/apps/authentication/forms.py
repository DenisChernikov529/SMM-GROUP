from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User


class SignUpForm(UserCreationForm):
    email = forms.EmailField(max_length=200, help_text="Required")

    class Meta:
        model = User
        fields = ("username", "email", "password1", "password2")

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields["username"].widget.attrs.update({"id": "name", })
        self.fields["email"].widget.attrs.update({"id": "mail", })
        self.fields["password1"].widget.attrs.update({"id": "p1", })
        self.fields["password2"].widget.attrs.update({"id": "p2", })


class EmailForm(forms.Form):
    email = forms.EmailField(label="E mail")

    class Meta:
        fields = ("email",)


class ResetPasswordForm(forms.Form):
    password1 = forms.CharField(
        label="New password",
        max_length=100,
        widget=forms.PasswordInput,
    )
    password2 = forms.CharField(
        label="Again new password",
        max_length=100,
        widget=forms.PasswordInput,
    )

    class Meta:
        fields = ("password1", "password2")