from rest_framework import serializers
from .models import Message
from apps.users.models import PortalUser

class MessageSerializer(serializers.ModelSerializer):
    user_logo_url = serializers.SerializerMethodField()
    message = serializers.CharField(source='content')  # Personalizar el campo "message"

    class Meta:
        model = Message
        fields = ('id', 'message', 'user_logo_url', 'timestamp', 'username')
        read_only_fields = ('id', 'timestamp')
        
    def get_user_logo_url(self, obj):
        try:
            user = PortalUser.objects.get(nickname=obj.username)
            return user.get_logo()
        except PortalUser.DoesNotExist:
            return None 