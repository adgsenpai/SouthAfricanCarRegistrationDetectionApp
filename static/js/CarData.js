const renderNumberPlateTile = () => {
    const ResultLbl = document.getElementById('lblResultTownCity');
    const UserCode = document.getElementById('edtNumberPlateCode');
    const ResultDOM = document.getElementById('ResultOutput');
    const Progress = document.getElementById('Progress');
    Progress.style.display = 'flex';
    if (CarData[UserCode.value] == undefined) {
        ResultDOM.style.display = 'none';
    }
    else {
        ResultDOM.style.display = 'block';
        ResultLbl.style.display = 'block';
        ResultLbl.innerHTML = CarData[UserCode.value];
        document.getElementById('GeneralInformation').style.display = 'none';
        document.getElementById('CityRenderImg').style.display = 'none';
        fetchGeneralInformation(CarData[UserCode.value]);
        renderImage(CarData[UserCode.value]);
    }
    
}

const fetchGeneralInformation = (city) => {
    fetch('/api/v1/getGeneralInformation',
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ "city": city })
        })
        .then(response => response.json())
        .then(data => setGeneralInformation(data['result']))
        .catch(err => destroyGeneralInformation());
}

const setGeneralInformation = (data) => {
    document.getElementById('GeneralInformation').style.display = 'block';
    document.getElementById('GeneralInformation').innerHTML = data;
    Progress.style.display = 'none';
}

const setImage = (data) => {
    if (data == 0)
    {
        document.getElementById('CityRenderImg').style.display = 'none';
        
    }
    else
    {
        document.getElementById('CityRenderImg').style.display = 'block';
        document.getElementById('CityRenderImg').src = data;
        Progress.style.display = 'none';
    }
}

const destroyGeneralInformation = () =>{
    document.getElementById('GeneralInformation').style.display = 'none';
    Progress.style.display = 'none';
}

const destroyImage = () => {
    document.getElementById('CityRenderImg').style.display = 'none';
    Progress.style.display = 'none';
}



const renderImage = (city) => {
    fetch('/api/v1/renderImages',
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ "city": city })
        })
        .then(response => response.json()
        )
        .then(data => setImage(data['result']))
        .catch(err => destroyImage());
}

