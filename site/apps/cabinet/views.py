from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import render
from django.urls import reverse
from django.views.generic import TemplateView
from django.conf import settings

# locale imports
from services.bigsmm import get_status_order


class OrderView(LoginRequiredMixin, TemplateView):
    template_name = "cabinet/order.html"


class CabinetView(LoginRequiredMixin, TemplateView):
    template_name = "cabinet/cabinet.html"

    def dispatch(self, request, *args, **kwargs):
        ref = request.user.profile.ref_link
        try:
            link = request.build_absolute_uri(
                reverse("ref", kwargs={"token": ref}),
            )
        except Exception:
            link = "None"
        user = request.user.profile
        baskets = user.ordermodel_set.all().filter(is_order=False)
        orders = user.ordermodel_set.all().filter(is_order=True)
        for order in orders:
            response = get_status_order(
                settings.BIGSMM_KEY,
                order.order_id,
            )
            if response["status"] == "Pending":
                order.status = "ОБРАБАТЫВАЕТСЯ"
            elif response["status"] == "In Process":
                order.status = "В ПРОЦЕССЕ"
            elif response["status"] == "Completed":
                order.status = "ЗАВЕРШЕН"
            order.save()

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


class FriendView(LoginRequiredMixin, TemplateView):
    template_name = "cabinet/friend.html"

    def dispatch(self, request, *args, **kwargs):
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
