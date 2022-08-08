from django.urls import path

# locale imports
from .views import NewsView


urlpatterns = [
    path("", NewsView.as_view(), name="news"),
]
