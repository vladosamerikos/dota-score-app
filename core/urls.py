from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from . import routing


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/blog/', include('apps.blog.urls')),
    path('api/category/', include('apps.category.urls')),
    path('auth/', include('apps.users.urls')),
    path('api/', include('apps.chat.urls')),
    path('ws/', include(routing.websocket_urlpatterns)),
    
    
    
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


urlpatterns += [re_path(r'^.*',
                        TemplateView.as_view(template_name='index.html'))]