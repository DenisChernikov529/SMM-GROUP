from django.urls import path

# locale imports
from .views import ServicesAPIView

urlpatterns = [
    path("services/", ServicesAPIView.as_view()),
]
