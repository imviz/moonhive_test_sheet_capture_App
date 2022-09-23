from django.shortcuts import render
from rest_framework import viewsets
from .serializer import AccountSerializer, AccountSerializerWithToken, TaskSerializerWithUser
from .models import Account
from rest_framework.permissions import  IsAdminUser
from rest_framework.decorators import api_view
from django.contrib.auth.hashers import make_password
from rest_framework.response import Response
from rest_framework  import status
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from user_side.models import TaskManager
from datetime import datetime, timedelta
from django.db.models.functions import ExtractDay
from django.db.models import  Count

# customizing and adding data to jwt token
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)     
        serializer=AccountSerializerWithToken(self.user).data
        for k ,v in serializer.items():
            data[k]=v
        return data
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)    
        token['admin'] = user.is_admin 
        return token
    
# for simple jwt customization
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


# admin register   view
@api_view(['POST'])
def user_register(request):
    try:
        data=request.data
        name=data['name']
        section=data['section']
        email=data['email']
        password=data['password']
        confirm_password=data['confirm_password']

        # validatations for blank
        if email=='' or name=='' or name ==''  or password=='' or confirm_password=='':
            message={'error':' fill the blanks'}
            return Response(message,status=status.HTTP_400_BAD_REQUEST)
        # validation for password matching
        elif password!=confirm_password:
            message={'error':'password missmatch'}
            return Response(message,status=status.HTTP_400_BAD_REQUEST)
        # for password length check
        elif len(password)<6:
            message={'error':'password contain min 6 charector'}
            return Response(message,status=status.HTTP_400_BAD_REQUEST)
        
        # checking the email is already exist or not
        elif Account.objects.filter(email=email).exists():
            message={'error':'This email is already exist'}
            return Response(message,status=status.HTTP_400_BAD_REQUEST)
            
        # creating a object of Account model for signup 
        user=Account.objects.create(
            name=name,
            section=section,
            email=email,
            password=make_password(password),
             
        )
        serializere=AccountSerializer(user,many=False)
        return Response(serializere.data)
    except:
        message={'error':'there is a error occure'}
        return Response(message,status=status.HTTP_400_BAD_REQUEST)    
 
 
# update and view users   
class userDetails(viewsets.ModelViewSet):
    permission_classes=[IsAdminUser]
    queryset=Account.objects.filter(is_admin=False)
    serializer_class=AccountSerializer


# view daily task task that was created by user/employee
class task_management_daily(viewsets.ModelViewSet):   
    permission_classes=[IsAdminUser]
    now=datetime.today() 
    queryset=TaskManager.objects.filter(created_at=now)
    serializer_class=TaskSerializerWithUser



# view weekly task as compared to create at last 7 day report will get 
class task_management_weekly(viewsets.ModelViewSet):   
    permission_classes=[IsAdminUser]
    one_week_ago = datetime.today() - timedelta(days=7)
    queryset = TaskManager.objects.filter(created_at__gte=one_week_ago)
    serializer_class=TaskSerializerWithUser


# view monthly task as compared to create at last 30 day report will get 
class task_management_monthly(viewsets.ModelViewSet):   
    permission_classes=[IsAdminUser]
    now=datetime.today() 
    queryset = TaskManager.objects.filter(created_at__month=now.month)
    serializer_class=TaskSerializerWithUser
    
    
# getting count from today task progress wise like same progress having user doing progres count
@api_view(['GET'])
def daily_graph(request):
    now=datetime.today() 
    orders = TaskManager.objects.filter(created_at=now).annotate(month=ExtractDay('created_at')).values('progress',).annotate(count=Count('progress')).values('count','progress')
    print(orders,'order')    
    return Response(orders)



# its used to fing how much task a user will taked it
@api_view(['GET'])
def monthly_graph(request):
    now=datetime.today() 
    print(now.month,'ll')
    now=datetime.today() 
    value=TaskManager.objects.filter(created_at__month=now.month).values('user').annotate(count=Count('user')) 
    # user id changing to name for easyly understanding   
    for x in value:
        ID=x.get('user')     
        data=Account.objects.get(id=ID)
        print(data.name)
        name=data.name
        x['user']=name           
    return Response(value)
