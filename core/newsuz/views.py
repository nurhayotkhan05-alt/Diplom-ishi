from django.shortcuts import render
from .models import *

# Create your views here.


from django.shortcuts import render

from core.newsuz.models import Category


def home(request):
    return render(request, 'index.html')


def news_list(request):
    return render(request, 'news.html')


def article_detail(request):
    return render(request, 'article.html')


def categories(request):
    categories_main = Category.objects.all()
    ctx = {'categories':categories_main}
    return render(request, 'categories.html',ctx)


def about(request):
    return render(request, 'about.html')


def contact(request):
    return render(request, 'contact.html')


def login_view(request):
    return render(request, 'login.html')


def register(request):
    return render(request, 'register.html')


def profile(request):
    return render(request, 'profile.html')