var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener(
            'deviceready',
            this.onDeviceReady.bind(this),
            false
        );
    },
// deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        console.log('onDeviceReady called');
    }
};
app.initialize();
var Latitude = undefined;
var Longitude = undefined;

// Success callback for getting geo coordinates
var onMapSuccess = function(position) {
    console.log(
        'onMapSuccess called - latitude: ' +
            position.coords.latitude +
            ', longitude' +
            position.coords.longitude
    );
    Latitude = position.coords.latitude;
    Longitude = position.coords.longitude;
getMap(Latitude, Longitude);
};
// Get map by using coordinates
var map;
function getMap(latitude, longitude) {
    console.log('getMap called');
    var mapOptions = {
        center: new google.maps.LatLng(0, 0),
        zoom: 1,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
map = new google.maps.Map(document.getElementById('map'), mapOptions);
var latLong = new google.maps.LatLng(latitude, longitude);
var marker = new google.maps.Marker({
        position: latLong
    });
marker.setMap(map);
    map.setZoom(15);
    map.setCenter(marker.getPosition());
}
// Success callback for watching your changing position
var onMapWatchSuccess = function(position) {
    var updatedLatitude = position.coords.latitude;
    var updatedLongitude = position.coords.longitude;
if (updatedLatitude != Latitude && updatedLongitude != Longitude) {
        Latitude = updatedLatitude;
        Longitude = updatedLongitude;
getMap(updatedLatitude, updatedLongitude);
    }
};
// Error callback
function onMapError(error) {
    console.log(
        'code: ' + error.code + '\n' + 'message: ' + error.message + '\n'
    );
}
// Watch your changing position
function watchMapPosition() {
    return navigator.geolocation.watchPosition(onMapWatchSuccess, onMapError, {
        enableHighAccuracy: true
    });
}



// User added code
document.getElementById("cameraTakePicture").addEventListener
    ("click", cameraTakePicture); 

function cameraTakePicture() { 
    navigator.camera.getPicture(onSuccess, onFail, {  
        quality: 50, 
        destinationType: Camera.DestinationType.DATA_URL 
        
    });  
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    
    function onSuccess(imageData) { 
        var image = document.getElementById('myImage'); 
        image.src = "data:image/jpeg;base64," + imageData; 

    }  
    
    function onFail(message) { 
        alert('Failed because: ' + message); 
    } 
}

document.getElementById("cameraGetPicture").addEventListener("click", cameraGetPicture); 

function cameraGetPicture() {
    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
       destinationType: Camera.DestinationType.DATA_URL,
       sourceType: Camera.PictureSourceType.PHOTOLIBRARY
    });
 
    function onSuccess(imageURL) {
       var image = document.getElementById('myImage');
       image.src = imageURL;
    }
 
    function onFail(message) {
       alert('Failed because: ' + message);
    }
 
 }

 function onSuccess(position) {
    var element = document.getElementById('geolocation');
    element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                        'Longitude: '          + position.coords.longitude             + '<br />' +
                        'Altitude: '           + position.coords.altitude              + '<br />' +
                        'Accuracy: '           + position.coords.accuracy              + '<br />' +
                        'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                        'Heading: '            + position.coords.heading               + '<br />' +
                        'Speed: '              + position.coords.speed                 + '<br />' +
                        'Timestamp: '          + new Date(position.timestamp)          + '<br />';
}

function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

