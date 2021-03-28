setInterval(function(){
  let d = new Date()
  let displayTime = document.getElementById("time");
  displayTime.textContent = (d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds())
}, 1000);

// function bdSilinder() {
//     window.location.href = "silinder.html";
// }

// function pilihanKerucut() {
//     window.location.href = "kerucut.html";
// }

// function pilihanBola() {
//     window.location.href = "bola.html";
// }

// function scrollDiv() {
//     var elmnt = document.getElementById('scroll');
//     elmnt.scrollIntoView();
//     console.log('tes');
// }

const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

function countSilinder() {
    var x = document.getElementById('hitung');
    var jarijari = document.getElementById('jarijari').value;
    var tinggi = document.getElementById('tinggi').value;

    document.getElementById('luasSilinder').innerHTML = "Luas Permukaan Silinder: " + num(formatter.format((2 * Math.PI * Math.pow(jarijari, 2) + 2 * Math.PI * jarijari * tinggi))) + " m" + "2".sup();
    document.getElementById('volumeSilinder').innerHTML = "Volume Silinder: " + num(formatter.format((Math.PI * jarijari * jarijari * tinggi))) + " m" + "3".sup();
    if (x.style.display === 'none') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}

function num(x) {
    return x.toString().replace(/,/g, "");
}

function countBola() {
    var x = document.getElementById('hasilBola');
    var jarijari = document.getElementById('jarijari').value;

    document.getElementById('luasBola').innerHTML = "Luas Permukaan Bola: " + num(formatter.format((4 * Math.PI * jarijari * jarijari))) + " m" + "2".sup();
    document.getElementById('volumeBola').innerHTML = "Volume Bola: " + num(formatter.format((4 / 3 * Math.PI * Math.pow(jarijari, 3)))) + " m" + "3".sup();

    if (x.style.display === 'none') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}

function countKerucut() {
    var x = document.getElementById('hasilKerucut');
    var jarijari = document.getElementById('jarijari').value;
    var tinggi = document.getElementById('tinggiKerucut').value;
    var garisPelukis = document.getElementById('garisPelukis').value;

    document.getElementById('luasKerucut').innerHTML = "Luas Permukaan Kerucut: " + num(formatter.format((Math.PI * Math.pow(jarijari, 2) + Math.PI * jarijari * garisPelukis))) + " m" + "2".sup();
    document.getElementById('volumeKerucut').innerHTML = "Volume Kerucut: " + num(formatter.format((1 / 3 * Math.PI * Math.pow(jarijari, 2) * tinggi))) + " m" + "3".sup();


    if (x.style.display === 'none') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}


function day() {
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = parseInt(d.getHours());
    var waktu = "";
    if (h >= 0 && h <= 10) {
        waktu = "Pagi,";
    } else if (h >= 11 && h <= 14) {
        waktu = "Siang,";
    } else if (h >= 14 && h <= 18) {
        waktu = "Sore,";
    } else {
        waktu = "Malam,";
    }

    return waktu;
}

function greetings() {
    var retVal = "";
    var ulang = true;
    if (ulang == true) {
        retVal = prompt("Masukkan nama untuk melanjutkan : ", "your name here");
        console.log(day());
        document.getElementById('greetings').innerHTML = "Selamat " + day() + " " + retVal;
        ulang = false;
    } else {
        console.log(day());
        document.getElementById('greetings').innerHTML = "Selamat " + day() + " " + retVal;
    }
}