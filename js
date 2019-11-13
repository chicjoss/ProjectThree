function initMap() {
  var myLatLng = {lat: -2.046389, lng:, -79.845526;

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 20,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    animation: google.maps.Animation.BOUNCE,
    icon: '

  var contentString = '<h1>Guayaquil h1><p>my favorite vacation spot
  var infowindow = new google.maps.InfoWindow({
     content: contentString
  });


  google.maps.event.addListener(marker, 'mouseover', function() {
    infowindow.open(map, marker);
  });

}
