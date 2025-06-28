from django.shortcuts import render, redirect
from .forms import PersonaForm
from .models import Persona

def crear_persona(request):
    if request.method == 'POST':
        form = PersonaForm(request.POST)
        if form.is_valid():
            # Guardar datos manualmente en el modelo
            Persona.objects.create(
                nombre=form.cleaned_data['nombre'],
                email=form.cleaned_data['email'],
                telefono=form.cleaned_data['telefono']
            )
            return redirect('lista_personas')  # Lo crearemos más adelante
    else:
        form = PersonaForm()
    
    return render(request, 'personas/crear_persona.html', {'form': form})
