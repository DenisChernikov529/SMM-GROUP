from django.http import HttpResponse
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import TemplateView

import json

from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from yandex_checkout import Configuration
from yandex_checkout import Payment
from yandex_checkout import WebhookNotification

# locale imports
from .forms import BalanceForm

from apps.authentication.models import Profile


Configuration.configure(
    "718522",
    "live_pYjehEQQvlwaHdWlpJsw_b9Vlq0La6qbbvWSnjXyAP8",
)


class BalanceView(TemplateView):
    template_name = "app/balance.html"

    def dispatch(self, request, *args, **kwargs):
        if request.method == "POST":
            form = BalanceForm(request.POST)
            if form.is_valid():
                balance = form.cleaned_data.get("balance")
                payment = Payment.create({
                    "amount": {
                        "value": balance,
                        "currency": "RUB",
                    },
                    "confirmation": {
                        "type": "redirect",
                        "return_url": "https://smm-group.ru/"
                    },
                    "capture": False,
                })
                signature = payment.id
                user = request.user.profile
                user.signature = signature
                user.save()
                print(user.signature)
                return HttpResponseRedirect(
                    payment.confirmation.confirmation_url,
                )
        if not request.user.is_authenticated:
            return HttpResponse("403 Forbidden")
        form = BalanceForm()
        return render(
            request,
            self.template_name,
            {"request": request, "form": form},
        )


class YandexPayView(APIView):
    permission_classes = [AllowAny]

    @csrf_exempt
    def post(self, request):
        event_json = json.loads(request.body)
        notification_object = WebhookNotification(event_json)
        payment = notification_object.object
        if payment.paid:
            order = Profile.get(signature=payment.id)
            amount = order.amount
            order.balance += float(amount)
            order.save()

        # balance = user.balance
        # if quantity > 999:
        #     user.balance = balance + quantity + (quantity / 100 * 5)
        # else:
        #     user.balance = balance + quantity

        return HttpResponse("ok")
