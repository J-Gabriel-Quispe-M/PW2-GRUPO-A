"""
URL configuration for listaContactos project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from personas.views import crear_persona
from personas.views import lista_personas
from personas.views import editar_persona
from personas.views import eliminar_persona
from personas.views import detalle_persona


urlpatterns = [
    path('admin/', admin.site.urls),
    path('personas/nueva/', crear_persona, name='crear_persona'),
    path('personas/', lista_personas, name='lista_personas'),
    path('personas/editar/<int:id>/', editar_persona, name='editar_persona'),
    path('personas/eliminar/<int:id>/', eliminar_persona, name='eliminar_persona'),
    path('personas/<int:id>/', detalle_persona, name='detalle_persona'),

]

