
/*function initMap() {
  var myLatLng = {lat: 49.84905942, lng: 24.02411163};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.HYBRID,
    center: myLatLng
  });
  var main_office = 'img/office.png';
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,

    icon: main_office
  });

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading"><span class="logo">OSCAR</span>development</h1>'+
        '<div id="bodyContent">'+
          '<p><b>Адреса головного офісу:'+ '<br>' +
          '</b> Україна, <b>м.Львів</b>, 79058,' + '<br>' +
          'вул. Цехова 1/4'+ '<br>' +
          'Номери телефонів: '+ '<br>' +
          '                  +38(073) 770-3377'+ '<br>' +
          '                  +38(097) 524-6076'+ '<br>' +
          '                  +38(095) 595-1107'+ '<br>' +
          '                  +38(093) 879-4902'+ '<br>' +
          '                  +38(095) 709-5379'+ '<br>' +
          '</p>'+
          '<p>Електронна адреса для співпраці <a href="#">'+
          'https://oscardevelopment2015@gmail.com</a> '+
          '.</p>'+
        '</div>'+
        '<img src="img/office_pic.png">' + 
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

    marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}

initMap();*/

function initialize() {

  // Create an array of styles.
  var styles = [
              {"featureType":"administrative", "elementType":"all", "stylers":[{"visibility":"on"}]},
              {"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},
              {"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},
              {"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"on"}]},
              {"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"on"}]},
              {"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},
              {"featureType":"poi.attraction","elementType":"all","stylers":[{"visibility":"on"}]},
              {"featureType":"poi.business","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},
              {"featureType":"poi.business","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#8f8f8f"}]},
              {"featureType":"poi.government","elementType":"all","stylers":[{"visibility":"on"}]},
              {"featureType":"poi.medical","elementType":"all","stylers":[{"visibility":"on"}]},
              {"featureType":"poi.park","elementType":"all","stylers":[{"visibility":"on"}]},
              {"featureType":"poi.place_of_worship","elementType":"all","stylers":[{"visibility":"on"}]},
              {"featureType":"poi.school","elementType":"all","stylers":[{"visibility":"on"}]},
              {"featureType":"poi.sports_complex","elementType":"all","stylers":[{"visibility":"on"}]},
              {"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},
              {"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},
              {"featureType":"road.highway.controlled_access","elementType":"all","stylers":[{"visibility":"on"}]},
              {"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
              {"featureType":"road.local","elementType":"all","stylers":[{"visibility":"on"}]},
              {"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},
              {"featureType":"transit.line","elementType":"all","stylers":[{"visibility":"on"}]},
              {"featureType":"transit.station","elementType":"all","stylers":[{"visibility":"on"}]},
              {"featureType":"water","elementType":"all","stylers":[{"color":"#b4d4e1"},{"visibility":"on"}]}
              ];

  // Create a new StyledMapType object, passing it the array of styles,
  // as well as the name to be displayed on the map type control.
  var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});

  // Create a map object, and include the MapTypeId to add
  // to the map type control.
  var mapOptions = {
    zoom: 16,
    center: new google.maps.LatLng(49.84905942, 24.02411163),
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.HYBRID, 'map_style']
    }
  };
  var map = new google.maps.Map(document.getElementById('map'),
    mapOptions);

var main_office = 'img/office.png';
  var marker = new google.maps.Marker({
    position: {lat:49.84905942, lng:24.02411163},
    map: map,

    icon: main_office
  });

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading"><span class="logo">OSCAR</span>development</h1>'+
        '<div id="bodyContent">'+
          '<p><b>Адреса головного офісу:'+ '<br>' +
          '</b> Україна, <b>м.Львів</b>,' + '<br>' +
          ' 79058, вул. Цехова 1/4'+ '<br>' +
          'Номери телефонів: '+ '<br>' +
          '                  +38(073) 770-3377'+ '<br>' +
          '                  +38(097) 524-6076'+ '<br>' +
          '                  +38(095) 595-1107'+ '<br>' +
          '                  +38(093) 879-4902'+ '<br>' +
          '                  +38(095) 709-5379'+ '<br>' +
          '</p>'+
          '<p>Електронна адреса для співпраці: '+ '<br>' +'<a href="#">'+
          'https://oscardevelopment2015@gmail.com</a> '+
          '.</p>'+
        '</div>'+
        '<img class="left-img" src="img/office_pic.png">' + 
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

    marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');
}

initialize();