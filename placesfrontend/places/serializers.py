from rest_framework import serializers
from .models import Branch, Partner

# Branch Serializer
class BranchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Branch
        fields = '__all__'

class BranchImportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Branch
        fields = ['display_name', 'updated']

# Partner Serializer
class PartnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Partner
        fields = '__all__'




