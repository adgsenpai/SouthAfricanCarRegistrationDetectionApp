import wikipedia
import requests
import json
WIKI_REQUEST = 'http://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&titles='
def get_image(city):
    try:
        result = wikipedia.search(city, results = 1)
        wikipedia.set_lang('en')
        wkpage = wikipedia.WikipediaPage(title = result[0])
        title = wkpage.title
        response  = requests.get(WIKI_REQUEST+title)
        json_data = json.loads(response.text)
        img_link = list(json_data['query']['pages'].values())[0]['original']['source']
        return img_link        
    except:
        return 0
def get_info(city):
    return wikipedia.summary(city)

if __name__ == '__main__':
    print(get_image('Johannesburg, Transvaal'))
    print(get_info('Johannesburg, Transvaal'))