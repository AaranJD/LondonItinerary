var activityLocations = [
  // ['Portobello Market', 51.5223,-0.2069, 'market', 2],
  ['Holland Park', 51.504,-0.205, 'park', 2],
  ['Science Museum', 51.4980706,-0.1788774, 'museum', 2],
  ['Kensington Gardens', 51.506,-0.18, 'park', 2],
  ['Hyde Park', 51.505,-0.165, 'park', 2],
  ['Natural History Museum', 51.496715,-0.1785559, 'museum', 2],
  ['Harrods', 51.499,-0.1628535, 'architecture', 2],
  ['V&A Museum', 51.4966392,-0.1743687, 'museum', 2],
  ['Camden Market', 51.5408679,-0.1463053, 'market', 1],
  ['Regents Park', 51.5312705,-0.1591581, 'park', 1],
  ['Wallace Collection', 51.5172722,-0.155, 'art', 1],
  ['British Museum', 51.5187318,-0.1259695, 'museum', 1],
  ['Wellcome Collection', 51.5259044,-0.1335, 'art', 1],
  ['The British Library', 51.5299996,-0.1285, 'library', 1],
  ['Covent Garden', 51.5121138,-0.123, 'market', 3],
  ['St Jamess Park', 51.501,-0.135, 'park', 3],
  ['Westminster Abbey', 51.499382,-0.1275, 'church', 3],
  ['Houses of Parliament', 51.4994795,-0.125, 'architecture', 3],
  ['Tate Britain', 51.4910621,-0.1287, 'art', 3],
  ['Westminster Cathedral', 51.4958094,-0.14, 'church', 3],
  ['Buckingham Palace', 51.5007075,-0.1431824, 'architecture', 3],
  ['Royal Academy of Arts', 51.5094426,-0.1395, 'art', 3],
  ['National Gallery', 51.508929,-0.128, 'art', 3],
  ['Borough Market', 51.5053,-0.092, 'market', 4],
  ['Tate Modern', 51.5077,-0.099, 'art', 4],
  ['St Pauls Cathedral', 51.5138453,-0.0985, 'church', 4],
  ['Sky Gardens', 51.511322,-0.0832, 'architecture', 4],
  ['St Dunsten in the East', 51.5096594,-0.0830888, 'church', 4],
  ['Leadenhall Market', 51.512766,-0.0833, 'market', 4],
  ['Barbican Conservatory', 51.520003,-0.0937093, 'park', 4]
]

// var foodLocations = [
//   ['Wok Boy', 'lat', 'long', 'Camden Market', 'description', 'website', 'menu'],
//   ['Oli Babas', 'lat', 'long', 'Camden Market', 'description', 'website', 'menu'],
//   ['StakeHaus', 'lat', 'long', 'Camden Market', 'description', 'website', 'menu'],
//   ['Traditional fish and chips', 'lat', 'long', 'Camden Market', 'description', 'website', 'menu'],
//   ['Mac Factory', 'lat', 'long', 'Camden Market', 'description', 'website', 'menu'],
//   ['The Cheese Wheel', 'lat', 'long', 'Camden Market', 'description', 'website', 'menu'],
//   ['Indian Alley', 'lat', 'long', 'Camden Market', 'description', 'website', 'menu'],
//   ['Yorkshire Burrito', 'lat', 'long', 'Camden Market', 'description', 'website', 'menu'],
//   ['Camden Coffee', 'lat', 'long', 'Camden Market', 'description', 'website', 'menu'],
//   ['Brindisa', 'lat', 'long', 'Borough Market', 'description', 'website', 'menu'],
//   ['El Pastor', 'lat', 'long', 'Borough Market', 'description', 'website', 'menu'],
//   ['Padella', 'lat', 'long', 'Borough Market', 'description', 'website', 'menu'],
//   ['Kappcasein', 'lat', 'long', 'Borough Market', 'description', 'website', 'menu'],
//   ['Bread Ahead', 'lat', 'long', 'Borough Market', 'description', 'website', 'menu'],
//   ['The Ginger Pig', 'lat', 'long', 'Borough Market', 'description', 'website', 'menu'],
//   ['Hobbs Meat Roast', 'lat', 'long', 'Borough Market', 'description', 'website', 'menu']
// ];

