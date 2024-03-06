from django.db import models
from api.roles.models import Roles
from api.usuarios.models import Usuarios

class Acudientes(models.Model):
    nombre = models.CharField(max_lenght=40)
    apellido = models.CharField(max_length=40)
    edad = models.CharField(max_lenght=2)
    fecha_nacimiento = models.DateField()
    genero = models.CharField(max_length=15)
    telefono = models.CharField(max_length=20)
    direccion = models.CharField(max_lenght=30)
    correo = models.CharField(max_length=30)
    num_identificacion = models.CharField(max_length=15)
    parentesco = models.CharField(max_lenght=20)
    ocupacion = models.CharField(max_lenght=40)
    nom_empresa = models.CharField(max_lenght=50)
    estado_civil = models.CharField(max_lenght=15)
    usuario = models.ForeignKey(Usuarios, on_delete=models.CASCADE)
    roles = models.ForeignKey(Roles, on_delete=models.CASCADE)

    class Meta:
        bd_table = 'Acudientes'