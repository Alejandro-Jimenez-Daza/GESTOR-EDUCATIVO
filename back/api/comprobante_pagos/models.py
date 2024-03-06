from django.db import models
from api.roles.models import Roles
from api.usuarios.models import Usuarios

class ComprobantePagos(models.model):
    fecha_pago = models.DateField()
    nom_acudiente = models.CharField(max_lenght=40)
    descrip_pago = models.CharField(max_lenght=50)
    monto_pago = models.CharField(max_lenght=20)
    roles = models.ForeignKey(Roles, on_delete=models.CASCADE)
    usuarios = models.ForeignKey(Usuarios, on_delete=models.CASCADE)

    class Meta:
        bd_table = 'ComprobantePagos'
