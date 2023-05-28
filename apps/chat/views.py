from rest_framework import generics
from .models import Message
from .serializers import MessageSerializer
from rest_framework.pagination import PageNumberPagination

class NoPagination(PageNumberPagination):
    page_size = None

class MessageList(generics.ListCreateAPIView):
    pagination_class = NoPagination
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
    ordering = ('-timestamp',)