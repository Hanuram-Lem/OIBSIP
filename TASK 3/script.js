function convertTemperature() {
    var temperatureInput = document.getElementById("temperatureInput").value;
    var unitSelect = document.getElementById("unitSelect").value;
    var roundDigits = document.getElementById("roundDigits").value;
    var convertedTemperature;
    
    if (isNaN(temperatureInput)) {
      alert("Please enter a valid number for temperature.");
      return;
    }
  
    if (unitSelect === "celsius") {
      convertedTemperature = (parseFloat(temperatureInput) * 9 / 5) + 32;
      document.getElementById("result").innerHTML = convertedTemperature.toFixed(roundDigits) + " °F";
    } else if (unitSelect === "fahrenheit") {
      convertedTemperature = (parseFloat(temperatureInput) - 32) * 5 / 9;
      document.getElementById("result").innerHTML = convertedTemperature.toFixed(roundDigits) + " °C";
    } else if (unitSelect === "kelvin") {
      convertedTemperature = parseFloat(temperatureInput) - 273.15;
      document.getElementById("result").innerHTML = convertedTemperature.toFixed(roundDigits) + " °C";
    }
  }
  