from django.contrib import admin

# locale imports
from .models import OrderModel
from .models import PricesForServices
from .models import Service

admin.site.register(PricesForServices)
admin.site.register(OrderModel)
admin.site.register(Service)
