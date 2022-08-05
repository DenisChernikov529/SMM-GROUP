from django import forms

# locale imports
from .models import *


class OrdersForm(forms.ModelForm):
    class Meta:
        model = OrderModel
        fields = ("social_network", "name_service", "quantity", "link")

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields["social_network"].widget.attrs.update(
            {"class": "new-order__row bl__main bl", },
        )


class ContactForm(forms.ModelForm):
    class Meta:
        model = Message
        fields = ["UserName", "email", "message"]


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


class BalanceForm(forms.Form):
    balance = forms.CharField(
        max_length=6,
        widget=forms.TextInput(attrs={"type": "number"}),
    )

    class Meta:
        fields = ("balance",)
