from django.http import HttpResponse

def home(request):
    return HttpResponse("¡Bienvenido a la página de inicio!")

def another(request):
    if request.user.is_authenticated:
        mensaje = f"Hola {request.user.username}, estás autenticado."
    else:
        mensaje = "Usuario anónimo: no has iniciado sesión."

    return HttpResponse(mensaje)