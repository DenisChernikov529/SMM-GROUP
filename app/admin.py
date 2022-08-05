from django.contrib import admin
from .models import *


@admin.register(NewsModel)
class NewsAdmin(admin.ModelAdmin):

    list_display = ("action", "text")
    list_display_links = ("action",)


admin.site.register(PricesForServices)
admin.site.register(OrderModel)
admin.site.register(Message)
admin.site.register(Service)
