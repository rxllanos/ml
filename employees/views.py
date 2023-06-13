from django.shortcuts import render, redirect
from django.http import HttpResponse

from django.contrib.auth import authenticate, login, logout
from django.contrib import messages

from django.contrib.auth.models import User

def index(request):
    return render(request, "employees/index.html")

def login_user(request):
    if request.method == 'POST':
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            messages.success(request, ('Credenciales exitosas!'))
            return redirect('home')
        else:
            messages.success(request, ('Credenciales incorrectas, trata de nuevo'))
            return redirect('employees/login')
            

    else:
        return render(request, "employees/login.html") 

def logout_user(request):
    logout(request)
    messages.success(request, ('Acabas de salir!'))
    return redirect('home')

def profile(request):
    return render(request, "employees/profile.html")

def register(request):
    if request.method == "POST":
        username = request.POST["username"]
        first_name = request.POST["first_name"]
        last_name = request.POST["last_name"]
        password = request.POST["password"]
        email = request.POST["email"]

        user = User.objects.create_user(username=username, first_name=first_name, last_name=last_name, password=password, email=email)
        user.save()
        messages.success(request, ('Usuario creado con exito, entra con tus credenciales'))
        return render(request, 'employees/login.html')

    else:
            return render(request, 'employees/register.html')


    
