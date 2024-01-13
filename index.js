const calToFar = (temp) => {
    let result = (temp * 9 / 5) + 32
    return result.toFixed(2);
}
const calToKel = (temp) => {
    let result = temp + 273.15;
    return result.toFixed(2);
}
const farToCal = (temp) => {
    let result = (temp - 32) * 5 / 9
    return result.toFixed(2);
}
const farToKel = (temp) => {
    temp = farToCal(temp);
    let result = Number(temp) + 273.15;
    return result.toFixed(2);
}
const kelToCal = (temp) => {
    let result = temp - 273.15;
    return result.toFixed(2);
}

const kelToFar = (temp) => {
    temp = temp - 273.15;
    let result = calToFar(temp);
    return Number(result).toFixed(2);
}

const handleSubmit = (e) => {
    e.preventDefault();
    let temperature = Number(fromInput.value);
    let fromTemperature = fromTemp.value;
    let toTemperature = toTemp.value;
    if (!temperature) {
        alert("Enter a value");
    }
    if (fromTemperature == toTemperature) {
        let sign = '';
        if(fromTemperature == 'calsius') sign = '&deg<b>C<b>';
        else if(fromTemperature == 'farenheit') sign = '&deg<b>F<b>';
        else sign = 'K';
        result.innerHTML = `<p>${temperature} ${sign}</p>`;
    }
    else {
        if (fromTemperature == 'calsius') {
            if (toTemperature == 'fahrenheit') {
                result.innerHTML = `<p>${calToFar(temperature)}&deg<b>F</b></p>`;
            }
            else {
                result.innerHTML = `<p>${calToKel(temperature)}<b>K</b></p>`;
            }
        }
        else if (fromTemperature == 'fahrenheit') {
            if (toTemperature == 'calsius') {
                result.innerHTML = `<p>${farToCal(temperature)}&deg<b>C</b></p>`;
            }
            else {
                result.innerHTML = `<p>${farToKel(temperature)}<b>K</b></p>`;
            }
        }
        else {
            if (toTemperature == 'calsius') {
                result.innerHTML = `<p>${kelToCal(temperature)}&deg<b>C</b></p>`;
            }
            else {
                result.innerHTML = `<p>${kelToFar(temperature)}&deg<b>F</b></p>`;
            }
        }
    }
}
const form = document.querySelector('#inputSec');
const result = document.querySelector('.outputDisp');
const fromInput = document.querySelector('#from');
const fromTemp = document.querySelector('#fromTemp');
const toTemp = document.querySelector('#toTemp');
form.onsubmit = handleSubmit;