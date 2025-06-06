from django.shortcuts import render

def lista_personas(request):
    personas = [
        {'nombre': 'Juan', 'edad': 30},
        {'nombre': 'Ana', 'edad': 25},
        {'nombre': 'Luis', 'edad': 40}
    ]
    contexto = {
        'personas': personas
    }
    return render(request, 'personas/lista.html', contexto)