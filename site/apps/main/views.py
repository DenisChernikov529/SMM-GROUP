from django.views.generic import FormView
from django.views.generic import TemplateView

# locale imports
from .forms import ContactForm
from .models import OwnerEmail

from apps.cabinet.models import SocialNetworkModel as SNM
from apps.news.models import NewsModel

from config.loader import email_client


class IndexView(FormView):
    template_name = "main/index.html"
    form_class = ContactForm
    success_url = "/"

    def form_valid(self, form):
        text = "\n\n".join([
            form.cleaned_data.get("username"),
            form.cleaned_data.get("email"),
            form.cleaned_data.get("message"),
        ])

        # send message
        emails = OwnerEmail.objects.all()
        for email in emails:
            email_client.send_email_message(
                email.email,
                "Сообщение с сайта smm-group.ru",
                text,
            )

        return super().form_valid(form)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["news"] = NewsModel.objects.all().reverse()[:3]
        return context


class ServicesView(TemplateView):
    template_name = "main/services.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        context["tg"] = SNM.objects.filter(title="Telegram").first()
        context["tt"] = SNM.objects.filter(title="TikTok").first()
        context["ok"] = SNM.objects.filter(title="Ok").first()
        context["tw"] = SNM.objects.filter(title="Twitter").first()
        context["yt"] = SNM.objects.filter(title="YouTube").first()
        context["ig"] = SNM.objects.filter(title="Instagram").first()
        context["vk"] = SNM.objects.filter(title="Vkontakte").first()
        context["fb"] = SNM.objects.filter(title="Facebook").first()

        return context
