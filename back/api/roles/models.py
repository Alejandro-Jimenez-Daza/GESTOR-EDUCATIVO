from django.db import models

class Roles(models.Model):
    nombre = models.CharField(max_lenght=20)
    descripcion = models.CharField(max_lenght=30)
    fecha_creacion =  models.DateField(null=False, max_length=30)
    fecha_modificacion = models.DateTimeField()
    estado = models.CharField(max_lenght=10)

    class Meta: 
        bd_table = 'Roles'