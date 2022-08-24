from django.contrib import admin

# locale imports
from .models import Message
from .models import OwnerEmail

admin.site.register(Message)


@admin.register(OwnerEmail)
class OwnelEmailAdmin(admin.ModelAdmin):
    list_display = ["email"]
