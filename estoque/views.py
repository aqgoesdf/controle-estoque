from django.shortcuts import render, redirect

# Create your views here.
from .models import Produto
from .forms import ProdutoFrom

def lista_produtos(request):
    if request.method == "POST":
        form = ProdutoFrom(request.POST)
        if form.is_valid():
            form.save()
            return redirect('lista_produtos')
    else:
        form = ProdutoFrom()


    produtos = Produto.objects.all()
    return render(request, 'estoque/lista.html',{
        'form': form,
        'produtos': produtos
    })