var photoLocations = [
  ['Millennium Bridge', 51.5095286,-0.1007097, 'photo', 'Thames Embankment'],
  ['K2 Telephone Boxes', 51.5125071,-0.125681, 'photo', 'Covent Garden'],
  ['Big Ben', 51.5007286,-0.1267926, 'photo', 'Westminster'],
  ['Notting Hill Colourful Houses', 51.5200409,-0.2106757, 'photo', 'Nottinghill'],
  ['Neals Yard', 51.5144724,-0.1285418, 'photo', 'Covent Garden'],
  ['Tower Bridge', 51.5054559,-0.0775237, 'photo', 'Camden Market'],
  ['Cable Car', 51.5077134,0.0169177, 'photo', 'Camden Market'],
  ['The Churchill Arms', 51.5069112,-0.1958739, 'photo', 'Kengsington'],
  ['Platform 9 3/4', 51.5322391,-0.1251, 'photo', 'Camden Market'],
  ['Abbey Road', 51.5370921,-0.1855463, 'photo', 'Borough Market'],
  ['Leake Street Graffiti Tunnel', 51.5014539,-0.1159545, 'photo', 'Waterloo'],
  ['Piccadilly Circus', 51.5099975,-0.1360747, 'photo', 'Borough Market'],
  ['Changing of the Guard', 51.5011674,-0.1443206, 'photo', 'Buckingham Palace'],
  ['London Eye', 51.5032968,-0.1206266, 'photo', 'Waterloo'],
  ['Trafalgar Square', 51.5080899,-0.1291272, 'photo', 'Borough Market']
]

var mewsLocations = [
  ['Bathurst Mews', 51.5136969,-0.1745801, 'mews', 'Thames Embankment'],
  ['Drayson Mews', 51.5021422,-0.1940841, 'mews', 'Covent Garden'],
  ['Ennismore Mews', 51.4996567,-0.1696104, 'mews', 'Westminster'],
  ['Ennismore Garden', 51.4991199,-0.1720693, 'mews', 'Nottinghill'],
  ['Sussex Mews West', 51.5127978,-0.1749623, 'mews', 'Covent Garden'],
  ['Osten Mews', 51.4962366,-0.1896077, 'mews', 'Camden Market'],
  ['Conduit Mews', 51.5146201,-0.1770291, 'mews', 'Camden Market'],
  ['Ensor Mews', 51.4900724,-0.1788065, 'mews', 'Kengsington'],
  ['Atherstone Mews', 51.4955752,-0.1822346, 'mews', 'Camden Market'],
  ['Kynance Mews', 51.4973848,-0.1852674, 'mews', 'Borough Market'],
  ['Holland Park Mews', 51.5058083,-0.2066657, 'mews', 'Holland Park'],
  ['Spear Mews', 51.4927201,-0.1950326, 'mews', 'Borough Market'],
  ['Hyde Park Garden Mews', 51.5131966,-0.1715597, 'mews', 'Buckingham Palace'],
  ['Adam and Eve Mews', 51.4993742,-0.1949488, 'mews', 'Waterloo'],
  ['Creswell Place', 51.4892977,-0.1830561, 'mews', 'Borough Market'],
  ['Kendrick Mews', 51.4934827,-0.1773176, 'mews', 'Camden Market'],
  ['St Lukes Mews', 51.5177784,-0.2039214, 'mews', 'Nottinghill'],
  ['Reece Mews', 51.4934771,-0.1777129, 'mews', 'Camden Market'],
  ['Stanhope Mews', 51.4944495,-0.1825356, 'mews', 'Borough Market'],
  ['Redcliffe Mews', 51.4869503,-0.187344, 'mews', 'Waterloo'],
  ['Queens Gate Mews', 51.4990919,-0.1826777, 'mews', 'Borough Market'],
  ['Cornwall Mews', 51.4962564,-0.1853001, 'mews', 'Buckingham Palace'],
  ['South Warren Mews', 51.5233518,-0.1422704, 'mews', 'Waterloo'],
  ['Colville Mews', 51.5153907,-0.2008792, 'mews', 'Nottinghill'] 
]

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

// Get the container element
var tabContainer = document.getElementById("tabsRow");
// Get all buttons with class="btn" inside the container
var tabs = tabContainer.getElementsByClassName("tab");
// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function() {
    var c = document.getElementsByClassName("on");
    c[0].className = c[0].className.replace(" on", "");
    this.className += " on";
  });
}

//LIST OF ACTIVITIES
var activitiesContainer = document.getElementById("activitiesContainer");
var numberofdays = 4;

for (var i = 1; i < numberofdays + 1; i++) {
  var dayContainer = document.createElement('div');
  var dayHeader = document.createElement('h6');
  dayHeader.innerHTML = ("Day " + i);
  dayContainer.setAttribute("class", ("Day " + i));
  dayContainer.setAttribute("id", i);
  dayContainer.appendChild(dayHeader);
  activitiesContainer.appendChild(dayContainer);
}

for (var i = 0; i < activityLocations.length; i++) {
  var spanObj = document.createElement('span');
  spanObj.innerHTML = activityLocations[i][0];
 
  var dayNumber = activityLocations[i][4];
  var dayCon = document.getElementById(dayNumber);
  dayCon.appendChild(spanObj);
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
  
  hideMarkers();
  var x, y;

  if (Day == "*") {
    x = 0;
    y = activityLocations.length;
  } else if (Day == "1") {
    x = 8;
    y = 14;
  } else if (Day == "2") {
    x = 0;
    y = 8;
  } else if (Day == "3") {
    x = 14;
    y = 23;
  } else if (Day == "4") {
    x = 23;
    y = activityLocations.length;
  }
  addMarkers(activityLocations, x, y);
};

