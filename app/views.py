import datetime

from django.http import HttpResponse
from django.http import JsonResponse
from django.shortcuts import redirect
from django.shortcuts import render
from django.urls import reverse
from django.views.generic import TemplateView

# locale imports
from .forms import ContactForm
from .forms import OrdersForm
from .models import OrderModel
from .models import Service

from services.bigsmm import new_order
from services.mail import sendmessage0


class IndexView(TemplateView):
    template_name = "app/index.html"

    def dispatch(self, request, *args, **kwargs):

        if request.method == "POST":
            form = ContactForm(request.POST)
            # Если форма прошла валидацию
            if form.is_valid():
                all = []
                all.append(form.cleaned_data.get("UserName"))
                all.append(form.cleaned_data.get("email"))
                all.append(form.cleaned_data.get("message"))
                text = "\n\n".join(all)
                sendmessage0(email="kirill9366@gmail.com", text=text)
                form.save()
                return redirect("index")
            else:
                return redirect("index")
        else:
            fa = Service.objects.filter(social_network="fa")
            fapzh = fa.get(name="Подписчики живые").price
            try:
                fa = Service.objects.filter(social_network="fa")
                ins = Service.objects.filter(social_network="in")
                yo = Service.objects.filter(social_network="yo")
                te = Service.objects.filter(social_network="te")
                tw = Service.objects.filter(social_network="tw")
                ti = Service.objects.filter(social_network="ti")
                vk = Service.objects.filter(social_network="vk")
            except Exception:
                pass
            try:
                fapzh = fa.get(name="Подписчики живые").price
            except Exception:
                fapzh = 0.498
            try:
                yopzh = yo.get(name="Подписчики живые").price
            except Exception:
                yopzh = 0.88
            try:
                yolzh = yo.get(name="Лайки живые").price
            except Exception:
                yolzh = 0.55
            try:
                yoprzh = yo.get(name="Просмотры живые").price
            except Exception:
                yoprzh = 0.22
            try:
                yodz = yo.get(name="Дизлайки").price
            except Exception:
                yodz = 0.55
            try:
                inspob = ins.get(name="Подписчики обычные").price
            except Exception:
                inspob = 0.22
            try:
                inspzh = ins.get(name="Подписчики живые").price
            except Exception:
                inspzh = 0.55
            try:
                inslob = ins.get(name="Лайки обычные").price
            except Exception:
                inslob = 0.09
            try:
                inslzh = ins.get(name="Лайки живые").price
            except Exception:
                inslzh = 0.18
            try:
                insaul = ins.get(name="Автолайки").price
            except Exception:
                insaul = 0.125
            try:
                insprvi = ins.get(name="Просмотры видео IG TV").price
            except Exception:
                insprvi = 0.019
            try:
                inspris = ins.get(name="Просмотры историй (story)").price
            except Exception:
                inspris = 0.055
            try:
                inssohr = ins.get(name="Сохранение").price
            except Exception:
                inssohr = 0.019
            try:
                tepnk = te.get(name="Подписчики на канал").price
            except Exception:
                tepnk = 0.198
            try:
                tepvgich = te.get(name="Подписчики в группы, чаты").price
            except Exception:
                tepvgich = 0.198
            try:
                tepr = te.get(name="Просмотры").price
            except Exception:
                tepr = 0.039
            try:
                twpnk = tw.get(name="Подписчики на канал").price
            except Exception:
                twpnk = 0.22
            try:
                twprk = tw.get(name="Просмотры канала").price
            except Exception:
                twprk = 0.26
            try:
                tipzh = ti.get(name="Подписчики живые").price
            except Exception:
                tipzh = 0.88
            try:
                tilzh = ti.get(name="Лайки живые").price
            except Exception:
                tilzh = 0.22
            try:
                tiprvi = ti.get(name="Просмотры видео").price
            except Exception:
                tiprvi = 0.045
            try:
                vkpob = vk.get(name="Подписчики обычные").price
            except Exception:
                vkpob = 0.22
            try:
                vkpzh = vk.get(name="Подписчики живые").price
            except Exception:
                vkpzh = 0.695
            try:
                vkdrvpr = vk.get(name="Друзья в профиль").price
            except Exception:
                vkdrvpr = 0.36
            try:
                vklzh = vk.get(name="Лайки живые").price
            except Exception:
                vklzh = 0.325
            try:
                vkprzh = vk.get(name="Просмотры живые (глазик)").price
            except Exception:
                vkprzh = 0.039
            try:
                vkre = vk.get(name="Репосты").price
            except Exception:
                vkre = 0.29
            try:
                vkop = vk.get(name="Опросы").price
            except Exception:
                vkop = 0.125
            try:
                vkprvi = vk.get(name="Просмотры видео").price
            except Exception:
                vkprvi = 0.045
            try:
                odpzh = od.get(name="Подписчики живые").price
            except Exception:
                odpzh = 0.198
            news = NewsModel.objects.all().reverse()[:3]
            form = ContactForm()
            questions = Quest_Answer.objects.all()
            for i in questions:
                print(i.question)
            context = {
                "news": news,
                "questions": questions,
                "form": form,
                "request": request,
                "fapzh": fapzh,
                "yopzh": yopzh,
                "yolzh": yolzh,
                "yoprzh": yoprzh,
                "yodz": yodz,
                "inspob": inspob,
                "inspzh": inspzh,
                "inslob": inslob,
                "inslzh": inslzh,
                "insaul": insaul,
                "insprvi": insprvi,
                "inspris": inspris,
                "inssohr": inssohr,
                "tepnk": tepnk,
                "tepvgich": tepvgich,
                "tepr": tepr,
                "twpnk": twpnk,
                "twprk": twprk,
                "tipzh": tipzh,
                "tilzh": tilzh,
                "tiprvi": tiprvi,
                "vkpob": vkpob,
                "vkpzh": vkpzh,
                "vkdrvpr": vkdrvpr,
                "vklzh": vklzh,
                "vkprzh": vkprzh,
                "vkre": vkre,
                "vkop": vkop,
                "vkprvi": vkprvi,
                "odpzh": odpzh,
            }
            return render(request, self.template_name, context)


