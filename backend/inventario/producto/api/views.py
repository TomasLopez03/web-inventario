from rest_framework import viewsets
from producto.models import Producto
from producto.api.serializer import ProductoSerializer



class ProductoViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer

