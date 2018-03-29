var map
var infowindow

function showAQI(data) {
    
  var aqiArray = data.results
  
   for (var i in aqiArray){
    var one = aqiArray[i].coordinates.latitude;
    var two = aqiArray[i].coordinates.longitude;
    var three = aqiArray[i].measurements[0].value;
    var four = aqiArray[i].measurements[0].parameter;
    var five = aqiArray[i].measurements[0].unit;
       
       createMarker(one, two, three, four, five)
   }
    
    

}



function createMarker(lat, lon, aqiValue, aqiParam, aqiUnit) {

  var latLng = new google.maps.LatLng(lat, lon)
if(aqiValue < 5){
  var marker = new google.maps.Marker({
    position: latLng,
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 14,
      fillColor: "green",
      fillOpacity: 0.8,
      strokeColor: "white",
      strokeWeight: 0.5
    },
    label: {text: aqiValue.toString(), // this puts a label on the marker icon
            fontSize: "10px",
            color: "white"},
    map: map
  })
  } else if(aqiValue < 10){
      var marker = new google.maps.Marker({
    position: latLng,
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 14,
      fillColor: "yellow",
      fillOpacity: 0.8,
      strokeColor: "white",
      strokeWeight: 0.5
    },
    label: {text: aqiValue.toString(), // this puts a label on the marker icon
            fontSize: "10px",
            color: "white"},
    map: map
  })
  }
    
    else if(aqiValue < 15){
      var marker = new google.maps.Marker({
    position: latLng,
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 14,
      fillColor: "orange",
      fillOpacity: 0.8,
      strokeColor: "white",
      strokeWeight: 0.5
    },
    label: {text: aqiValue.toString(), // this puts a label on the marker icon
            fontSize: "10px",
            color: "white"},
    map: map
  })
  }
    else if(aqiValue < 20){
      var marker = new google.maps.Marker({
    position: latLng,
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 14,
      fillColor: "red",
      fillOpacity: 0.8,
      strokeColor: "white",
      strokeWeight: 0.5
    },
    label: {text: aqiValue.toString(), // this puts a label on the marker icon
            fontSize: "10px",
            color: "white"},
    map: map
  })
  }
     else if(aqiValue < 20){
      var marker = new google.maps.Marker({
    position: latLng,
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 14,
      fillColor: "purple",
      fillOpacity: 0.8,
      strokeColor: "white",
      strokeWeight: 0.5
    },
    label: {text: aqiValue.toString(), // this puts a label on the marker icon
            fontSize: "10px",
            color: "white"},
    map: map
  })
  }
    
     else {
      var marker = new google.maps.Marker({
    position: latLng,
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 14,
      fillColor: "maroon",
      fillOpacity: 0.8,
      strokeColor: "white",
      strokeWeight: 0.5
    },
    label: {text: aqiValue.toString(), // this puts a label on the marker icon
            fontSize: "10px",
            color: "white"},
    map: map
  })
  }

  google.maps.event.addListener(marker, 'click', function(){
    infowindow.setContent("<div class='content'>" + aqiValue.toString() + " " + aqiParam + " " + aqiUnit + "</div>");
    infowindow.open(map,marker);
  })

}


function makeRequest() {
  $.ajax({
    url: "https://api.openaq.org/v1/latest?parameter=pm25&coordinates=34.1049,-118.40209&radius=1000000",
    success: function(data) {
      showAQI(data)
    }
  })
}

function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    center:{lat: 34.0522, lng: -118.2437}, 
    zoom: 6 
  })

  infowindow = new google.maps.InfoWindow({
    content: "placeholder"
  })

  makeRequest()

}
