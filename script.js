if (document.getElementById('body1')) {
    let prvikviz = document.getElementById("prvikviz");
    prvikviz.addEventListener("click", function () {
        window.location.href = "pocetniKvizCSharp.html";
    });

    let drugikviz = document.getElementById("drugikviz");
    drugikviz.addEventListener("click", function () {
        window.alert("Kviz je jos uvek u izradnji!")
    });

    let trecikviz = document.getElementById("trecikviz");
    trecikviz.addEventListener("click", function () {
        window.alert("Kviz je jos uvek u izradnji!")
    });

    let petikviz = document.getElementById("petikviz");
    petikviz.addEventListener("click", function () {
        window.alert("Kviz je jos uvek u izradnji!")
    });
    let sestikviz = document.getElementById("sestikviz");
    sestikviz.addEventListener("click", function () {
        window.alert("Kviz je jos uvek u izradnji!")
    });

    let cetvrtikviz = document.getElementById("cetvrtikviz");
    cetvrtikviz.addEventListener("click", function () {
        window.location.href = "pocetniKvizJS.html";
    });
}

if (document.getElementById('body2')) {
    let predaj = document.getElementById("predaj");
    let odg = document.querySelectorAll(`input[type="radio"]`);
    predaj.addEventListener("click", function () {
        let i = 0;
        for (const radioButton of odg) {
            console.log("radi");
            if (radioButton.checked) {
                let odgovor = radioButton;
                if (odgovor.value == "tacno")
                    i++;
            }
        }
        if (i >= 3)
            window.alert("Cestitamo pogodili ste " + i + " od 5 pitanja!");
        else
            window.alert("Nazalost pogodili ste samo " + i + " od mogucih 5 pitanja, pokusajte ponovo");
        let btn = document.createElement("button");
        let telo1 = document.getElementsByClassName("pitanja");
        let telo = telo1[0];
        btn.id = "restartuj";
        btn.style = "margin-bottom: 110px; background-color:red; color:white; font-weight:bold; border: 2px solid red;"
        btn.textContent = "Ponovi kviz";
        btn.className = "predaj";
        telo.replaceChild(btn, predaj);
        btn.addEventListener("click", function () {
            window.location.href = "pocetniKvizCSharp.html";
        })
    });
}

if (document.getElementById('body3')) {
    let predaj = document.getElementById("predaj1");
    let odg = document.querySelectorAll(`input[type="radio"]`);
    predaj.addEventListener("click", function () {
        let i = 0;
        for (const radioButton of odg) {
            console.log("radi");
            if (radioButton.checked) {
                let odgovor = radioButton;
                if (odgovor.value == "tacno")
                    i++;
            }
        }
        if (i >= 3)
            window.alert("Cestitamo pogodili ste " + i + " od 5 pitanja!");
        else
            window.alert("Nazalost pogodili ste samo " + i + " od mogucih 5 pitanja, pokusajte ponovo");
        let btn = document.createElement("button");
        let telo1 = document.getElementsByClassName("pitanja");
        let telo = telo1[0];
        btn.id = "restartuj";
        btn.style = "margin-bottom: 110px; background-color:red; color:white; font-weight:bold; border: 2px solid red;"
        btn.textContent = "Ponovi kviz";
        btn.className = "predaj";
        telo.replaceChild(btn, predaj);
        btn.addEventListener("click", function () {
            window.location.href = "pocetniKvizJS.html";
        })
    });
}