class NewwOrderView(TemplateView):
    def dispatch(self, request, n, *args, **kwargs):
        if request.method == "GET":

            if not request.user.is_authenticated:
                return HttpResponse("403 Forbidden")
            try:
                n = int(n)
            except Exception:
                return HttpResponse("SyntaxError")
            user = request.user.profile
            order = user.ordermodel_set.all().get(id=n)

            if user.balance < order.price:
                return HttpResponse("none")
            one = new_order(order.num_serv, order.quantity, order.link)
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
    template_name = "app/order.html"

    def dispatch(self, request, *args, **kwargs):
        if not request.user.is_authenticated:
            return redirect("login")

        if request.method == "GET":
            fa = Service.objects.filter(social_network="fa")
            fapzh = fa.get(name="Подписчики живые").price
            try:
                fa = Service.objects.filter(social_network="fa")
                ins = Service.objects.filter(social_network="in")
                yo = Service.objects.filter(social_network="yo")
                te = Service.objects.filter(social_network="te")
                tw = Service.objects.filter(social_network="tw")
                ti = Service.objects.filter(social_network="ti")
                vk = Service.objects.filter(social_network="vk")
            except Exception:
                pass
            try:
                fapzh = fa.get(name="Подписчики живые").price
            except Exception:
                fapzh = 0.498
            try:
                yopzh = yo.get(name="Подписчики живые").price
            except Exception:
                yopzh = 0.88
            try:
                yolzh = yo.get(name="Лайки живые").price
            except Exception:
                yolzh = 0.55
            try:
                yoprzh = yo.get(name="Просмотры живые").price
            except Exception:
                yoprzh = 0.22
            try:
                yodz = yo.get(name="Дизлайки").price
            except Exception:
                yodz = 0.55
            try:
                inspob = ins.get(name="Подписчики обычные").price
            except Exception:
                inspob = 0.22
            try:
                inspzh = ins.get(name="Подписчики живые").price
            except Exception:
                inspzh = 0.55
            try:
                inslob = ins.get(name="Лайки обычные").price
            except Exception:
                inslob = 0.09
            try:
                inslzh = ins.get(name="Лайки живые").price
            except Exception:
                inslzh = 0.18
            try:
                insaul = ins.get(name="Автолайки").price
            except Exception:
                insaul = 0.125
            try:
                insprvi = ins.get(name="Просмотры видео IG TV").price
            except Exception:
                insprvi = 0.019
            try:
                inspris = ins.get(name="Просмотры историй (story)").price
            except Exception:
                inspris = 0.055
            try:
                inssohr = ins.get(name="Сохранение").price
            except Exception:
                inssohr = 0.019
            try:
                tepnk = te.get(name="Подписчики на канал").price
            except Exception:
                tepnk = 0.198
            try:
                tepvgich = te.get(name="Подписчики в группы, чаты").price
            except Exception:
                tepvgich = 0.198
            try:
                tepr = te.get(name="Просмотры").price
            except Exception:
                tepr = 0.039
            try:
                twpnk = tw.get(name="Подписчики на канал").price
            except Exception:
                twpnk = 0.22
            try:
                twprk = tw.get(name="Просмотры канала").price
            except Exception:
                twprk = 0.26
            try:
                tipzh = ti.get(name="Подписчики живые").price
            except Exception:
                tipzh = 0.88
            try:
                tilzh = ti.get(name="Лайки живые").price
            except Exception:
                tilzh = 0.22
            try:
                tiprvi = ti.get(name="Просмотры видео").price
            except Exception:
                tiprvi = 0.045
            try:
                vkpob = vk.get(name="Подписчики обычные").price
            except Exception:
                vkpob = 0.22
            try:
                vkpzh = vk.get(name="Подписчики живые").price
            except Exception:
                vkpzh = 0.695
            try:
                vkdrvpr = vk.get(name="Друзья в профиль").price
            except Exception:
                vkdrvpr = 0.36
            try:
                vklzh = vk.get(name="Лайки живые").price
            except Exception:
                vklzh = 0.325
            try:
                vkprzh = vk.get(name="Просмотры живые (глазик)").price
            except Exception:
                vkprzh = 0.039
            try:
                vkre = vk.get(name="Репосты").price
            except Exception:
                vkre = 0.29
            try:
                vkop = vk.get(name="Опросы").price
            except Exception:
                vkop = 0.125
            try:
                vkprvi = vk.get(name="Просмотры видео").price
            except Exception:
                vkprvi = 0.045
            try:
                odpzh = od.get(name="Подписчики живые").price
            except Exception:
                odpzh = 0.198
            form = OrdersForm()
            context = {
                "form": form,
                "request": request,
                "fapzh": fapzh,
                "yopzh": yopzh,
                "yolzh": yolzh,
                "yoprzh": yoprzh,
                "yodz": yodz,
                "inspob": inspob,
                "inspzh": inspzh,
                "inslob": inslob,
                "inslzh": inslzh,
                "insaul": insaul,
                "insprvi": insprvi,
                "inspris": inspris,
                "inssohr": inssohr,
                "tepnk": tepnk,
                "tepvgich": tepvgich,
                "tepr": tepr,
                "twpnk": twpnk,
                "twprk": twprk,
                "tipzh": tipzh,
                "tilzh": tilzh,
                "tiprvi": tiprvi,
                "vkpob": vkpob,
                "vkpzh": vkpzh,
                "vkdrvpr": vkdrvpr,
                "vklzh": vklzh,
                "vkprzh": vkprzh,
                "vkre": vkre,
                "vkop": vkop,
                "vkprvi": vkprvi,
                "odpzh": odpzh,
            }

            return render(request, self.template_name, context)


