//when page first loads, get url param from url
var characterCode = location.search.split("=")[1];
console.log("character code --- ", characterCode);

var marapi = `https://gateway.marvel.com:443/v1/public/characters/${characterCode}?apikey=2a32ba5a2e6e8f0830ec870eb1659e04`;
var descriptionEl = document.querySelector(".description");
var nameEl = document.querySelector(".cname");
var imgEl = document.querySelector(".chara-img-block");
var btnEL = document.querySelector(".btn");
btnEL.disabled = true;
var wikilink;

fetch(marapi)
    .then(function (response) {
        return response.json();
    })
    .then(function (apidata) {
        console.log(apidata);
        var descText = apidata.data.results[0].description;
        descriptionEl.textContent = descText;
        var nameText = apidata.data.results[0].name;
        nameEl.textContent = nameText;
        var imgapidata = apidata.data.results[0].thumbnail.path;
        console.log(imgapidata + "/portrait_incredible.jpg");
        var image = document.createElement("img");
        image.setAttribute("src", imgapidata + "/portrait_incredible.jpg");
        imgEl.append(image);

        wikilink = apidata.data.results[0].urls[1].url;
        if (characterCode === "1009707")
            wikilink = `https://www.marvel.com/characters/wasp-janet-van-dyne`;
        if (characterCode === "1009610")
            wikilink = `https://www.marvel.com/characters/spider-man-peter-parker`;
        if (characterCode === `1009652`)
            wikilink = `https://www.marvel.com/characters/thanos`;
        if (characterCode === `1017577`)
            wikilink = `https://www.marvel.com/characters/ms-marvel-kamala-khan`;
        btnEL.setAttribute("href", wikilink);
        btnEL.disabled = false;
    })
    .catch(function (err) {
        console.log(err);
        setTimeout(function () {
            console.log(
                "couldn't find a character... redirecting in 5 seconds...",
            );
            location.replace("./fourofour.html");
        }, 5000);
    });

function gowiki(wikilink) {
    window.location = wikilink;
}
btnEL.addEventListener("click", function () {
    console.log("i clicked it");
    gowiki(wikilink);
});
