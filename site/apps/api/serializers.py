from rest_framework import serializers

# locale imports
from apps.cabinet.models import ServiceModel


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceModel
        exclude = ["id"]
