import pandas as pd

df = pd.read_csv("numberplatedata.csv", delimiter=";")


def RenderCodesDOM():
    DOM = """
    <datalist id="RegCodes">
    """
    for index, row in df.iterrows():
        DOM += """
        <option value="{}">
        """.format(row['Registration'])
    DOM += "</datalist>"
    return DOM

def ReturnNumberPlateData():
    datadict = (df.to_dict(orient='list'))
    output = {}
    for item in datadict['Registration']:
        output[item] = datadict['Location'][datadict['Registration'].index(item)]
    return output