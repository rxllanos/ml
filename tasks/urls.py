from django.urls import path, include
from rest_framework import routers
from .views import TaskViewSet
from rest_framework.routers import DefaultRouter




app_name = "tasks"

router = DefaultRouter()
router.register('',TaskViewSet, basename='tasky')


urlpatterns = [
    path('viewset/', include(router.urls)),
    path('viewset/<int:pk>/', include(router.urls)),
 ]