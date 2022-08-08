from django import forms

# locale imports
from .models import Message


class ContactForm(forms.ModelForm):
    class Meta:
        model = Message
        fields = ["username", "email", "message"]
