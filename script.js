// ==========================
// Elements
// ==========================

const hero = document.getElementById("hero");
const timeline = document.getElementById("timeline");
const letter = document.getElementById("letter");
const reasons = document.getElementById("reasons");
const question = document.getElementById("question");
const finalPage = document.getElementById("final");

const startBtn = document.getElementById("startBtn");
const nextBtn = document.querySelector(".nextBtn");
const nextBtn2 = document.querySelector(".nextBtn2");
const nextBtn3 = document.querySelector(".nextBtn3");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const typing = document.getElementById("typing");
const music = document.getElementById("music");

// ==========================
// Hide Pages
// ==========================

timeline.style.display = "none";
gallery.style.display = "none";
letter.style.display = "none";
reasons.style.display = "none";
question.style.display = "none";
finalPage.style.display = "none";

// ==========================
// Start Button
// ==========================

startBtn.onclick = () => {

    hero.style.display = "none";
    timeline.style.display = "block";

    music.play().catch(() => { });

    window.scrollTo(0, 0);

};

// ==========================
// Next Buttons
// ==========================

nextBtn.onclick = () => {

    gallery.style.display = "none";
    letter.style.display = "block";

    typeMessage();

};

nextBtn2.onclick = () => {

    letter.style.display = "none";
    reasons.style.display = "block";

};

nextBtn3.onclick = () => {

    reasons.style.display = "none";
    question.style.display = "block";

};


// ==========================
// YES Button
// ==========================

yesBtn.onclick = () => {

    question.style.display = "none";
    finalPage.style.display = "block";

    window.scrollTo(0, 0);

};

// ==========================
// NO Button Runs Away
// ==========================

function moveButton() {

    const x = Math.random() * (window.innerWidth - 150);

    const y = Math.random() * (window.innerHeight - 70);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

}

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", moveButton);

// ==========================
// Typing Animation
// ==========================

const text = `💌 To My Forever Person❤️
 🌹Happy Anniversary, My Love!🥹❤️✨
My Dearest Hubby👑❤️

आज आपल्या प्रेमाच्या प्रवासाला आणखी एक सुंदर वर्ष पूर्ण झालं...🥹💍
वेळ किती पटकन निघून गेला कळलंच नाही, पण प्रत्येक क्षणाने माझं आयुष्य अधिक सुंदर केलं.❤️✨

तू माझ्या आयुष्यात आलास आणि माझ्या जगाला अर्थ मिळाला.🌍❤️
तुझ्या एका हसण्याने माझा पूर्ण दिवस सुंदर होतो.😊💖
तुझ्या मिठीत मला जगातील सर्वात सुरक्षित जागा मिळते.🤗❤️

कधी मी रागावले...😒
कधी हट्टी झाले...🙈
कधी विनाकारण भांडले...😅💔

पण तू नेहमी माझा हात घट्ट धरून ठेवला...🤝❤️
मला समजून घेतलंस...🥹
माझ्यावर निस्वार्थ प्रेम केलंस...💖

त्यासाठी **Thank You** हा शब्दही खूप छोटा आहे.❤️

तुझ्यामुळे मला कळलं की खरं प्रेम म्हणजे फक्त "I Love You" म्हणणं नसतं...❤️
तर प्रत्येक दिवशी एकमेकांना निवडणं असतं...🌹
एकमेकांचा आधार बनणं असतं...🫂
आणि कोणत्याही परिस्थितीत साथ न सोडणं असतं...♾️❤️

तुझ्यासोबतचा प्रत्येक क्षण माझ्यासाठी एक सुंदर आठवण आहे...📸✨

🌅प्रत्येक सकाळ...
🌙प्रत्येक रात्र...
😂प्रत्येक हसू...
🥺प्रत्येक अश्रू...
❤️प्रत्येक मिठी...
💋प्रत्येक छोटासा क्षण...

सगळंच माझ्यासाठी अमूल्य आहे.💎❤️
जर मला पुन्हा आयुष्य जगायची संधी मिळाली...🌍✨
तर प्रत्येक जन्मात मी फक्त **तुलाच** निवडेन.❤️♾️

तू माझा Best Friend आहेस. 🥰
तू माझं घर आहेस. 🏡❤️
तू माझी शांतता आहेस. 🌸
तू माझा आनंद आहेस. ☀️
तू माझं स्वप्न आहेस. 🌙✨
आणि तूच माझं Forever आहेस. ♾️❤️

आज या खास दिवशी मी तुला काही वचन द्यायची आहेत... 🤞💖

💍 तुझा हात कधीच सोडणार नाही.
❤️ प्रत्येक आनंदात आणि प्रत्येक दुःखात तुझ्यासोबत उभी राहीन.
🌍 प्रत्येक स्वप्न पूर्ण करण्यासाठी तुझी साथीदार बनेन.
😊 तुझ्या चेहऱ्यावरचं हसू कायम ठेवण्याचा प्रयत्न करीन.
♾️ आणि आयुष्यभर रोज नव्याने तुझ्यावर प्रेम करत राहीन.

Thank you... ❤️

🌹 माझ्यावर इतकं प्रेम केल्याबद्दल...
🤗 माझी काळजी घेतल्याबद्दल...
🥹 मला समजून घेतल्याबद्दल...
💖 मला नेहमी Special वाटू दिल्याबद्दल...

तुझ्यासोबतचं आयुष्य ही देवाने दिलेली सर्वात सुंदर भेट आहे. 🎁❤️

## 🌍❤️ In Every Lifetime...

जर तारे मोजावे लागले तर मी मोजेन... ⭐
जर समुद्र ओलांडावा लागला तर मी ओलांडेन... 🌊
जर वेळ थांबवता आली असती तर हा क्षण कायमचा जपला असता... ⏳❤️

कारण...

**No Matter What Happens...** 🥹

**No Matter Where Life Takes Us...** 🌍

**No Matter How Many Years Pass...** ⏳

### 💖 I Will Always Choose You. ❤️♾️

## 🌹 Happy Anniversary, My Forever Love. 💍❤️

### I Love You Today... ❤️

### I Love You Tomorrow... 🌹

### I Will Love You Forever... ♾️💖

With All My Heart... ❤️🥹

## Forever Yours, 💌❤️

### Your Loving Wife 👸❤️✨




`;

