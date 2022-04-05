import pandas as pd

# returns list of numberplates from rawtextfile


def returnRawDataFromFile():
    with open("numberplaterawdata.txt") as file_in:
        lines = []
        for line in file_in:
            line = line.strip()
            if line:
                lines.append(line)
    return lines


# returns list of numberplates from rawtextfile
rawNumberPlateData = returnRawDataFromFile()
RegistrationNumber = []
Location = []

# cleaning of data
for numberplate in rawNumberPlateData:
    rawNumberPlate = numberplate.split("-")
    RegistrationNumber.append(rawNumberPlate[0].rstrip())
    Location.append(rawNumberPlate[1].lstrip())

# put the registration and location in a pandas dataframe
df = pd.DataFrame({"Registration": RegistrationNumber, "Location": Location})
df.to_csv('numberplatedata.csv', sep=';', index=False)
print("saved file to numberplatedata.csv")
