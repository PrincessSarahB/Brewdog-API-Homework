const app = function(){
  const url = "https://api.punkapi.com/v2/beers";
  makeRequest(url, requestComplete);
}

const makeRequest = function(url, callback){
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener("load", callback);
  request.send();

}

const requestComplete = function(){
  if(this.status !== 200) return;
  const beers = JSON.parse(this.response);
}




 window.addEventListener('load', app);