class CabinetView(TemplateView):
    template_name = "app/cabinet.html"

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


class ServicesView(TemplateView):
    template_name = "app/services.html"

    def dispatch(self, request, *args, **kwargs):
        fa = Service.objects.filter(social_network="fa")
        fapzh = fa.get(name="Подписчики живые").price
        try:
            fa = Service.objects.filter(social_network="fa")
            ins = Service.objects.filter(social_network="in")
            yo = Service.objects.filter(social_network="yo")
            te = Service.objects.filter(social_network="te")
            tw = Service.objects.filter(social_network="tw")
            ti = Service.objects.filter(social_network="ti")
            vk = Service.objects.filter(social_network="vk")
        except Exception:
            pass
        try:
            fapzh = fa.get(name="Подписчики живые").price
        except Exception:
            fapzh = 0.498
        try:
            yopzh = yo.get(name="Подписчики живые").price
        except Exception:
            yopzh = 0.88
        try:
            yolzh = yo.get(name="Лайки живые").price
        except Exception:
            yolzh = 0.55
        try:
            yoprzh = yo.get(name="Просмотры живые").price
        except Exception:
            yoprzh = 0.22
        try:
            yodz = yo.get(name="Дизлайки").price
        except Exception:
            yodz = 0.55
        try:
            inspob = ins.get(name="Подписчики обычные").price
        except Exception:
            inspob = 0.22
        try:
            inspzh = ins.get(name="Подписчики живые").price
        except Exception:
            inspzh = 0.55
        try:
            inslob = ins.get(name="Лайки обычные").price
        except Exception:
            inslob = 0.09
        try:
            inslzh = ins.get(name="Лайки живые").price
        except Exception:
            inslzh = 0.18
        try:
            insaul = ins.get(name="Автолайки").price
        except Exception:
            insaul = 0.125
        try:
            insprvi = ins.get(name="Просмотры видео IG TV").price
        except Exception:
            insprvi = 0.019
        try:
            inspris = ins.get(name="Просмотры историй (story)").price
        except Exception:
            inspris = 0.055
        try:
            inssohr = ins.get(name="Сохранение").price
        except Exception:
            inssohr = 0.019
        try:
            tepnk = te.get(name="Подписчики на канал").price
        except Exception:
            tepnk = 0.198
        try:
            tepvgich = te.get(name="Подписчики в группы, чаты").price
        except Exception:
            tepvgich = 0.198
        try:
            tepr = te.get(name="Просмотры").price
        except Exception:
            tepr = 0.039
        try:
            twpnk = tw.get(name="Подписчики на канал").price
        except Exception:
            twpnk = 0.22
        try:
            twprk = tw.get(name="Просмотры канала").price
        except Exception:
            twprk = 0.26
        try:
            tipzh = ti.get(name="Подписчики живые").price
        except Exception:
            tipzh = 0.88
        try:
            tilzh = ti.get(name="Лайки живые").price
        except Exception:
            tilzh = 0.22
        try:
            tiprvi = ti.get(name="Просмотры видео").price
        except Exception:
            tiprvi = 0.045
        try:
            vkpob = vk.get(name="Подписчики обычные").price
        except Exception:
            vkpob = 0.22
        try:
            vkpzh = vk.get(name="Подписчики живые").price
        except Exception:
            vkpzh = 0.695
        try:
            vkdrvpr = vk.get(name="Друзья в профиль").price
        except Exception:
            vkdrvpr = 0.36
        try:
            vklzh = vk.get(name="Лайки живые").price
        except Exception:
            vklzh = 0.325
        try:
            vkprzh = vk.get(name="Просмотры живые (глазик)").price
        except Exception:
            vkprzh = 0.039
        try:
            vkre = vk.get(name="Репосты").price
        except Exception:
            vkre = 0.29
        try:
            vkop = vk.get(name="Опросы").price
        except Exception:
            vkop = 0.125
        try:
            vkprvi = vk.get(name="Просмотры видео").price
        except Exception:
            vkprvi = 0.045
        try:
            odpzh = od.get(name="Подписчики живые").price
        except Exception:
            odpzh = 0.198
        news = NewsModel.objects.all().reverse()[:3]
        form = ContactForm()
        questions = Quest_Answer.objects.all()
        for i in questions:
            print(i.question)
        context = {
            "news": news,
            "questions": questions,
            "form": form,
            "request": request,
            "fapzh": fapzh,
            "yopzh": yopzh,
            "yolzh": yolzh,
            "yoprzh": yoprzh,
            "yodz": yodz,
            "inspob": inspob,
            "inspzh": inspzh,
            "inslob": inslob,
            "inslzh": inslzh,
            "insaul": insaul,
            "insprvi": insprvi,
            "inspris": inspris,
            "inssohr": inssohr,
            "tepnk": tepnk,
            "tepvgich": tepvgich,
            "tepr": tepr,
            "twpnk": twpnk,
            "twprk": twprk,
            "tipzh": tipzh,
            "tilzh": tilzh,
            "tiprvi": tiprvi,
            "vkpob": vkpob,
            "vkpzh": vkpzh,
            "vkdrvpr": vkdrvpr,
            "vklzh": vklzh,
            "vkprzh": vkprzh,
            "vkre": vkre,
            "vkop": vkop,
            "vkprvi": vkprvi,
            "odpzh": odpzh,
        }

        return render(request, self.template_name, context)


class FriendView(TemplateView):
    template_name = "app/friend.html"

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
