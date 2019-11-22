var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.967070,  lng:-5.663658},
    zoom: 18
  });
	
var image = "photos/pin.png";
  var spainMarker = new google.maps.Marker({
    position: {lat: 40.960607,len: -5.665813},
    map: map,
    icon: image
  });
}
window.addEventListener('onload',initMap);

/*Added a Javascript slideshow for fun/*/
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
