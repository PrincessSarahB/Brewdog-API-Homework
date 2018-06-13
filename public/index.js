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
  dropdownBeerList(beers);
  const select = document.querySelector('select');
  select.addEventListener('change', function(){
    var beerInfo = beers[select.value];
    handleSelectChange(beerInfo);
  })

  }


const populateBeerList = function(beers){
  const ul = document.querySelector('#beer-list');
  beers.forEach(function(beer){
    const li = document.createElement('li');
    li.textContent = beer.name + " "
    const image = document.createElement('img');
    image.src = beer.image_url;
    image.height = 70;
    ul.appendChild(li);
    li.appendChild(image);
  });
}

const dropdownBeerList = function(beers){
    const dropdown = document.querySelector('#beers-dropdown');
    beers.forEach(function(beer){
      const option = document.createElement('option');
      option.value = beers.indexOf(beer);
      option.textContent = beer.name;
      dropdown.appendChild(option);
      });
}

const handleSelectChange = function(beer){
  const image = document.querySelector('#beerpic');
  image.src = beer.image_url;
  image.height = 250;
  const name = document.querySelector('#beerName');
  name.textContent = beer.name;
  const description = document.querySelector('#description');
  description.textContent = beer.description;

}



window.addEventListener('load', app);
