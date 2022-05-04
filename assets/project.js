//when page3 first loads, get url param from url
var characterCode = location.search.split("=")[1];
console.log('character code --- ', characterCode)





var marapi = `https://gateway.marvel.com:443/v1/public/characters/${characterCode}?apikey=2a32ba5a2e6e8f0830ec870eb1659e04`;
var descriptionEl = document.querySelector(".description");
var nameEl = document.querySelector(".cname");
var imgEl= document.querySelector(".chara-img-block");
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
    var imgapidata= apidata.data.results[0].thumbnail.path;
   console.log(imgapidata+"/portrait_incredible.jpg");
   var image= document.createElement("img");
   image.setAttribute("src",imgapidata+"/portrait_incredible.jpg");
   imgEl.append(image);

}).catch(function(err){
    // console.log(err);
    // setTimeout(function(){
    //     console.log("couldn't find a character... redirecting in 5 seconds...")
    //     location.replace('./fourofour.html')
    // }, 5000)
})
// var marimg ="http://i.annihil.us/u/prod/marvel/i/mg/8/a0/523ca6f2b11e4/portrait_xlarge.jpg"
// var image = document.querySelector(".test");
// image.append(marimg); portrait_incredible.jpg