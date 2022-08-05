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
