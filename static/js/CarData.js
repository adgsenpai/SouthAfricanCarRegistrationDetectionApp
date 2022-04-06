const renderNumberPlateTile = () => {
    const ResultLbl = document.getElementById('lblResultTownCity');
    const UserCode = document.getElementById('edtNumberPlateCode');
    const ResultDOM = document.getElementById('ResultOutput');

    if(CarData[UserCode.value] == undefined){
        ResultDOM.style.display = 'none';
    }
    else
    {
        ResultDOM.style.display = 'block';
        ResultLbl.innerHTML = "Info:"+" "+CarData[UserCode.value];
    }
}