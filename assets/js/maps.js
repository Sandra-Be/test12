// GoogleAPI current location code idea taken and modified from https://github.com/shanegibney/googleAPIcurrentLocation/blob/master/index.html


function detectBrowser() {
    var useragent = navigator.userAgent;
    var mapdiv = document.getElementById("map");

    if (useragent.indexOf('iPhone') != -1 || useragent.indexOf('Android') != -1) {
        mapdiv.style.width = '100%';
        mapdiv.style.height = '100%';
    } else {
        mapdiv.style.width = '600px';
        mapdiv.style.height = '500px';
    }
}

var myLatLng;
var latit;
var longit;

function geoSuccess(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    myLatLng = {lat: latitude, lng: longitude};

    var mapProp = {
        zoom: 6,
        center: new google.maps.LatLng(latitude, longitude),
    };

    var map = new google.maps.Map(document.getElementById("myMap"), mapProp);

    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;

// call renderer to display directions
    directionsDisplay.setMap(map);

    var bounds = new google.maps.LatLngBounds();

// multiple Markers
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Your current location',
    });

    var markers = [
        ['EirCode T12 TF99', 51.897218, -8.471106],
        ['EirCode V94 EYW5', 52.623420, -8.811364],
        ['EirCode V94 VYC6', 52.600482, -8.973391],
        ['EirCode V42 WD90', 52.361055, -9.059641],
        ['EirCode V94 C677', 52.455653, -8.927184],
        ['EirCode V94 F5N7', 52.534187, -8.872767],
        ['EirCode D11 Y564', 53.389876, -6.298426],
        ['EirCode Y21 C6F7', 52.589955, -6.494968],
        ['EirCode Y21 T9K5', 52.592775, -6.511480],
        ['EirCode Y21 F228', 52.622803, -6.479734],
        ['EirCode A83 N722', 53.451105, -6.844550],
        ['EirCode A83 RH22', 53.414187, -6.832294],
        ['EirCode A83 CA47', 53.441189, -6.806201],
        ['EirCode H91 R94H', 53.397711, -8.993340],
        ['EirCode F45 D891', 53.692630, -8.462686],
        ['EirCode F42 X674', 53.592625, -8.359702],
        ['EirCode A75 P822', 54.120143, -6.738622],
        ['EirCode F92 TF6A', 55.036603, -7.650968],
        ['EirCode F42 RY88', 53.629113, -8.186554],
        ['EirCode F42 X275', 53.626187, -8.191890],
        ['EirCode F42 KV90', 53.639005, -8.174777],
        ['EirCode F42 NY75', 53.661113, -8.153165],
        ['EirCode F42 VF61', 53.662599, -8.198591],
        ['EirCode F42 FK83', 53.641441, -8.211282],
        ['EirCode F42 XY31', 53.573478, -8.267861],
        ['EirCode F42 AE18', 53.569700, -8.251145],
        ['My current location', latitude, longitude]
    ];

