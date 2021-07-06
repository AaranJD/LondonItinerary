var Day = "*";
// Get the container element
var btnContainer = document.getElementById("buttonRow");
// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("btn");
// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
//Filter the list by days
function filterDay(e) {
  let filter = e.target.dataset.filter; // grab the value in the event target's data-filter attribute
  var day = document.getElementsByClassName('Day'), i;
  Day = filter;

  for (i = 0; i < day.length; i += 1) {
    if (day[i].className != ("Day " + filter)) {
      day[i].style.display = 'none';
    } else {
      day[i].style.display = 'grid';
    }
    if (filter == "*") {
      for (i = 0; i < day.length; i += 1) {
        day[i].style.display = '';
      }
    }
  } 
  initMap();
};
//Filter the list by types
function filterTypes(e) {
  let filter = e.target.dataset.filter; // grab the value in the event target's data-filter attribute
  var type = document.getElementsByClassName('event'), i;

  for (i = 0; i < type.length; i += 1) {
    if (type[i].className != ("event " + filter)) {
      type[i].style.display = 'none';
    }  else {
      type[i].style.display = '';
    }
  } 

  if (filter == "*") {
    for (i = 0; i < type.length; i += 1) {
      type[i].style.display = '';
    }
  }
};

//DARK MODE
function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

//FILTER BUTTONS
//DARK MODE
function filterButtons() {
  var element = document.btnContainer;
  element.classList.toggle(" active");
}

let map;
const london = { lat: 51.517, lng: -0.148 };

function CenterControl(controlDiv, map) {
  // Set CSS for the control border.
  const controlUI = document.createElement("div");
  controlUI.style.backgroundColor = "#fff";
  controlUI.style.border = "2px solid #fff";
  controlUI.style.borderRadius = "3px";
  controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
  controlUI.style.cursor = "pointer";
  controlUI.style.marginTop = "8px";
  controlUI.style.marginBottom = "22px";
  controlUI.style.textAlign = "center";
  controlUI.title = "Click to recenter the map";
  controlDiv.appendChild(controlUI);
  // Set CSS for the control interior.
  const controlText = document.createElement("div");
  controlText.style.color = "rgb(25,25,25)";
  controlText.style.fontFamily = "Roboto,Arial,sans-serif";
  controlText.style.fontSize = "16px";
  controlText.style.lineHeight = "38px";
  controlText.style.paddingLeft = "5px";
  controlText.style.paddingRight = "5px";
  controlText.innerHTML = "Center Map";
  controlUI.appendChild(controlText);
  // Setup the click event listeners: simply set the map to London.
  controlUI.addEventListener("click", () => {
    map.setCenter(london);
    map.setZoom(13);
  });
}

// Initialize and add the map
function initMap() {
    //Map Locations
    var locations = [
      ['Portobello Market', 51.5223,-0.2069, 'market', 1],
      ['Holland Park', 51.504,-0.205, 'park', 2],
      ['Science Museum', 51.4980706,-0.1788774, 'museum', 3],
      ['Kensington Gardens', 51.506,-0.18, 'park', 4],
      ['Hyde Park', 51.505,-0.165, 'park', 5],
      ['Natural History Museum', 51.496715,-0.1785559, 'museum', 6],
      ['Harrods', 51.499,-0.1628535, 'architecture', 7],
      ['V&A Museum', 51.4966392,-0.1743687, 'museum', 8],
      ['Camden Market', 51.5408679,-0.1463053, 'market', 9],
      ['Regents Park', 51.5312705,-0.1591581, 'park', 10],
      ['Wallace Collection', 51.5172722,-0.155, 'art', 11],
      ['British Museum', 51.5187318,-0.1259695, 'museum', 12],
      ['Wellcome Collection', 51.5259044,-0.1335, 'art', 13],
      ['The British Library', 51.5299996,-0.1285, 'library', 14],
      ['Covent Garden', 51.5121138,-0.123, 'market', 15],
      ['St Jamess Park', 51.501,-0.135, 'park', 16],
      ['Westminster Abbey', 51.499382,-0.1275, 'church', 17],
      ['Houses of Parliament', 51.4994795,-0.125, 'architecture', 18],
      ['Tate Britain', 51.4910621,-0.1287, 'art', 19],
      ['Westminster Cathedral', 51.4958094,-0.14, 'church', 20],
      ['Buckingham Palace', 51.5007075,-0.1431824, 'architecture', 21],
      ['Royal Academy of Arts', 51.5094426,-0.1395, 'art', 22],
      ['National Gallery', 51.508929,-0.128, 'art', 23],
      ['Borough Market', 51.5053,-0.092, 'market', 24],
      ['Tate Modern', 51.5077,-0.099, 'art', 25],
      ['St Pauls Cathedral', 51.5138453,-0.0985, 'church', 26],
      ['Sky Gardens', 51.511322,-0.0832, 'architecture', 27],
      ['St Dunsten in the East', 51.5096594,-0.0830888, 'church', 28],
      ['Leadenhall Market', 51.512766,-0.0833, 'market', 29],
      ['Barbican Conservatory', 51.520003,-0.0937093, 'park', 30]
    ]
    // The map, centered at london
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: london,
    });
    // Create the DIV to hold the control and call the CenterControl()
    // constructor passing in this DIV.
    const centerControlDiv = document.createElement("div");
    CenterControl(centerControlDiv, map);
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);

    // Map Markers
    var infowindow = new google.maps.InfoWindow();
    var marker, i, x, y;
    if (Day == "*") {
      x = 0;
      y = locations.length;
    } else if (Day == "One") {
      x = 0;
      y = 8;
    } else if (Day == "Two") {
      x = 8;
      y = 14;
    } else if (Day == "Three") {
      x = 14;
      y = 23;
    } else if (Day == "Four") {
      x = 23;
      y = locations.length;
    }
    for (i = x; i < y; i++) { 
      let url;
      if      (locations[i][3] == 'museum')       { url = "http://maps.google.com/mapfiles/ms/icons/red-dot.png" } 
      else if (locations[i][3] == 'art')          { url = "http://maps.google.com/mapfiles/ms/icons/purple-dot.png" } 
      else if (locations[i][3] == 'park')         { url = "http://maps.google.com/mapfiles/ms/icons/green-dot.png" } 
      else if (locations[i][3] == 'market')       { url = "http://maps.google.com/mapfiles/ms/icons/orange-dot.png" } 
      else if (locations[i][3] == 'library')      { url = "http://maps.google.com/mapfiles/ms/icons/ltblue-dot.png" } 
      else if (locations[i][3] == 'church')       { url = "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png" } 
      else if (locations[i][3] == 'architecture') { url = "http://maps.google.com/mapfiles/ms/icons/pink-dot.png" } 

      
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        icon: {
          url: url
        }
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(
            "<p>" + locations[i][0] + "<br />" + 
                    locations[i][3] + "</p>"
          );
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
}
