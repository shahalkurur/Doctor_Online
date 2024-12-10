
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User
from home.serializers import CreateUser
from rest_framework import generics
from rest_framework.permissions import AllowAny,IsAuthenticated

class createUserView(generics.CreateAPIView):
    queryset=User.objects.all()
    serializer_class =CreateUser
    permission_classes=[AllowAny]

class ListUserView(generics.ListAPIView):
    queryset=User.objects.all()
    serializer_class =CreateUser
    permission_classes=[AllowAny]


