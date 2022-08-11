from django.shortcuts import render
from django.core.paginator import EmptyPage
from django.core.paginator import PageNotAnInteger
from django.core.paginator import Paginator
from django.views.generic import TemplateView

# locale imports
from .models import NewsModel


class NewsView(TemplateView):
    template_name = "news.html"

    def dispatch(self, request, *args, **kwargs):
        news = NewsModel.objects.all()
        page = request.GET.get("page", 1)
        paginator = Paginator(news, 3)
        try:
            blog_list = paginator.page(page)
        except PageNotAnInteger:
            blog_list = paginator.page(1)
        except EmptyPage:
            blog_list = paginator.page(paginator.num_pages)
        return render(
            request,
            self.template_name,
            {"blog_list": blog_list, "request": request},
        )
