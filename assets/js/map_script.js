function initMap() {

    var center = new google.maps.LatLng(14.258478, 121.895005);
    var lucban = new google.maps.LatLng(14.1133, 121.5569);
    var lucena = new google.maps.LatLng(13.93, 121.62);


    var boundary = {
      north: 19.74,
      south: 5.07,
      west: 116.08,
      east: 127.59,
    };

    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 9,
      center: center,
      restriction: {
        latLngBounds: boundary,
        strictBounds: false,
      },
    });
    map.setOptions({ minZoom: 5.8, maxZoom: 20 });

    var marker = {
      url: './assets/image/marker.png',
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(25, 45),
      scaledSize: new google.maps.Size(31, 45)
    };


// ----------- Lucban ----------- //
    var marker_lucban = new google.maps.Marker({
      position: lucban,
      map: map,
      icon: marker,
    });

    const infoWindowLucban = {
      content:  '<div class="info_content"><center><img src="assets/image/LoremLogo.png" height=90px><br><hr><br><h5>Lucban, Quezon</h5> Coordinates: ' + lucban,
      position: lucban
    }

    const infoLucban = new google.maps.InfoWindow(infoWindowLucban)

    marker_lucban.addListener('mouseover', function() {
    infoLucban.open(map, this);
    }); 
    marker_lucban.addListener('click', function() {
    $('.form-lucban').show();
    });

    marker_lucban.addListener('mouseout', function() {
    infoLucban.close(map, this);
    });


// ----------- Lucena ----------- //
    var marker_lucena = new google.maps.Marker({
      position: lucena,
      map: map,
      icon: marker,
    });

    const infoWindowLucena = {
      content:  '<div class="info_content"><center><img src="assets/image/LoremLogo.png" height=90px><br><hr><br><h5>Lucena City, Quezon</h5> Coordinates: ' + lucena,
      position: lucena
    }

    const infoLucena = new google.maps.InfoWindow(infoWindowLucena)

    marker_lucena.addListener('mouseover', function() {
    infoLucena.open(map, this);
    });

    marker_lucena.addListener('click', function() {
    $('.form-lucena').show();
    });

    marker_lucena.addListener('mouseout', function() {
    infoLucena.close(map, this);
    });




// ----------- Form Close Button ----------- //

    $('.close-form').click(function() {
      $('.form-popup').hide();
  });
}