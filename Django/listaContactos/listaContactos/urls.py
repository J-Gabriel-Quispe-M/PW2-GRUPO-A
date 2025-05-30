from django.contrib import admin
from django.urls import path
from inicio.views import home, another

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home),  
    path('another/', another),
]