// InfoWindow content
    var infoWindowContent = [
        [
            '<div class="info_content">' + '<h5>EirCode T12 TF99</h5>' + '<p>33 Oliver Plunkett Street, Centre, Cork</p>' + '</div>'
        ],
        [
            '<div class="info_content">' + '<h5>EirCode V94 EYW5</h5>' + '<p>Ballyvareen, Kildimo, County Limerick</p>' + '</div>'
        ],
        [
            '<div class="info_content">' + '<h5>EirCode V94 VYC6</h5>' + '<p>East Square, Askeaton, County Limerick</p>' + '</div>'
        ],
        [
            '<div class="info_content">' + '<h5>EirCode V42 WD90</h5>' + '<p>Gortnaclohy, Ashford, Ballagh, County Limerick</p>' + '</div>'
        ],
        [
            '<div class="info_content">' + '<h5>EirCode V94 C677</h5>' + '<p>Cloncagh, Ballingarry, County Limerick</p>' + '</div>'
        ],
        [
            '<div class="info_content">' + '<h5>EirCode V94 F5N7</h5>' + '<p>Smithfield, Croagh, County Limerick</p>' + '</div>'
        ],
        [
            '<div class="info_content">' + '<h5>EirCode D11 Y564</h5>' + '<p>Grofton Hall, Jamestown Road, Dublin 11</p>' + '</div>'
        ],
        [
            '<div class="info_content">' + '<h5>EirCode Y21 C6F7</h5>' + '<p>Applegreen, Ferns Lower, County Wexford</p>' + '</div>'
        ],
        [
            '<div class="info_content">' + '<h5>EirCode Y21 T9K5</h5>' + '<p>Near GAA club, Ferns Upper, County Wexford</p>' + '</div>'
        ],
        [
            '<div class="info_content">' + '<h5>EirCode Y21 F228</h5>' + '<p>Clonee Lower, County Wexford</p>' + '</div>'
        ],
        [
            '<div class="info_content">' + '<h5>EirCode A83 N722</h5>' + '<p>Rathcore, County Meath</p>' + '</div>'
        ],
        [
            '<div class="info_content">' + '<h5>EirCode A83 RH22</h5>' + '<p>Enfield Credit Union, Main street, Enfield, County Meath</p>' + '</div>'
        ],
        [
            '<div class="info_content">' + '<h5>EirCode A83 CA47</h5>' + '<p>Ballynaskea, Enfield, County Meath</p>' + '</div>'
        ],
        [
            '<div class="info_content">' + '<h5>EirCode H91 R94H</h5>' + '<p>Corrandulla Community Hall, Ballybeg, County Galway</p>' + '</div>'
        ],
        [
            '<div class="info_content">' + '<h5>EirCode F45 D891</h5>' + '<p>Fr. Flanagan Centre, Ballymoe, Castlerea, County Galway</p>' + '</div>'
        ],
        [
            '<div class="info_content">' + '<h5>EirCode F42 X674</h5>' + '<p>Near Creggs Central National School, Creggs, County Galway</p>' + '</div>'
        ],
        [
            '<div class="info_content">' + '<h5>EirCode A75 P822</h5>' + '<p>Main Street, Castleblayney, County Monaghan</p>' + '</div>'
        ],
        [
            '<div class="info_content">' + '<h5>EirCode F92 TF6A</h5>' + '<p>Whoriskey Eurospar, The Mall, Ballyboe, Ramelton, County Donegal</p>' + '</div>'
        ],
        [
            '<div class="info_content">' + '<h5>EirCode F42 RY88</h5>' + '<p>Circle K, Circular road, Roscommon</p>' + '</div>'
        ],
        [
            '<div class="info_content">' + '<h5>EirCode F42 X275</h5>' + '<p>St.Comans Wood, Circular road, Roscommon</p>' + '</div>'
        ],
        [
            '<div class="info_content">' + '<h5>EirCode F42 KV90</h5>' + '<p>Near Cloonybeirne, The Walk, Roscommon</p>' + '</div>'
        ],
        [
            '<div class="info_content">' + '<h5>EirCode F42 NY75</h5>' + '<p>Roxboro National School, Roxborough, Roscommon</p>' + '</div>'
        ],
        [
            '<div class="info_content">' + '<h5>EirCode F42 VF61</h5>' + '<p>Near Clarke Machinery Roscommon, N61 Mullymucks, Roscommon</p>' + '</div>'
        ],
        [
            '<div class="info_content">' + '<h5>EirCode F42 FK83</h5>' + '<p>Circle K, Racecourse Road, Roscommon</p>' + '</div>'
        ],
        [
            '<div class="info_content">' + '<h5>EirCode F42 XY31</h5>' + '<p>Near Athleague GAA club, Cloonykelly, Athleague, County Roscommon</p>' + '</div>'
        ],
        [
            '<div class="info_content">' + '<h5>EirCode F42 AE18</h5>' + '<p>Near Texaco N63, Athleague, County Roscommon</p>' + '</div>'
        ]
    ];

// display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(),
        marker, i;
    
// loop through our array of markers & place each one on the map
    for (i = 0; i < markers.length; i++) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });

// allow each marker to have an info window
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function () {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);

                latit = marker.getPosition().lat();
                longit = marker.getPosition().lng();
            }
        })(marker, i));

        marker.addListener('click', function() {
            directionsService.route({
                origin: myLatLng,

                destination: {lat: latit, lng: longit},
                travelMode: 'DRIVING'
            }, function(response, status) {
                if (status === 'OK') {
                    directionsDisplay.setDirections(response);
                } else {
                    window.alert('Directions request failed due to ' + status);
                }
            });
        });

// automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
    }
}

function geoError() {
    alert("Geocoder failed!");
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
    } else {
        alert("Geolocation is not supported by this browser");
    }
}
