var map() {
 var jh = document.getElementById('map');
	var mapLocation = new google.maps.LatLng(39.855191, -4.030019);
	var mapOptions = {
		center: myLocation,
		zoom: 22,
		mapTypeId: google.maps.MapTypeId.SATELLITE,
		mapTypeControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_CENTER
		}
    
    var myMap = new google.maps.Map(jh, mapOptions);
    var marker = new google.maps.Marker({
		position: myLocation,
		map: myMap,
		animation: google.maps.Animation.BOUNCE,
		icon: 'photo/pin.png'
	});
var contentString = '<h1>Toeldo, Espana</h1><p> This is Toledo!</p>';

var infowindow = new google.maps.InfoWindow({
      content: contentString
  	});
  google.maps.event.addListener(marker, 'mouseover', function() {
    	infowindow.open(myMap, marker);
  	});

}
google.maps.event.addDomListener(window, 'load', init);



  
  
