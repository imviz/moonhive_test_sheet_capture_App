from rest_framework import serializers
from .models import TaskManager

# for task managing
class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model=TaskManager
        fields='__all__'