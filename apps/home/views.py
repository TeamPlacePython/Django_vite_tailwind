from django.shortcuts import render


def home_index_view(request):
    template_name = "home/index.html"
    return render(request, template_name=template_name)
