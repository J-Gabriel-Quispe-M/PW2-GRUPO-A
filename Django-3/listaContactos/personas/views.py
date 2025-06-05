from django.shortcuts import render

def ejemplo_contexto(request):
    contexto = {
        'nombre' : 'Juan',
        'edad' : 30,
        'ocupacion' : 'Ingeniero'
    }
    return render (request, 'personas/test.html', contexto)