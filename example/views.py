# example/views.py
from datetime import datetime
from django.shortcuts import redirect,render
from django.template import Template


def index(request):
    return render(request,'index.html')