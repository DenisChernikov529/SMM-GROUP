from rest_framework import generics

# locale imports
from .serializers import ServiceSerializer

from apps.cabinet.models import ServiceModel


class ServicesAPIView(generics.ListAPIView):
    queryset = ServiceModel.objects.all()
    serializer_class = ServiceSerializer
