from django.shortcuts import render
from django.http import HttpResponse
from django.conf import settings
from datetime import datetime
import facebook

mitmemes_id = '632968163547047'

def get_latest_meme():
    graph = facebook.GraphAPI(access_token=settings.FB_API_KEY, version='2.8')

    photos = graph.get_object(id=mitmemes_id, fields='photos.type(uploaded)')
    last_photo = graph.get_object(id=photos['photos']['data'][0]['id'], fields='images')

    return last_photo['images'][0]['source']

def index(request):
    now = datetime.now()
    context = {
        'date': "{:%B %d}".format(now),
        'time': "{:%I:%M %p}".format(now),
        'meme_url': get_latest_meme(),
    }
    
    return render(request, 'door_interface/index.html', context)
    
