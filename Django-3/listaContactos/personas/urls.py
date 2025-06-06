from django.urls import path
from personas.views import persona_create_view, lista_personas  # Nombres correctos
from personas.views import persona_create_view as crear_persona

urlpatterns = [
    path('agregar/', persona_create_view, name='crear_persona'),
    path('lista/', lista_personas, name='lista_personas'),  # Nueva URL
]