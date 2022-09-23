from django.db import models
from admin_side.models import Account

    
# creating the task table for adding and editing the task
class TaskManager(models.Model):
    
#  creating the status table,for the choice given to user for the progress
    status=(
        ('started','started'),
        ('15%','15%'),
        ('30%','30%'),
        ('50%','50%'),
        ('70%','70%'),
        ('90%','90%'),
        ('completed','completed'),
    )
    user=models.ForeignKey(Account,on_delete=models.SET_NULL,null=True)          #  SETNULL for user is deleted task always will be there 
    progress=models.CharField(choices=status,default='started',max_length=30)         
    project_name=models.CharField(max_length=20)
    estimate_time=models.CharField(max_length=20)
    created_at=models.DateField(auto_now_add=True)
    modify_at=models.DateTimeField(auto_now=True)
    
    
    def __str__(self):
        return self.user.name