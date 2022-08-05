from django.urls import path, include
from .views import *

urlpatterns = [
    path('', IndexView.as_view(), name='index'),
    path('cabinet/', CabinetView.as_view(), name='cabinet'),
    path('order', OrderView.as_view(), name='order'),
    path('services', ServicesView.as_view(), name='services'),
    path('news', NewsView.as_view(), name='news'),
    path('friend', FriendView.as_view(), name='friend'),
    path('soc/', include('social_django.urls', namespace='social')),
    path('ref/<str:token>/', RefSignUpView.as_view(), name='ref'),
    path('seckey/<str:key>/', SecretKeyView.as_view(), name='seckey'),
    path('neworder', NewOrderView.as_view(), name='neworder'),
    path('prices', PricesView.as_view(), name='prices'),
    path('newworder/<str:n>', NewwOrderView.as_view(), name='newworder'),
    path('deleteorder/<str:n>', DeleteBasket.as_view(), name='deletebasket'),
]
