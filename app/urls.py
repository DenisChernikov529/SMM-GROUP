from django.urls import path, include
from .views import *

urlpatterns = [
    path('cabinet/', CabinetView.as_view(), name='cabinet'),
    path('order', OrderView.as_view(), name='order'),
    path('friend', FriendView.as_view(), name='friend'),
    path('soc/', include('social_django.urls', namespace='social')),
    path('neworder', NewOrderView.as_view(), name='neworder'),
    path('newworder/<str:n>', NewwOrderView.as_view(), name='newworder'),
    path('deleteorder/<str:n>', DeleteBasket.as_view(), name='deletebasket'),
]
