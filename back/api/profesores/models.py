from django.db import models
from api.usuarios.models import Usuarios
from api.roles.models import Roles

class Profesores(models.model):
    nombre = models.CharField(max_lenght=40)
    apellido = models.CharField(max_lenght=40)
    fecha_nacimiento = models.CharField(models.DateField)
    genero = models.CharField(max_lenght=15)
    telefono = models.CharField(max_lenght=15)
    correo = models.CharField(max_lenght=30)
    especialidad = models.CharField(max_lenght=50)
    titilo_academico = models.CharField(max_lenght=40)
    fecha_contratacion = models.DateField()
    expe_laboral = models.CharField(max_lenght=30)
    num_identificacion = models.CharField(max_lenght=30)
    estado = models.CharField(max_lenght=15)
    usuario = models.ForeignKey(Usuarios, on_delete=models.CASCADE)
    roles = models.ForeignKey(Roles, on_delete=models.CASCADE)

    class Meta:
        bd_table = 'Profesores'
