/*SLIDER https://www.w3schools.com/howto/howto_js_slideshow.asp HELPED WITH THE JS SLIDER /*/
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.967070,  lng:-5.663658},
    zoom: 18,
    mapTypeId:'roadmap',
    mapTypeControl:true,
    mapTypeControlOptions:{
      style:google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
      mapTypeIds:['roadmap','satellite'],
      position:google.maps.ControlPosition.TOP_CENTER
    },
  });
  var spainMarker = new google.maps.Marker({
    map:map,
    icon:{size:new google.maps.Size(50,50),scaledSize:new google.maps.Size(50,50),url:"media/pin.png"},
    draggable:true,
    position:{lat:40.967070,lng:-5.663658},
    animation:google.maps.Animation.BOUNCE,
    title:"Salamanca, Spain",
  });
  var infowindow=new google.maps.InfoWindow({content:"Salamanca, Spain"});
spainMarker.addListener('click',function(){
  infowindow.open(map,spainMarker);
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
  setTimeout(slideshow,3000);
}
