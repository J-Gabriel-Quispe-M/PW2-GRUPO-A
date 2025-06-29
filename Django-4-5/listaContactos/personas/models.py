from django.db import models

class Persona(models.Model):
    nombre = models.CharField(max_length=100)
    email = models.EmailField()
    telefono = models.CharField(max_length=20)

    def __str__(self):
        return self.nombre

    def get_absolute_url(self):
        from django.urls import reverse
        return reverse('detalle_persona', args=[str(self.id)])
