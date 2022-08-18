from django.urls import include
from django.urls import path

# locale imports
from .views import CabinetView
from .views import FriendView
from .views import OrderView

urlpatterns = [
    path("", CabinetView.as_view(), name="cabinet"),
    path("order/", OrderView.as_view(), name="order"),
    path("friend/", FriendView.as_view(), name="friend"),
    path("soc/", include("social_django.urls", namespace="social")),
]
