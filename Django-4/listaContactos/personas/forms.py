from django import forms
from django.core.exceptions import ValidationError

class PersonaForm(forms.Form):
    nombre = forms.CharField(max_length=100, required=True)
    email = forms.EmailField(required=True)
    telefono = forms.CharField(max_length=20, required=True)

    def clean_nombre(self):
        nombre = self.cleaned_data['nombre']
        if nombre.isdigit():
            raise ValidationError('El nombre no puede ser solo números.')
        return nombre

    def clean_telefono(self):
        telefono = self.cleaned_data['telefono']
        if not telefono.isdigit():
            raise ValidationError('El teléfono debe contener solo dígitos.')
        return telefono
