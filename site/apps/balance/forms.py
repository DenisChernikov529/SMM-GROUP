from django import forms


class BalanceForm(forms.Form):
    balance = forms.CharField(
        max_length=6,
        widget=forms.TextInput(attrs={"type": "number"}),
    )

    class Meta:
        fields = ("balance",)
