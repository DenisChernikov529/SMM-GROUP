from django.contrib import admin

# locale imports
from .models import OrderModel
from .models import ServiceModel

admin.site.register(OrderModel)
admin.site.register(ServiceModel)
