var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.967070,  lng:-5.663658},
    zoom: 18
  });
	
  var spainMarker = new google.maps.Marker({
    map:map,
    size:(5,5),
    icon:{size: new google.maps.Size(50,50),scaledSize: new google.maps.Size(50,50),url:"media/pin.png"},
    draggable:true,
    position:{lat:40.967070, lng:-5.663658},
    animation:google.maps.Animation.BOUNCE,
  });
 var map = new google.maps.Map(document.getElementById('map'),
  mapOptions);

 Overlay = new google.maps.GroundOverlay(
  'media/sala',
  imageBounds);
 Overlay.setMap(map);
 }
}
window.addEventListener('onload',initMap);

/*Added a Javascript slideshow for fun*/
var start=0;
slideshow();
function slideshow(){
  var beginning;
  var grab_html_element=document.getElementsByClassName("slides");
  for(beginning=0;beginning<grab_html_element.length;beginning++){
    grab_html_element[beginning].style.display="none";
  }
  start++;
  if(start>grab_html_element.length){start=1}
  grab_html_element[start-1].style.display="block";
  setTimeout(slideshow,1000);
}
