var CLIENT_ID = 'X0HZ3VKUHS1YJH1CLP1RIUNWICGLFR0KBPSCHOMCQ2F3CQCW';
var CLIENT_SECRET = 'V5KJKQZQCD120KRS4ALIGXVQKEMUF12BTNB1CBJWCPZOJIGV';

function callFoursquare(){
    // Create a request variable and assign a new XMLHttpRequest object to it.
  var request = new XMLHttpRequest();

  // Open a new connection, using the GET request on the URL endpoint
  request.open('GET','https://api.foursquare.com/v2/venues/explore?client_id='+CLIENT_ID+'&client_secret='+CLIENT_SECRET+'&v=20180323&limit=1&ll=40.7243,-74.0018&query=coffee', true);

  request.onload = function () {
    var data = JSON.parse(this.response);
    console.log(data)
    // Begin accessing JSON data here
    }

  // Send request
  request.send();
}
