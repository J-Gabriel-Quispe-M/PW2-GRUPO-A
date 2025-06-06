from django.shortcuts import render

def vista_contexto(request):
    contexto = {
        'myText' : 'Esto es entre nosotros',
        'myNumber' : 123,
    }
    return render (request, 'personas/test.html', contexto)