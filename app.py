#ADGSTUDIOS - server.py

from flask import Flask,render_template,send_from_directory,jsonify,request
import WebComponents
import FetchData
from flask_cors import CORS
app = Flask(__name__,template_folder='./pages')
CORS(app)
# allows for files to be refreshed in server
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

RegData = WebComponents.ReturnNumberPlateData()
CodeDOM = WebComponents.RenderCodesDOM()

@app.route('/')
def home():
  return render_template('index.html',CodeDOM=CodeDOM,CarData=RegData)

@app.route('/api/v1/returnRegData')
def returnRegData():
  return jsonify(RegData)

@app.route('/api/v1/getData',methods=['POST'])
def getGeneralInformation():
  if request.data:
     data = request.get_json()
     try:
      imageURL = FetchData.get_image(data['city'])
     except:
      imageURL = 'none'
     try:
      generalInfo = FetchData.get_info(data['city'])
     except:
      generalInfo = 'none'
     return {'imageURL':imageURL,'generalInfo':generalInfo}
  else:
      return {"error":"invalid syntax for API"}
  
 

#running server on port 5000 - you can change the values here
if __name__ == "__main__":
  app.run(host="0.0.0.0",port=5000)