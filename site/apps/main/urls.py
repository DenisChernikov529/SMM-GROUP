from django.urls import path

# locale imports
from .views import IndexView
from .views import ServicesView

urlpatterns = [
    path('', IndexView.as_view(), name='index'),
    path('services', ServicesView.as_view(), name='services'),
]
