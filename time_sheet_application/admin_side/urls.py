from .views import *
from django.urls import path
from .import views
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import (
   
    TokenRefreshView,
)

router=DefaultRouter()
# for user registraions/ updation ,delete
router.register('user',userDetails,basename='user')
# daily report 
router.register('dailytask',task_management_daily,basename='dailytask')
# weekly report
router.register('weeklytask',task_management_weekly,basename='weeklytask')
# monthly report
router.register('monthlytask',task_management_monthly,basename='monthlytask')

urlpatterns = [   
       # user registering
    path('user_register/',views.user_register,name='user_register'),   
            # admin login/user login same login  is used in this project in frontend will be redirect admin and user
    path('login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
        # for refresh token ,it provide more safety
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # for daily graph
    path('daily_graph/',views.daily_graph,name='daily_task'),
    # for monthly graph
    path('monthly_graph/',views.monthly_graph,name='monthely_graph'),
]+router.urls
