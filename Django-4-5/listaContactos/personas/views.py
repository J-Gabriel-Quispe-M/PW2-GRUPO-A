from django.shortcuts import render, redirect
from .forms import PersonaForm
from .models import Persona
from django.shortcuts import get_object_or_404
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from .models import Persona


def crear_persona(request):
    if request.method == 'POST':
        form = PersonaForm(request.POST)
        if form.is_valid():
            persona = Persona.objects.create(
                nombre=form.cleaned_data['nombre'],
                email=form.cleaned_data['email'],
                telefono=form.cleaned_data['telefono']
            )
            return redirect(persona.get_absolute_url()) 
    else:
        form = PersonaForm()
    
    return render(request, 'personas/crear_persona.html', {'form': form})

def lista_personas(request):
    personas = Persona.objects.all()
    return render(request, 'personas/lista_personas.html', {'personas': personas})

def editar_persona(request, id):
    persona = get_object_or_404(Persona, id=id)

    if request.method == 'POST':
        form = PersonaForm(request.POST)
        if form.is_valid():
            # Actualizar los datos manualmente
            persona.nombre = form.cleaned_data['nombre']
            persona.email = form.cleaned_data['email']
            persona.telefono = form.cleaned_data['telefono']
            persona.save()
            return redirect('lista_personas')
    else:
        # Precarga los datos con initial=
        form = PersonaForm(initial={
            'nombre': persona.nombre,
            'email': persona.email,
            'telefono': persona.telefono,
        })

    return render(request, 'personas/editar_persona.html', {'form': form, 'persona': persona})

def eliminar_persona(request, id):
    persona = get_object_or_404(Persona, id=id)

    if request.method == 'POST':
        persona.delete()
        return redirect('lista_personas')

    return render(request, 'personas/eliminar_persona.html', {'persona': persona})

def detalle_persona(request, id):
    persona = get_object_or_404(Persona, id=id)
    return render(request, 'personas/detalle_persona.html', {'persona': persona})

class PersonaListView(ListView):
    model = Persona
    template_name = 'personas/persona_list.html'
    context_object_name = 'personas'

class PersonaDetailView(DetailView):
    model = Persona
    template_name = 'personas/persona_detail.html'
    context_object_name = 'persona'