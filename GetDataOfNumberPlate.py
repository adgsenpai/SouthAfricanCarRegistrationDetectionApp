import pandas as pd
import re


def FindNumberPlateData(query):
    df = pd.read_csv('numberplatedata.csv', delimiter=";")
    score = 0
    bestIndex = 0
    RegCodeEnd1Letter = str(query[-1:])
    RegCodeStart1Letter = str(query[:1])
    RegCodeEnd2Letter = str(query[-2:])
    RegCodeStart2Letter = str(query[:2])
    for index, row in df.iterrows():
        if RegCodeEnd1Letter == str(row['Registration'])[-1:] and RegCodeStart1Letter == str(row['Registration'])[:1]:
            return df.iloc[bestIndex]
        if RegCodeEnd2Letter == str(row['Registration'])[-2:] and RegCodeStart2Letter == str(row['Registration'])[:2]:
            return df.iloc[bestIndex]
        

print(FindNumberPlateData('CY'))