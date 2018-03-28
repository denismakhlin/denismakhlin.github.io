var map
var infowindow

function showWeather() {
  var weatherCA = ca_data.data.METAR
  var weatherWA = wa_data.data.METAR
  var weatherOR = or_data.data.METAR
  
  for(var i in weatherCA){
  var one = weatherCA[i].latitude;
  var two = weatherCA[i].longitude;
  var three = weatherCA[i].temp_c;
      
      createCircleMarker(one, two, three)
  }
    
for(var j in weatherWA){
  var four = weatherWA[j].latitude;
 var five = weatherWA[j].longitude;
  var six =  weatherWA[j].temp_c;
    
    createCircleMarker(four, five, six)
}
    
for(var k in weatherOR){
 var seven = weatherOR[k].latitude;
  var eight = weatherOR[k].longitude;
  var nine = weatherOR[k].temp_c;
createCircleMarker(seven, eight, nine)
}


  
  
  

}


function createCircleMarker(lat, lon, temp) {
  var latLng = new google.maps.LatLng(lat, lon)

  var marker = new google.maps.Marker({
    position: latLng,
    map: map
  })


if(temp < 5){
  var circle = new google.maps.Circle({
    map: map,

    radius: 40000,
    fillColor: "skyblue",
    strokeColor: '#FFFFFF',
    strokeWeight: .5,
    fillOpacity: .8,
})

  circle.bindTo('center', marker, 'position');

  marker.setVisible(false)
  


}else if(temp < 10){
var circle = new google.maps.Circle({
    map: map,

    radius: 40000,
    fillColor: "green",
    strokeColor: '#FFFFFF',
    strokeWeight: .5,
    fillOpacity: .8,
})
                                    
     circle.bindTo('center', marker, 'position');

  marker.setVisible(false)

} else if(temp < 16){
  var circle = new google.maps.Circle({
    map: map,

    radius: 40000,
    fillColor: "lightgreen",
    strokeColor: '#FFFFFF',
    strokeWeight: .5,
    fillOpacity: .8,
  })
     circle.bindTo('center', marker, 'position');

  marker.setVisible(false)
  
  }else {
  var circle = new google.maps.Circle({
    map: map,

    radius: 40000,
    fillColor: "yellow",
    strokeColor: '#FFFFFF',
    strokeWeight: .5,
    fillOpacity: 0,
  })
     circle.bindTo('center', marker, 'position');

  marker.setVisible(false)
  }}
function initMap() {
    

  map = new google.maps.Map(document.getElementById('map'), {
    center:{lat: 35.0078, lng: -97.0929}, 
    zoom: 4 
  })

  infowindow = new google.maps.InfoWindow({
    content: "placeholder"
  })

  showWeather()

}
