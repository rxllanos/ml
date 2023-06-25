from rest_framework import serializers
from .models import task,Task_name

class taskserializer(serializers.ModelSerializer):
    category_name = serializers.CharField(source='category.name')
    empleado = serializers.CharField(source='responsable.first_name')
    class Meta:
        model = task
        fields = ('id','title','description','tcompletado','completado','category_name','empleado')