const btn = document.querySelector(".btn")
const audio = document.querySelector("audio")
const subpasek = document.querySelector(".subpasek")
const span = document.querySelector(".XD")
const git = document.querySelector(".git")
const ogar = document.querySelector(".ogar")
const nieogar = document.querySelector(".nieogar")
const procent = document.querySelector(".procent")
const forward = document.querySelector(".forward")

const mute = document.querySelector(".mute")
let isSwap = -1

mute.addEventListener("click", swap)

function swap() {
    if (isSwap > 0) {
        mute.classList.add("fa-music")
        mute.classList.remove("fa-volume-xmark")
        audio.volume = 1;
    } else {
        mute.classList.add("fa-volume-xmark")
        mute.classList.remove("fa-music")
        audio.volume = 0;
    }
    isSwap *= -1
}


let i = 100;

const pytanie = document.querySelector(".pytanie")

const indeksy = JSON.parse(localStorage.getItem("indeksy")) ?? []
console.log(indeksy);

let isClicked2 = false;

let isFirst = false;

    

function setLocalStorage() {
    localStorage.setItem("indeksy", JSON.stringify(indeksy))
    ogar.innerHTML = indeksy.length
    procent.innerText = ((indeksy.length/pytania.length) * 100).toFixed(2) + "%";
}

const pytania = [...java, ...python, ...proceduralne]

nieogar.innerHTML = pytania.length
ogar.innerHTML = indeksy.length
    procent.innerText = ((indeksy.length/pytania.length) * 100).toFixed(2) + "%";

let forwardo = 0;
let isPlaying = false

let currentIndex = 0;

btn.addEventListener("click", () => {
    if (pytania.length === indeksy.length) return alert("Ni ma chuja, że ktoś się tego wszystkiego nauczył XD kłamiesz zwyczajnie, wiesz o tym? Oszukujesz samego siebie, nikt inny Ciebie nie sprawdza")
    if(!isFirst) {
        btn.classList.add("clicked")
    }
    git.classList.add("mam")
    btn.classList.add("hide")
    if (isPlaying) return
    audio.currentTime = 0
    audio.pause()
    isPlaying = true
    i = 100
    span.innerText = "0%"
    pytanie.innerText = ""
    subpasek.style = `transform: translateX(-${i}%)`

    audio.play()
    setTimeout(() => {
        forward.classList.remove("none")
        const interval = setInterval(() => {
            i--;
            span.innerText = `${100 - i}%`
            subpasek.style = `transform: translateX(-${i}%)`
            if (i === 0 || forwardo === 1) {
                i = 0
                if (forwardo === 1) {
                    currentIndex = getRandomInt(pytania.length)
                    while(indeksy.includes(currentIndex)) currentIndex = getRandomInt(pytania.length)
                    pytanie.innerText = pytania[currentIndex]
                    audio.currentTime = 0
                    audio.pause()
                    span.innerText = `${100 - i}%`
                    subpasek.style = `transform: translateX(-${i}%)`
                    isPlaying = false
                }
                    isClicked2 = true;

                clearInterval(interval)

                btn.classList.remove("hide")
                git.classList.remove("mam")
                forward.classList.add("none")
                forwardo = 0
                isPlaying = false
            }
           
            currentIndex = getRandomInt(pytania.length)
            while(indeksy.includes(currentIndex)) currentIndex = getRandomInt(pytania.length)
            pytanie.innerText = pytania[currentIndex]

        }, 60)
    }, 3300)
})

forward.addEventListener("click", ()=> {
    forwardo = 1
    console.log("clicked");
    forward.classList.add("none")
})


git.addEventListener("click", () => {
    if( isClicked2 === true){
    indeksy.push(currentIndex);
    setLocalStorage()
    addLI(currentIndex)
         isClicked2 = false;
    git.classList.add("mam")}
})


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function reset() {
    indeksy.length = 0;
    setLocalStorage()
}

const ul = document.querySelector("ul")

function addLI(id) {
    const li = document.createElement("li")
    li.innerHTML = pytania[id];
    ul.appendChild(li)

    li.addEventListener("click", () => {
        toDelete = confirm("Usunąć?")
        if(toDelete) {
            indeksy.splice( indeksy.indexOf(id), 1);
            setLocalStorage()
            li.remove()
        }
        
    })
}

indeksy.forEach(element => {
    addLI(element)
});
