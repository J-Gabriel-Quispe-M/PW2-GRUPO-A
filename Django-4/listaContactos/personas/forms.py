from django import forms

class PersonaForm(forms.Form):
    nombre = forms.CharField(max_length=100, required=True)
    email = forms.EmailField(required=True)
    telefono = forms.CharField(max_length=20, required=True)
