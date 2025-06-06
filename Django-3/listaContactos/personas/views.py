from django.shortcuts import redirect, render
from .models import Persona
from .forms import PersonaForm

def persona_create_view(request):
    if request.method == 'POST':
        form = PersonaForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('lista_personas')  # Asegúrate de que esta URL existe
    else:
        form = PersonaForm()
    return render(request, 'personas/personasCreate.html', {'form': form})

def crear_persona(request):  # Nombre que coincide con la importación
    # mantén el mismo código
    if request.method == 'POST':
        form = PersonaForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('lista_personas')
    else:
        form = PersonaForm()
    return render(request, 'personas/personasCreate.html', {'form': form})