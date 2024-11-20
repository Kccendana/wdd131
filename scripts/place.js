const year = document.querySelector("#year");
year.textContent = new Date().getFullYear();

const lastModified = document.getElementById("lastModif")
lastModified.textContent = document.lastModified;


// Function to calculate windchill
function calculateWindChill(temperature, windSpeed) {
   return (35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16)).toFixed(0); 
}

// Function to display the windchill factor in the weather section
function displayWindChill() {
    // Static values for temperature (in Fahrenheit) and wind speed (in km/h)
    const temperature = 5; // in Fahrenheit
    const windSpeed = 10;  // in km/h
    let windchill
    if (temperature <= 50 && windSpeed > 3){
       windchill = calculateWindChill(temperature, windSpeed) + "°F"; 
    }else {
        windchill = 'N/A'
    }
    // Update the windchill in the page
    document.querySelector('.windChill').textContent = windchill;
    document.querySelector('.windSpeed').textContent = windSpeed + "km/h";
    document.querySelector('.temp').textContent = temperature + "°F";
}

// Run the functions when the page loads
window.onload = function () {
    displayWindChill();
};
