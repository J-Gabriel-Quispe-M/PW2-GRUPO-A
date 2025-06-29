from django.urls import path
from .views import personas_json
from .views import (
    PersonaListView,
    PersonaDetailView,
    PersonaCreateView,
    PersonaUpdateView,
    PersonaDeleteView
)

app_name = 'personas'

urlpatterns = [
    path('', PersonaListView.as_view(), name='persona_list'),
    path('<int:pk>/', PersonaDetailView.as_view(), name='persona_detail'),
    path('crear/', PersonaCreateView.as_view(), name='persona_create'),
    path('<int:pk>/editar/', PersonaUpdateView.as_view(), name='persona_update'),
    path('<int:pk>/eliminar/', PersonaDeleteView.as_view(), name='persona_delete'),
    path('json/', personas_json, name='personas_json'),
]
