from django.urls import path

# locale imports
from .views import BalanceView
from .views import YandexPayView

urlpatterns = [
    path("/", BalanceView.as_view(), name="balance"),
    path("pay/", YandexPayView.as_view(), name="yandex"),
]
