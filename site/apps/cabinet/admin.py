from django.contrib import admin

# locale imports
from .models import DiscountServiceModel
from .models import OrderModel
from .models import ServiceModel
from .models import SocialNetworkModel

admin.site.register(OrderModel)
admin.site.register(SocialNetworkModel)


@admin.register(ServiceModel)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ("name", "social_network", "price", "service_id")
    list_filter = ("name", "social_network",)


@admin.register(DiscountServiceModel)
class DiscountServiceAdmin(admin.ModelAdmin):
    list_display = ("service", "discount", "quantity")
    list_filter = ("service", )
