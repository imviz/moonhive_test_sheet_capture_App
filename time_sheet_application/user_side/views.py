from django.shortcuts import render
from rest_framework import viewsets,generics
from .models import TaskManager
from rest_framework.permissions import IsAuthenticated
from .serializer import TaskSerializer
from django_filters.rest_framework import DjangoFilterBackend


# get all task ,view all ,single view, update ,delete operation occured
class task_management(viewsets.ModelViewSet):   
    permission_classes=[IsAuthenticated]
    queryset=TaskManager.objects.all()
    serializer_class=TaskSerializer
    
    
# filter task based on user 
class user_task(generics.ListAPIView):
    permission_classes=[IsAuthenticated]
    queryset=TaskManager.objects.all()
    serializer_class=TaskSerializer
    filter_backends=[DjangoFilterBackend]
    filterset_fields = ['user']