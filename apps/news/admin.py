from django.contrib import admin

# locale imports
from .models import NewsModel


@admin.register(NewsModel)
class NewsAdmin(admin.ModelAdmin):

    list_display = ("action", "text")
    list_display_links = ("action",)
