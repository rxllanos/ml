from django.db import models
from django.contrib.auth.models import User


LISTTASK = (
    ('General', 'General'),
    ('Cortar-Pasto', 'Cortar-Pasto'),
    ('Limpiar-Casa-Salon', 'Limpiar-Casa-Salon'),
    ('Limpiar-Perrera', 'Limpiar-Perrera'),
    ('Desyerbar-Huerta', 'Desyerbar-Huerta'),
    ('Platear-Arboles', 'Platear-Arboles'),
    ('Veneno-Ratas', 'Veneno-Ratas'),  
)


class task(models.Model): 
    responsable = models.ForeignKey(User, on_delete=models.CASCADE, default="TBA" , related_name="asignee")
    pendiente = models.CharField(max_length=20, choices=LISTTASK)
    tcompletado = models.BooleanField(default=False)
    fecha_terminado = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.id}: {self.pendiente}...  {self.completado} (Y/N)"

    def completado(self):
        if self.tcompletado:
            return "SI"
        else:
            return "NO"


