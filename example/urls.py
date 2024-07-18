# example/urls.py
from django.urls import path

from example.views import *


urlpatterns = [
    path('', index,name='home'),
    path('about', about,name='about'),
    path('news', news,name='news'),
]