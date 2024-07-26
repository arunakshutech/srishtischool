# example/views.py
from datetime import datetime
from django.shortcuts import redirect,render
from django.template import Template


def index(request):
    return render(request,'index.html')


def about(request):
    return render(request,'about.html')

def news(request):
    return render(request,'news.html')

def contact(request):
    return render(request,'contact.html')