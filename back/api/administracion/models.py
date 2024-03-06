from django.db import models
from api.roles.models import Roles
from api.usuarios.models import Usuarios

class Administracion(models.Model):

    nombre = models.CharField(max_lenght=40)
    codigo = models.CharField(max_lenght=5)
    descripcion = models.CharField(max_lenght=30)
    roles = models.ForeignKey(Roles, on_delete=models.CASCADE)
    usuarios = models.Foreignkey(Usuarios, on_delete=models.CASCADE)

    class Meta:
        bd_table = 'Administracion'
