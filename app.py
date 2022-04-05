#ADGSTUDIOS - server.py

from flask import Flask,render_template,send_from_directory,jsonify
import WebComponents
app = Flask(__name__,template_folder='./pages')

# allows for files to be refreshed in server
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

RegData = WebComponents.ReturnNumberPlateData()
CodeDOM = WebComponents.RenderCodesDOM()

@app.route('/')
def home():
  return render_template('index.html',CodeDOM=CodeDOM)

@app.route('/api/v1/returnRegData')
def returnRegData():
  return jsonify(RegData)

#running server on port 5000 - you can change the values here
if __name__ == "__main__":
  app.run(host="0.0.0.0",port=5000)