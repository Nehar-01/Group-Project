function openMenu() {
    const menu = document.getElementById("myLinks");

    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
        menu.style.flexDirection = "column";
    }
}

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

        document.querySelector(".gallery").style.filter = "blur(3px)";
    });
}

overlay2.addEventListener("click", function () {
    overlay2.style.display = "none";
    document.querySelector(".gallery").style.filter = "none";
});