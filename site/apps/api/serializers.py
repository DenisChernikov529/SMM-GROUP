from rest_framework import serializers

# locale imports
from apps.cabinet.models import ServiceModel
from apps.cabinet.models import SocialNetworkModel


class SocialNetworkSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialNetworkModel
        fields = ["title", "servicemodel_set"]
        depth = 1


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceModel
        fields = ["name", "price", "discounts"]
        depth = 1
