from django.shortcuts import redirect
from django.shortcuts import render
from django.views.generic import TemplateView

# locale imports
from .forms import ContactForm
from .models import FAQModel

from apps.cabinet.models import ServiceModel
from apps.news.models import NewsModel

from services.mail import sendmessage0


class IndexView(TemplateView):
    template_name = "index.html"

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
            fa = ServiceModel.objects.filter(social_network="fa")
            fapzh = fa.get(name="Подписчики живые").price
            try:
                fa = ServiceModel.objects.filter(social_network="fa")
                ins = ServiceModel.objects.filter(social_network="in")
                yo = ServiceModel.objects.filter(social_network="yo")
                te = ServiceModel.objects.filter(social_network="te")
                tw = ServiceModel.objects.filter(social_network="tw")
                ti = ServiceModel.objects.filter(social_network="ti")
                vk = ServiceModel.objects.filter(social_network="vk")
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
            questions = FAQModel.objects.all()
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


class ServicesView(TemplateView):
    template_name = "services.html"

    def dispatch(self, request, *args, **kwargs):
        fa = ServiceModel.objects.filter(social_network="fa")
        fapzh = fa.get(name="Подписчики живые").price
        try:
            fa = ServiceModel.objects.filter(social_network="fa")
            ins = ServiceModel.objects.filter(social_network="in")
            yo = ServiceModel.objects.filter(social_network="yo")
            te = ServiceModel.objects.filter(social_network="te")
            tw = ServiceModel.objects.filter(social_network="tw")
            ti = ServiceModel.objects.filter(social_network="ti")
            vk = ServiceModel.objects.filter(social_network="vk")
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
        questions = FAQModel.objects.all()
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
