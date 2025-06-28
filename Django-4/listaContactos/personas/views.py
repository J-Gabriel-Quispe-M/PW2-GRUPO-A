from django.shortcuts import render, redirect
from .forms import PersonaForm
from .models import Persona

def crear_persona(request):
    if request.method == 'POST':
        form = PersonaForm(request.POST)
        if form.is_valid():
            Persona.objects.create(
                nombre=form.cleaned_data['nombre'],
                email=form.cleaned_data['email'],
                telefono=form.cleaned_data['telefono']
            )
            return redirect('lista_personas')  
    else:
        form = PersonaForm()
    
    return render(request, 'personas/crear_persona.html', {'form': form})

def lista_personas(request):
    personas = Persona.objects.all()
    return render(request, 'personas/lista_personas.html', {'personas': personas})