//Filter the list by tab options
function tabFilter(e) {
  var items = document.getElementsByClassName('Tab'), i;
  hideMarkers();

  for (i = 0; i < items.length; i += 1) {
    if (items[i].className != ("Tab " + e)) {
      items[i].style.display = 'none';
    } else {
      items[i].style.display = 'grid';
    }
  } 

  if (e == "Activities")  { addMarkers(activityLocations, 0, activityLocations.length); }
  else if (e == "Photos") { addMarkers(photoLocations, 0, photoLocations.length); }
  else if (e == "Mews")   { addMarkers(mewsLocations, 0, mewsLocations.length); }
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
function filterButtons() {
  var element = document.btnContainer;
  element.classList.toggle(" active");
}

let map;
const london = { lat: 51.517, lng: -0.148 };
let markers = [];

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
    map.setZoom(12.9);
  });
}

// Initialize and add the map
function initMap() {  
    // The map, centered at london
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12.9,
      center: london,
    });
    //Airbnb Marker
    var icon = {
      url: "Images/house-fill-dark.svg", // url
      scaledSize: new google.maps.Size(24, 24), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };

    new google.maps.Marker({
      position: new google.maps.LatLng(51.538136, -0.121),
      map,
      title: "Airbnb",
      icon: icon
    });
    //Kings Cross Station Marker - from https://fontawesome.com/v5.15/icons/subway?style=solid
    var stationIcon = {
      url: "Images/subway-solid.svg", // url
      scaledSize: new google.maps.Size(24, 24), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };

    new google.maps.Marker({
      position: new google.maps.LatLng(51.5320166,-0.1235673),
      map,
      title: "King's Cross Station",
      icon: stationIcon
    });
    // Create the DIV to hold the control and call the CenterControl()
    // constructor passing in this DIV.
    const centerControlDiv = document.createElement("div");
    CenterControl(centerControlDiv, map);
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);

    // Maps legend
    const icons = {
      museum: {
        name: "Museum",
        icon: "Images/museumIcon3.svg",
      },
      gallery: {
        name: "Art Gallery",
        icon: "Images/artgallery.svg",
      },
      park: {
        name: "Park",
        icon: "Images/parkIcon.svg",
      },
      market: {
        name: "Market",
        icon: "Images/marketIcon.svg",
      },
      architecture: {
        name: "Architecture",
        icon: "Images/architectureIcon.svg",
      },
      church: {
        name: "Church",
        icon: "Images/churchIcon.svg",
      },
      library: {
        name: "Library",
        icon: "Images/libraryIcon.svg",
      },
    };

    const legend = document.getElementById("legend");

    for (const key in icons) {
      const type = icons[key];
      const name = type.name;
      const icon = type.icon;
      const div = document.createElement("div");
      div.innerHTML = '<img src="' + icon + '"> ' + name;
      legend.appendChild(div);
    }
    map.controls[google.maps.ControlPosition.LEFT].push
      (document.getElementById('legend'));

    addMarkers(activityLocations, 0, activityLocations.length);
}

function addMarkers(locations, x, y) {
  var i;
  let url;
  
  for ( i = x; i < y; i++) {
    if      (locations[i][3] == 'museum')       { url = "Images/museumIcon3.svg" } 
    else if (locations[i][3] == 'art')          { url = "Images/artgallery.svg" } 
    else if (locations[i][3] == 'park')         { url = "Images/parkIcon.svg" } 
    else if (locations[i][3] == 'market')       { url = "Images/marketIcon.svg" } 
    else if (locations[i][3] == 'library')      { url = "Images/libraryIcon.svg" } 
    else if (locations[i][3] == 'church')       { url = "Images/churchIcon.svg" } 
    else if (locations[i][3] == 'architecture') { url = "Images/architectureIcon.svg" } 
    else if (locations[i][3] == 'photo')        { url = "Images/photoIcon.svg"}
    else if (locations[i][3] == 'mews')         { url = "Images/mewsIcon.svg"}

    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map,
      icon: {
        url: url,
        scaledSize: new google.maps.Size(30, 30), // scaled size
      }
    }); 

    marker['infowindow'] = new google.maps.InfoWindow({
      content: "<p>" + locations[i][0] + "<br />" + 
                       locations[i][3] + "</p>"
    });

    google.maps.event.addListener(marker, 'mouseover', function() {
      this['infowindow'].open(map, this);
    });

    google.maps.event.addListener(marker, 'mouseout', function() {
      this['infowindow'].close(map, this);
    });
    // google.maps.event.addListener(marker, 'click', (function(marker, i) {
    //   return function() {
    //     infowindow.setContent(
    //       "<p>" + locations[i][0] + "<br />" + 
    //               locations[i][3] + "</p>"
    //     );
    //     infowindow.open(map, marker);
    //   }
    // })(marker, i));

    markers.push(marker);
  }
}

// Sets the map on all markers in the array.
function setMapOnAll(map) {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
function hideMarkers() {
  setMapOnAll(null);
}

// Shows any markers currently in the array.
function showMarkers() {
  setMapOnAll(map);
}
