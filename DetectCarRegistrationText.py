import requests
import base64
import json

SECRET_KEY = 'sk_f438d4ca5033c9b5cc801d5c'
def DetectCarRegistrationTextFromImage(IMAGE_PATH):
    with open(IMAGE_PATH, 'rb') as image_file:
        img_base64 = base64.b64encode(image_file.read())
    url = 'https://api.openalpr.com/v3/recognize_bytes?recognize_vehicle=1&country=ZA&secret_key=%s' % (SECRET_KEY)
    r = requests.post(url, data = img_base64)
    return (json.dumps(r.json(), indent=2))
