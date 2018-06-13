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
  populateBeerList(beers);
}

const populateBeerList = function(beers){
  const ul = document.querySelector('#beer-list');
  beers.forEach(function(beer){
    const li = document.createElement('li');
    li.textContent = beer.name + ", " + beer.tagline;
    const image = document.createElement('img');
    image.src = beer.image_url;
    image.height = 70;
    ul.appendChild(li);
    li.appendChild(image);
  });
}



window.addEventListener('load', app);
