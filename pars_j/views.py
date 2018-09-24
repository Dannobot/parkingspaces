# coding=utf-8
from django.shortcuts import render_to_response, render
from django.views.decorators.http import require_GET
import json



@require_GET
def parserj(request):
    with open('jsons/park.json', 'r') as f:
        date = json.load(f)
        A = {}
        for i in date['parking_places']:
            A.update(i)
        B = {}
        for k in sorted(A):
            
            B[k] = A[k]


        
    return render_to_response('pars_j/zup.html', {'cou': B})



