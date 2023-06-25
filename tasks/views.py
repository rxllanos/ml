from django.shortcuts import render
from django.http import HttpResponse
from .serializer import taskserializer
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets
from .models import task

class TaskViewSet(viewsets.ModelViewSet):    
    authentication_classes = [SessionAuthentication,BasicAuthentication]
    permission_classes = [IsAuthenticated]
    serializer_class = taskserializer
    queryset = task.objects.all()  