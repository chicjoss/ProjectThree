// function initMap() {
//   var myLatLng = {lat: -2.046389, lng:, -79.845526;

//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 20,
//     center: myLatLng
//   });

//   var marker = new google.maps.Marker({
//     position: myLatLng,
//     map: map,
//     animation: google.maps.Animation.BOUNCE,
//     icon: '

//   var contentString = '<h1>Guayaquil h1><p>my favorite vacation spot
//   var infowindow = new google.maps.InfoWindow({
//      content: contentString
//   });


//   google.maps.event.addListener(marker, 'mouseover', function() {
//     infowindow.open(map, marker);
//   });

// }
$.noConflict();

jQuery(function($) {

  $('video').on('click', function() {
    this.paused ? this.play() : this.pause();
  });

  var github_url = 'https://api.github.com/repos/chicjoss/ProjectThree/commits?per_page=1';
    $.get(github_url, function(data) {
    var commit = {};
    data = data[0];

    commit.stamp = data.commit.author.date;
    commit.date = new Date(commit.stamp);
    commit.time_string =
      (commit.date.getMonth() + 1) + '/' +
      commit.date.getDate() + '/' +
      commit.date.getFullYear() + ', ' +
      commit.date.toLocaleTimeString();

    $('#foot').append(
      '<p>' +
      'Last Update(GitHub): <a href=' + data.html_url + '>' +
      data.commit.message.substring(0, data.commit.message.length) + '</a>' +
      ' on <time datetime="' + commit.stamp + '">' +
      commit.time_string + '</time>. ' +
      '</p>'
    );

  });
})