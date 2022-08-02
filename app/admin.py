from django.contrib import admin
from .models import *

@admin.register(News)

class NewsAdmin(admin.ModelAdmin):
    list_display = ("action", "text")
    list_display_links = ("action",)

admin.site.register(PricesForServices)
admin.site.register(Orders)
admin.site.register(Profile)
admin.site.register(Message)
admin.site.register(Service)