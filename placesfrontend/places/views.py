#views.py

from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status

from .models import Branch, Partner
from .serializers import BranchSerializer, PartnerSerializer, BranchImportSerializer
from rest_framework.decorators import api_view



@api_view(['GET', 'POST', 'DELETE'])
def branch_list(request):
    # GET list of branchs, POST a new branch, DELETE all branchs

    if request.method == 'GET':
        branchlist = Branch.objects.all()[:10]
        branchlist_serializer = BranchSerializer(branchlist, many=True)
        return JsonResponse(branchlist_serializer.data, safe=False)
        # 'safe=False' for objects serialization

def branch_count(request):

    if request.method == 'GET':
        branchcount = 0
        branchcount = Branch.objects.values('branch_short_name').distinct().count()
        return JsonResponse(branchcount, safe=False)

def latest_import(request, contributor):

        try:
            max_org_updated = Branch.objects.filter(contributor = contributor).latest('updated').updated
            lastestorgimport = Branch.objects.values('display_name', 'updated').filter(updated=max_org_updated).distinct()
        except Branch.DoesNotExist:
            return JsonResponse({'message': 'The branch does not exist'}, status=status.HTTP_404_NOT_FOUND)

        if request.method == 'GET':
            lastestorgimport_serializer = BranchImportSerializer(lastestorgimport, many=True)
            return JsonResponse(lastestorgimport_serializer.data, safe=False)

@api_view(['GET', 'PUT', 'DELETE'])
def branch_detail(request, branch_short_name):
    # find branch by branch_short_name (id)
    try:
        branch = Branch.objects.filter(branch_short_name=branch_short_name)
    except Branch.DoesNotExist:
        return JsonResponse({'message': 'The branch does not exist'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        branch_serializer = BranchSerializer(branch, many=True)
        return JsonResponse(branch_serializer.data, safe=False)

    elif request.method == 'DELETE':
        branch.delete()
        return JsonResponse({'message': 'Branch was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)

def branch_from_contributor(request, branch_short_name, contributor):
    # find branch by branch_short_name (id)
    try:
        branch = Branch.objects.filter(branch_short_name=branch_short_name, contributor=contributor)
    except Branch.DoesNotExist:
        return JsonResponse({'message': 'The branch does not exist'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        branch_serializer = BranchSerializer(branch, many=True)
        return JsonResponse(branch_serializer.data, safe=False)

@api_view(['GET', 'POST', 'DELETE'])
def partner_list(request):
    # GET list of partners, POST a new partner, DELETE all partners

     if request.method == 'GET':
        partners = Partner.objects.all()[:10]
        partners_serializer = PartnerSerializer(partners, many=True)
        return JsonResponse(partners_serializer.data, safe=False)
        # 'safe=False' for objects serialization

@api_view(['GET', 'PUT', 'DELETE'])
def partner_detail(request, partner_short_name):
    # find partner places by partner_short_name (id)
    try:
        partner = Branch.objects.filter(partner_short_name = partner_short_name)[:10]
    except Branch.DoesNotExist:
        return JsonResponse({'message': 'The partner does not exist'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        partner_serializer = BranchSerializer(partner, many=True)
        return JsonResponse(partner_serializer.data, safe=False)
