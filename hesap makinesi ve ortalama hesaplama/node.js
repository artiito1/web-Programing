function show_result() {
    let Vize = document.querySelector("#Vize").value;
    let VizeOrani = document.querySelector("#VizeOrani").value;
    let Final = document.querySelector("#Final").value;
    let FinalOrani = document.querySelector("#FinalOrani").value;
    let GecmeO = document.querySelector("#GecmeO").value;

    let VizeSon = (Vize * VizeOrani) / 100;
    let FinalSon = (Final * FinalOrani) / 100;

    let yuzdelik = VizeSon + FinalSon;

    HarfNoru(yuzdelik, GecmeO);

    document.querySelector(".ort").innerHTML = yuzdelik;
    document.querySelector(".harf").innerHTML = harf;

}
function HarfNoru(yuzdelik, GecmeO) {
    if (yuzdelik >= 87) {
        if (yuzdelik < GecmeO) {
            harf = "AA ile Kaldınız";
        }
        else {
            harf = "AA ile Geçtiniz";
        }
    }
    else if (yuzdelik >= 81) {
        if (yuzdelik < GecmeO) {
            harf = "BA ile Kaldınız";
        }
        else {
            harf = "BA ile Geçtiniz";
        }
    }
    else if (yuzdelik >= 74) {
        if (yuzdelik < GecmeO) {
            harf = "BB ile Kaldınız";
        }
        else {
            harf = "BB ile Geçtiniz";
        }
    }
    else if (yuzdelik >= 67) {
        if (yuzdelik < GecmeO) {
            harf = "CB ile Kaldınız";
        }
        else {
            harf = "CB ile Geçtiniz";
        }
    }
    else if (yuzdelik >= 60) {
        if (yuzdelik < GecmeO) {
            harf = "CC ile Kaldınız";
        }
        else {
            harf = "CC ile Geçtiniz";
        }
    }
    else if (yuzdelik >= 53) {
        if (yuzdelik < GecmeO) {
            harf = "DC ile Kaldınız";
        }
        else {
            harf = "DC ile Geçtiniz";
        }
    }
    else if (yuzdelik >= 46) {
        if (yuzdelik < GecmeO) {
            harf = "DD ile Kaldınız";
        }
        else {
            harf = "DD ile Geçtiniz";
        }
    }
    else if (yuzdelik >= 39) {
        if (yuzdelik < GecmeO) {
            harf = "FD ile Kaldınız";
        }
        else {
            harf = "FD ile Geçtiniz";
        }
    }
    else if (yuzdelik >= 0) {
        if (yuzdelik < GecmeO) {
            harf = "FF ile Kaldınız";
        }
        else {
            harf = "FF ile Geçtiniz";
        }
    }
    return harf;
}