from rest_framework import serializers
from .models import Account
from user_side.models import TaskManager

# for user json details provider
class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model=Account
        exclude=['password']
        
 # adding some data into jwt token 
class AccountSerializerWithToken(AccountSerializer):
       class Meta:
        model=Account
        fields=['id','email','name','is_admin']


# for task managing
class TaskSerializerWithUser(serializers.ModelSerializer):
    user=AccountSerializer(many=False)
    class Meta:
        model=TaskManager
        fields='__all__'