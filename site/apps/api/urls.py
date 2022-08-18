from django.urls import path

# locale imports
from .views import AddOrderAPIView
from .views import CalcPriceAPIView
from .views import ReduceBasketAPIView
from .views import ServicesAPIView
from .views import TopUpBasketAPIView

urlpatterns = [
    path("services/", ServicesAPIView.as_view()),
    path("get-price/", CalcPriceAPIView.as_view()),
    path("top-up-basket/", TopUpBasketAPIView.as_view()),
    path("reduce-basket/", ReduceBasketAPIView.as_view()),
    path("create-order/", AddOrderAPIView.as_view()),
]
