function ushqyerja(){
    alert("Vizitorët mund të ushqejnë kafshët, por jo qenët.");
}

function rërë(){
    alert("Vizitorët mund të luajnë ne fushën me rërë.");
}

function shtëpia(){
    var answer = confirm("Dëshironi të mësoni më shumë për shtëpinë në pemë?");

    if(answer){
        alert("Shtëpia në pemë është tek livadhi prapa shankut, aty fëmijët mund shikojnë pamjen e natyrës dhe te argëtohen në luhatëse.");
    }
}

function këndi(){
    var answer = confirm("Dëshironi të mësoni më shumë për këndin e aventurave?");

    if(answer){
        alert("Këndi i aventurave është vendi ku argëtohen fëmijët me lojrat që i jepin kujtime të pa harrushme.");
    }
}

function hiking(){
    var answer = confirm("Dëshironi të mësoni më shumë për hikingun në natyrë?");

    if(answer){
        alert("Hikingu fillon tek livadhi prapa shankut dhe zhvillohet tek pylli afër fermës i shoqëruar me qenët e fermës dhe zgjatë 45 minuta deri në 1 orë.");
    }
}

function pony(){
    var answer = confirm("Dëshironi të mësoni më shumë për kalërimin me poni?");

    if(answer){
        alert("Kalërimi me poni është një aktivitet argëtues për fëmijë, ku fëmijëve u ipet mundësia për të kalëruar me poni me mbikqyerjen e stafit, ky aktivitet është tek livadhi prapa shanku.");
    }
}

var images = document.querySelectorAll(".imganimal");
var overlay2 = document.getElementById("overlay2");
var overlayImg = document.getElementById("overlayImg");

for (var i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function () {
        overlay2.style.display = "flex";
        overlayImg.src = this.src;

        document.querySelector(".albumi").style.filter = "blur(3px)";
    });
}

overlay2.addEventListener("click", function () {
    overlay2.style.display = "none";
    document.querySelector(".albumi").style.filter = "none";
});

function showText() {
    document.getElementById("text").style.display = "block";
}

function hideText() {
    document.getElementById("text").style.display = "none";
}

var count = 0;

function hello() {
    var title = document.getElementById("title");

    if (title.innerHTML == "LAZDROHU N'FERMË") {
        title.innerHTML = "Mirë se vini!";
    } else {
        title.innerHTML = "LAZDROHU N'FERMË";
    }

    count++;

    console.log("Klikime");
}

function swap(img) {
    if (img.src.includes("krisi.jpg")) {
        img.src = "img/kafshet/choko.jpg";
    } 
    else if (img.src.includes("choko.jpg")) {
        img.src = "img/kafshet/lulu.jpg";
    } 
    else if (img.src.includes("lulu.jpg")) {
        img.src = "img/kafshet/polari.jpg";
    }
    else {
        img.src = "img/kafshet/krisi.jpg";
    }
}

function swap2(img) {
    if (img.src.includes("mr%20heckles.jpg") || img.src.includes("mr heckles.jpg")) {
        img.src = "img/kafshet/papagalli.jpg";
    }
    else if (img.src.includes("papagalli.jpg")) {
        img.src = "img/kafshet/fllanza.jpg";
    }
    else if (img.src.includes("fllanza.jpg") || img.src.includes("pauna 2.jpg")) {
        img.src = "img/kafshet/pauna.jpg";
    }
    else if (img.src.includes("pauna.jpg")) {
        img.src = "img/kafshet/pauna 2.jpg";
    }
    else if (img.src.includes("pauna%202.jpg") || img.src.includes("pauna 2.jpg")) {
        img.src = "img/kafshet/fazan.jpg";
    }
    else {
        img.src = "img/kafshet/mr heckles.jpg";
    }
}

function swap3(img) {
    if (img.src.includes("lepur.jpg")) {
        img.src = "img/kafshet/breshka.jpg";
    }
    else {
        img.src = "img/kafshet/lepur.jpg";
    }
}

// var v_button = document.getElementBycl("btn1");
// var v_first = document.getElementsByClassName("animation");

// v_button.onclick = function(){
//     v_first.style.textAlign = "center";
//     v_first.style.padding = "20px";
// }

// v_first.onmouseover = function(){
//     v_first.style.cssText = "text-align:center; padding:20px;"
// }

// v_button.onclick = function(){
//     v_first.setAttribute("class", "test");
// }
