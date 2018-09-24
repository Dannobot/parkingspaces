from django.conf.urls import url

from redistr import views


urlpatterns = [

   url(r'^regi/$', views.registr, name='regi'),
    

]
