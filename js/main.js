// I think these functions get run without needing to be called
(function ()
{
    var config = 
    {
        apiKey: "AIzaSyDDb3e3QAHUkqV8cWQgDhjgDHRpijcm9FY",
        authDomain: "seniorproject-1c271.firebaseapp.com",
        databaseURL: "https://seniorproject-1c271.firebaseio.com",
        projectId: "seniorproject-1c271",
        storageBucket: "seniorproject-1c271.appspot.com",
        messagingSenderId: "232076277189"
    };
    firebase.initializeApp(config);

    const preObject = document.getElementById('object');

    // reference to the database
    var db = firebase.database().ref().child('object');
    
    // key = 'object'
    // value = 'lala'

    // db.on('value', snapshot => console.log(snapshot.val()));   
    db.on('value', snap => 
    {
        preObject.innerText = JSON.stringify(snap.val(), null, 1);
    });

}());


var map, map2;
function initMap() 
{
    var myOptions = 
    {
        zoom: 17.5,
        center: {lat: 37.336294, lng: -121.881068},
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [
        {
            featureType: 'poi.business',
            elementType: 'labels.icon',
            stylers: [{visibility: 'off'}]
        },
        {
            featureType: 'transit',
            elementType: 'labels.icon',
            stylers: [{visibility: 'off'}]
        }
        ]    
    }
    map = new google.maps.Map(document.getElementById('map_canvas3'), myOptions);

    // map2 = new google.maps.Map(document.getElementById('mapColumn'), myOptions);

    // map3 = new google.maps.Map(document.getElementById('map_canvas3'), myOptions);

    // marker playaround
    var marker = new google.maps.Marker({
        position: {lat: 37.336294, lng: -121.881068},
        title: 'Hello World!'
      });

    

      // adding the marker to the map
      marker.setMap(map);

      // marker2.setPosition({lat: 37.336294, lng: -121.881068});
      
} 

var floorInputVal = 0;
var newMaps = [5];
var newDivs = [5];
var beenPressed = 0;
function numFloors()
{
    // if I already entered the floors, don't make more maps
    if (beenPressed > 0) 
    {
        return;
    }

    beenPressed = 1;
    console.log(floorInputVal);
    floorInputVal = document.getElementById('numFloorsInput').value;
    
    // options for my map
    var myOptions = 
    {
        zoom: 17.5,
        center: {lat: 37.336294, lng: -121.881068},
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    
    console.log(floorInputVal);
    for (var i = 0; i < floorInputVal; i = i + 1)
    {

        console.log(i);
        newDivs[i] = document.createElement('div');

        // ids that don't really exist
        newDivs[i].id = 'blank' + i;

        // setAttribute not working
        // newDivs[i].setAttribute("style", "height: 300px, width: 90%, margin: 1em auto"); 

        // setting the attributes of my new 'blank' ids
        newDivs[i].style.backgroundColor = 'gray';
        newDivs[i].style.height = '300px';
        newDivs[i].style.width = '90%';
        newDivs[i].style.margin = '1em auto';
        
        // newDivs[i].id = 'newMapCanvas' + i;
        console.log(newDivs[i].id);
        // add new div
        document.body.appendChild(newDivs[i]);

        // create a map for each floor
        newMaps[i] = new google.maps.Map(document.getElementById(newDivs[i].id), myOptions);

    }
}

function thot()
{
    var topDiv = document.createElement('div');
    topDiv.className = 'titleRow';

    var header1 = document.createElement('h2');
    header1.className = 'titleColumn';

    // testing adding text to an element
    var num = 15;
    var n = num.toString();
    var t = document.createTextNode(' ' + n);
    document.getElementById('fn').appendChild(t);

    // converting int to string
    // var num = 15;
    // var n = num.toString();

}

window.onload = thot;

// testing the time
// setInterval(function(){ alert("Hello"); }, 3000);

// marker playaround

/*  Status Layout

Name    |   Status  |   Floor

Bob     |   Green   |   2

*/

// enter the squad and write to the db
function squadron()
{

    // get the name that was entered
    var sqInputVal = document.getElementById('squadInput').value;

    // make a section called squad
    var squadRef = firebase.database().ref("squad/" + sqInputVal);

    

    squadRef.set({
        
        status: "Good",
        floor: 1,
        marker: "blue",
        lat: 22.2,
        long: 22.2
        
    });

}


 



