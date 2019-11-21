var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {(lat: 40.967070,  lng:-5.663658)},
    zoom: 18
  });
	
var image = "photos/pin.png";
  var spainMarker = new google.maps.Marker({
    position: {(lat: 40.960607,len: -5.665813)},
    map: map,
    icon: image
  });
}
window.addEventListener('onload',initMap);
