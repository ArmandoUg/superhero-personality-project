var marapi = "https://gateway.marvel.com:443/v1/public/characters/1009610?apikey=2a32ba5a2e6e8f0830ec870eb1659e04";
var descriptionEl = document.querySelector(".description");
var nameEl = document.querySelector(".name");
fetch (marapi) 
.then(function(response){
    return response.json()
})
.then(function(apidata){
    console.log(apidata);
    var descText =apidata.data.results[0].description;
    descriptionEl.textContent = descText;
    var nameText =apidata.data.results[0].name;
    nameEl.textContent= nameText;

})
// var marimg ="http://i.annihil.us/u/prod/marvel/i/mg/8/a0/523ca6f2b11e4/portrait_xlarge.jpg"
// var image = document.querySelector(".test");
// image.append(marimg);