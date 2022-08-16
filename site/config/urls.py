from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include
from django.urls import path


urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include("apps.main.urls")),
    path("account/", include("apps.authentication.urls")),
    path("balance/", include("apps.balance.urls")),
    path("news/", include("apps.news.urls")),
    path("cabinet/", include("apps.cabinet.urls")),
    path("api/", include("apps.api.urls")),
] + static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS)
