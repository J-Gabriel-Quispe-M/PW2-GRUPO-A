from django.http import HttpResponse

from django.shortcuts import render

def home(request):
    return render(request, 'home.html')

def another(request):
    if request.user.is_authenticated:
        mensaje = f"Hola {request.user.username}, estás autenticado."
    else:
        mensaje = "Usuario anónimo: no has iniciado sesión."

    return HttpResponse(mensaje)