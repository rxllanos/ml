from django.urls import path
from . import views

app_name = "employees"
urlpatterns = [
     path("", views.index, name="index"),
     path('login_user', views.login_user, name='login'),
     path('logout_user', views.logout_user, name='logout'),
     path('profile', views.profile, name='profile'),
     path('register', views.register, name='register'),
 ]