let i = 0;

function typeMessage() {

    typing.innerHTML = "";

    i = 0;

    const timer = setInterval(() => {

        typing.innerHTML += text.charAt(i);

        i++;

        if (i >= text.length) {

            clearInterval(timer);

        }

    }, 45);

}




// ==========================
// Page Fade Animation
// ==========================

const style = document.createElement("style");

style.innerHTML = `
.fade{
animation:fade .8s;
}

@keyframes fade{
from{
opacity:0;
transform:translateY(40px);
}
to{
opacity:1;
transform:translateY(0);
}
}
`;

document.head.appendChild(style);
// ================================
// PASSWORD PROTECTION
// ================================

const PASSWORD = "22-10-2021"; // ❤️ तुमची Anniversary Date (DD-MM-YYYY)

function checkPassword() {

    const pass = document.getElementById("passwordInput").value;

    if (pass === PASSWORD) {

        document.getElementById("passwordScreen").style.display = "none";

    } else {

        document.getElementById("error").innerHTML =
            "❌ Wrong Anniversary Date ❤️";

    }

}


function goBack() {
    {
        window.location.href = "index.html";
    }

}


// ---------- Back Button ----------

function goBack() {

    if (getComputedStyle(finalPage).display === "block") {
        finalPage.style.display = "none";
        question.style.display = "block";
        return;
    }

    if (getComputedStyle(question).display === "block") {
        question.style.display = "none";
        reasons.style.display = "block";
        return;
    }

    if (getComputedStyle(reasons).display === "block") {
        reasons.style.display = "none";
        letter.style.display = "block";
        return;
    }

    if (getComputedStyle(letter).display === "block") {
        letter.style.display = "none";
        gallery.style.display = "block";   // galleryGrid ऐवजी gallery
        return;
    }

    if (getComputedStyle(gallery).display === "block") {
        gallery.style.display = "none";
        timeline.style.display = "block";
        return;
    }

    if (getComputedStyle(timeline).display === "block") {
        timeline.style.display = "none";
        hero.style.display = "block";
        return;
    }

    // जर Hero page वर असशील तर Home ला जा
    window.location.href = "index.html";
}

function isVisible(element) {
    return window.getComputedStyle(element).display !== "none";
}

function goNext() {

    if (isVisible(hero)) {
        hero.style.display = "none";
        timeline.style.display = "block";
        return;
    }

    if (isVisible(timeline)) {
        timeline.style.display = "none";
        gallery.style.display = "block";
        return;
    }

    if (isVisible(gallery)) {
        gallery.style.display = "none";
        letter.style.display = "block";
        return;
    }

    if (isVisible(letter)) {
        letter.style.display = "none";
        reasons.style.display = "block";
        return;
    }

    if (isVisible(reasons)) {
        reasons.style.display = "none";
        question.style.display = "block";
        return;
    }

    if (isVisible(question)) {
        question.style.display = "none";
        finalPage.style.display = "block";
        return;
    }
}

function goBack() {

    if (isVisible(finalPage)) {
        finalPage.style.display = "none";
        question.style.display = "block";
        return;
    }

    if (isVisible(question)) {
        question.style.display = "none";
        reasons.style.display = "block";
        return;
    }

    if (isVisible(reasons)) {
        reasons.style.display = "none";
        letter.style.display = "block";
        return;
    }

    if (isVisible(letter)) {
        letter.style.display = "none";
        gallery.style.display = "block";
        return;
    }

    if (isVisible(gallery)) {
        gallery.style.display = "none";
        timeline.style.display = "block";
        return;
    }

    if (isVisible(timeline)) {
        timeline.style.display = "none";
        hero.style.display = "block";
        return;
    }
}
const btn = document.getElementById("startBtn");
const popup = document.getElementById("couplePopup");

btn.addEventListener("click", () => {

    popup.classList.add("show");

    setTimeout(() => {
        popup.classList.remove("show");
    }, 40);

});