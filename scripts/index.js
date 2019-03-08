
    
function weather() {

    var location = document.getElementById("location");
    var apiKey = 'c84490baa2961589a6901e6bca9c2847';
    var url = 'https://api.darksky.net/forecast/c84490baa2961589a6901e6bca9c2847//37.8267,-122.4233';


    navigator.geolocation.getCurrentPosition(success, error);

    function success(position, details, temperature) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;

        location.innerHTML = 'Latitude is ' + latitude + '° <br> Longitude is ' + longitude + '°';

        $.getJSON(url + apiKey + "/" + latitude + "," + longitude + "?callback=?", function(data) {
            $('#temp').html(data.currently.temperature + '° F');
            $('#minutely').html(data.minutely.summary);
        });
    }

    function error() {
        location.innerHTML = "Unable to retrieve your location";
    }
    
    location.innerHTML = "Locating...";
}

weather();
