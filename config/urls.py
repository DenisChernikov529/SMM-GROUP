from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include
from django.urls import path


urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include("main.urls")),
    path("account/", include("authentication.urls")),
    path("balance/", include("balance.urls")),
    path("news/", include("news.urls")),
    path("cabinet/", include("cabinet.urls")),
] + static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS)
