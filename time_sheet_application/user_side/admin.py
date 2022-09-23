from django.contrib import admin
from .models import TaskManager
# Register your models here.



class TaskAdmin(admin.ModelAdmin):
    list_display = ('created_at', 'modify_at')

admin.site.register(TaskManager,TaskAdmin)