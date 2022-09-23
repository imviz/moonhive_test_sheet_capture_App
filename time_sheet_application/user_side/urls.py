from .views import *
from django.urls import path
from .import views
from rest_framework.routers import DefaultRouter


router=DefaultRouter()
#task crud operations 
router.register('task',task_management,basename='task')

urlpatterns = [   
     # user filter 
     path('usertask/',user_task.as_view(),name='filtered task')
]+router.urls