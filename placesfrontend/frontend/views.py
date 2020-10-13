from django.shortcuts import render

def index(request):
    return render(request, 'frontend/index.html')
    

def partnerPlaces(request):
    return render(request, 'frontend/index.html')