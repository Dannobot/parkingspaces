
from .forms import SubscriberForm
from django.shortcuts import render_to_response, render
# Create your views here.
from django.views.decorators.csrf import csrf_protect


@csrf_protect
def registr(request):

    form = SubscriberForm(request.POST or None)
    if request.method == "POST" and form.is_valid():
        data  = form.cleaned_data
        new_form = form.save()
        
    return render(request, 'registr/reg.html', locals())
    #return render_to_response('registr/reg.html', locals())
	
	
	
def registr1(request):
    args = {}
    args['form'] = SubscriberForm()
    if request.POST:
        newuser_form = SubscriberForm(request.POST)
        if newuser_form.is_valid():
            newuser_form.save()
            auth.login(request, newuser)
            return redirect('/')
        else:
            args['form'] = newuser_form
    return render_to_response('registr/reg.html', args)
