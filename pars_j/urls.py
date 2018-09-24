from django.conf.urls import url

from pars_j import views


urlpatterns = [

   url(r'^main/$', views.parserj, name='main'),
    

]
