# from django.http import HttpResponse
from django.shortcuts import render

def index(request):
	return render(request, 'web/index.html')

def partials_home(request):
	return render(request, 'web/partials/home.html')

def partials_quienesSomos(request):
	return render(request, 'web/partials/quienes-somos.html')