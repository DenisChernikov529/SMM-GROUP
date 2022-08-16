import datetime

from django.conf import settings
from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import HttpResponse
from django.http import HttpResponseForbidden
from django.http import JsonResponse
from django.shortcuts import redirect
from django.shortcuts import render
from django.urls import reverse
from django.views.generic import TemplateView

# locale imports
from .forms import OrdersForm
from .models import OrderModel

from services.bigsmm import create_new_order


class NewwOrderView(TemplateView):
    def dispatch(self, request, n, *args, **kwargs):
        if request.method == "GET":

            if not request.user.is_authenticated:
                return HttpResponseForbidden()
            try:
                n = int(n)
            except Exception:
                return HttpResponse("SyntaxError")
            user = request.user.profile
            order = user.ordermodel_set.all().get(id=n)

            if user.balance < order.price:
                return HttpResponse("none")
            one = create_new_order(
                settings.BIGSMM_KEY,
                order.num_serv,
                order.quantity,
                order.link,
            )
            if one["errorcode"] == "0":
                order.number = int(one["order_id"])
                order.num_serv = int(one["order_service_id"])
                us = user.balance
                pr = order.price
                user.balance = us - pr
                user.save()
            elif one["errorcode"] == "-10":
                return HttpResponse("none")
            order.status = "ОБРАБАТЫВАЕТСЯ"
            order.data = datetime.datetime.now()
            order.order = True
            order.save()
            return HttpResponse("none")


class OrderView(TemplateView):
    template_name = "cabinet/order.html"

    def dispatch(self, request, *args, **kwargs):
        if not request.user.is_authenticated:
            return redirect("login")

        if request.method == "GET":
            form = OrdersForm()
            context = {
                "form": form,
                "request": request,
            }

            return render(request, self.template_name, context)


class CabinetView(TemplateView):
    template_name = "cabinet/cabinet.html"

    def dispatch(self, request, *args, **kwargs):
        if not request.user.is_authenticated:
            return HttpResponse("403 Forbidden")

        ref = request.user.profile.ref_link
        try:
            link = request.build_absolute_uri(
                reverse("ref", kwargs={"token": ref}),
            )
        except Exception:
            link = "None"
        user = request.user.profile
        baskets = user.ordermodel_set.all().filter(order=False)
        orders = user.ordermodel_set.all().filter(order=True)
        return render(
            request,
            self.template_name,
            {
                "request": request,
                "link": link,
                "baskets": baskets,
                "orders": orders,
            },
        )


class FriendView(TemplateView):
    template_name = "cabinet/friend.html"

    def dispatch(self, request, *args, **kwargs):
        if not request.user.is_authenticated:
            return HttpResponse("403 Forbidden")
        ref = request.user.profile.ref_link
        try:
            link = request.build_absolute_uri(
                reverse(
                    "ref",
                    kwargs={"token": ref},
                ),
            )
        except Exception:
            link = "None"
        return render(
            request,
            self.template_name,
            {"request": request, "link": link},
        )


class NewOrderView(TemplateView):

    def dispatch(self, request, *args, **kwargs):
        if request.is_ajax():
            soc_net = request.POST["item"]
            cheat = request.POST["cheat"]

            if soc_net.lower() == "facebook":
                if cheat.lower() == "подписчики живые":
                    num_serv = 56
            elif soc_net.lower() == "youtube":
                if cheat.lower() == "подписчики живые":
                    num_serv = 95
                elif cheat.lower() == "лайки живые":
                    num_serv = 113
                elif cheat.lower() == "просмотры живые":
                    num_serv = 29
                elif cheat.lower() == "дизлайки":
                    num_serv = 161
            elif soc_net.lower() == "instagram":
                if cheat.lower() == "подписчики обычные":
                    num_serv = 169
                elif cheat.lower() == "подписчики живые":
                    num_serv = 196
                elif cheat.lower() == "автолайки":
                    num_serv = 130
                elif cheat.lower() == "просмотры видео ig tv":
                    num_serv = 74
                elif cheat.lower() == "просмотры историй (story)":
                    num_serv = 34
                elif cheat.lower() == "лайки обычные":
                    num_serv = 130
                elif cheat.lower() == "лайки живые":
                    num_serv = 201
                elif cheat.lower() == "сохранение":
                    num_serv = 153
            elif soc_net.lower() == "телеграм":
                if cheat.lower() == "подписчики на канал":
                    num_serv = 122
                elif cheat.lower() == "подписчики в группы, чаты":
                    num_serv = 122
                elif cheat.lower() == "просмотры":
                    num_serv = 122
            elif soc_net.lower() == "twitch":
                if cheat.lower() == "подписчики на канал":
                    num_serv = 135
                elif cheat.lower() == "просмотры канала":
                    num_serv = 108
            elif soc_net.lower() == "tiktok":
                if cheat.lower() == "подписчики живые":
                    num_serv = 160
                elif cheat.lower() == "лайки живые":
                    num_serv = 185
                elif cheat.lower() == "просмотры видео":
                    num_serv = 147
            elif soc_net.lower() == "вконтакте":
                if cheat.lower() == "подписчики живые":
                    num_serv = 127
                elif cheat.lower() == "лайки живые":
                    num_serv = 32
                elif cheat.lower() == "подписчики обычные":
                    num_serv = 9
                elif cheat.lower() == "друзья в профиль":
                    num_serv = 10
                elif cheat.lower() == "просмотры живые (глазик)":
                    num_serv = 29
                elif cheat.lower() == "репосты":
                    num_serv = 14
                elif cheat.lower() == "просмотры видео":
                    num_serv = 71
            elif soc_net.lower() == "одноклассники":
                if cheat.lower() == "подписчики живые":
                    num_serv = 197
            if bool(num_serv):
                url = request.POST["url"]
                qty = request.POST["qty"]
                price = round(float(request.POST["sum"]), 1)
                user = request.user.profile
                OrderModel.objects.create(
                    social_network=soc_net,
                    name_service=cheat,
                    quantity=qty,
                    link=url,
                    order=False,
                    price=price,
                    user=user,
                    num_serv=num_serv,
                )

                return JsonResponse({"success": True})
            else:
                return HttpResponse("error")


class DeleteBasket(TemplateView):
    def get(self, request, n, *args, **kwargs):
        if request.method == "GET":

            if not request.user.is_authenticated:
                return HttpResponse("403 Forbidden")
            try:
                n = int(n)
            except Exception:
                return HttpResponse("SyntaxError")
            user = request.user.profile
            order = user.ordermodel_set.all().get(id=n)
            order.delete()
            return HttpResponse("none")
