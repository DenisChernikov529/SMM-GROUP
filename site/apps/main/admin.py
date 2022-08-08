from django.contrib import admin

# locale imports
from .models import FAQModel
from .models import Message

admin.site.register(FAQModel)
admin.site.register(Message)
