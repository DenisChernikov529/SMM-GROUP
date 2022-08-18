from braces.views import CsrfExemptMixin

import datetime

from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import JsonResponse
from django.conf import settings

from rest_framework import generics
from rest_framework import views
from rest_framework.permissions import IsAuthenticated
from rest_framework.request import Request

# locale imports
from .serializers import SocialNetworkSerializer
from .utils import get_price

from apps.cabinet.models import OrderModel
from apps.cabinet.models import ServiceModel
from apps.cabinet.models import SocialNetworkModel

from config.core import CsrfExemptSessionAuthentication

from services.bigsmm import create_new_order


class ServicesAPIView(generics.ListAPIView):
    queryset = SocialNetworkModel.objects.all()
    serializer_class = SocialNetworkSerializer


class CalcPriceAPIView(CsrfExemptMixin, views.APIView):

    authentication_classes = []

    def post(self, request: Request):
        price = get_price(
            request.data["social_network"],
            request.data["service"],
            request.data["quantity"]
        )
        return JsonResponse({"price": price})


class TopUpBasketAPIView(views.APIView):

    authentication_classes = [CsrfExemptSessionAuthentication]

    def post(self, request: Request):
        print(type(request))
        print(type(format))
        price = get_price(
            request.data["social_network"],
            request.data["service"],
            request.data["quantity"]
        )
        social_network = SocialNetworkModel.objects.get(
            title=request.data["social_network"],
        )
        service = ServiceModel.objects.get(
            social_network=social_network,
            name=request.data["service"],
        )
        OrderModel.objects.create(
            social_network=social_network,
            service=service,
            quantity=request.data["quantity"],
            link=request.data["url"],
            price=price,
            profile=request.user.profile,
        )

        return JsonResponse({"status": "success"})


class ReduceBasketAPIView(views.APIView):

    authentication_classes = [CsrfExemptSessionAuthentication]

    def post(self, request: Request):
        pk = request.data["id"]
        OrderModel.objects.get(pk=pk).delete()
        return JsonResponse({"status": "success"})


class AddOrderAPIView(views.APIView):

    authentication_classes = [CsrfExemptSessionAuthentication]

    def post(self, request: Request):
        pk = request.data["id"]
        order_model = OrderModel.objects.get(pk=pk)

        if request.user.profile.balance < order_model.price:
            return JsonResponse({
                "status": "fail",
                "msg": "No balance",
            })

        order = create_new_order(
            settings.BIGSMM_KEY,
            order_model.service.service_id,
            order_model.quantity,
            order_model.link,
        )
        print(order)
        order_model.is_order = True
        order_model.order_id = order["order"]
        order_model.status = "ОБРАБАТЫВАЕТСЯ"
        order_model.date = datetime.datetime.now()

        request.user.profile.balance -= order_model.price
        request.user.profile.save()
        order_model.save()
        return JsonResponse({"status": "success"})
