from django.db import models

class Persona(models.Model):
    nombres = models.CharField(max_length=100)  # Campo 'nombres' debe existir
    apellidos = models.CharField(max_length=100)  # Campo 'apellidos' debe existir
    edad = models.IntegerField(blank=True, null=True)
    donador = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.nombres} {self.apellidos}"