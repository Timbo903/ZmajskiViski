let output = document.getElementById("output")
let output2 = document.getElementById("output2")

let anze = document.getElementsByClassName("anze")[0]
let filip = document.getElementsByClassName("filip")[0]
let lara = document.getElementsByClassName("lara")[0]
let lojz = document.getElementsByClassName("lojz")[0]
let trump = document.getElementsByClassName("trump")[0]
let laraK = document.getElementsByClassName("laraK")[0]
let laraV = document.getElementsByClassName("laraV")[0]
let ana = document.getElementsByClassName("ana")[0]
let gabi = document.getElementsByClassName("gabi")[0]
let nejc = document.getElementsByClassName("nejc")[0]
let timbo = document.getElementsByClassName("timbo")[0]
let spela = document.getElementsByClassName("spela")[0]
let nika = document.getElementsByClassName("nika")[0]
let tadej = document.getElementsByClassName("tadej")[0]
let bastl = document.getElementsByClassName("bastl")[0]
let tjasa = document.getElementsByClassName("tjasa")[0]

let video = document.getElementById("confeti")
const sound = document.getElementById("soundEffect")
const emojis = [filip, lara, anze, lojz, laraK, laraV, gabi, nejc, ana, spela, timbo, nika, trump, tadej, bastl, tjasa];


function handleSubmit(event) {
    event.preventDefault();
    let name = document.getElementsByClassName("input")[0].value;
    output2.innerText = "";
    checkName(name)
}

function hideAllEmojis() {
    emojis.forEach(e => e.style.display = "none");
}

function showEmoji(emoji) {
    hideAllEmojis();
    emoji.style.display = "flex"
}

function checkName(name) {
    let ran = Math.floor(Math.random()*3 + 1)
    let shots = ''
    switch(ran) {
        case 1:
            shots = 'shot';
            break;
        case 2:
            shots = "shota";
            break;
        case 3:
            shots = "shote";
            break;
    }
    name = name.toLowerCase()
    if (name === '') {
        output.innerText = 'Vnesi ime!'
    } else {
        if (name === "lara vošnjak" || name === "lara vosnjak" || name === "vosnjak" || name === "vošnjak") {
            output.innerText = `Lara, spij ${ran} ${shots}!🥃`
            showEmoji(laraV)
            video.currentTime = 0;
            video.play()
            sound.currentTime = 0;
            sound.play()
        }
        else if(name === "filip" || name === "filipe") {
            output.innerText = "Filip ti si šefe tk da spij 4 shote!🥃"
            showEmoji(filip)
            video.currentTime = 0;
            video.play()
            sound.currentTime = 0;
            sound.play()
        }
        else if(name === "gabi" || name === "gabrijela"){
            name = name.charAt(0).toUpperCase() + name.slice(1)
            output.innerText = `${name}, spij ${ran} ${shots}🥃.`
            showEmoji(gabi)
            video.currentTime = 0;
            video.play()
            sound.currentTime = 0;
            sound.play()
        }

        else if(name === "lara kronovšek" || name === "lara kronovsek" || name === "kronovsek" || name === "kronovšek"){
            name = name.charAt(0).toUpperCase() + name.slice(1)
            output.innerText = `${name}, spij ${ran} ${shots}🥃.`
            showEmoji(laraK)
            video.currentTime = 0;
            video.play()
            sound.currentTime = 0;
            sound.play()
        }

        else if(name === "lojz"){
            name = name.charAt(0).toUpperCase() + name.slice(1)
            output.innerText = `${name}, spij ${ran} ${shots}🥃.`
            showEmoji(lojz)
            video.currentTime = 0;
            video.play()
            sound.currentTime = 0;
            sound.play()
        }

        else if(name === "lara"){
            name = name.charAt(0).toUpperCase() + name.slice(1)
            output.innerText = `Nevem kera Lara si tk, da spi 1 shot pa probi še enkrat.\nBodi bolj specifična!😵`
            output2.innerText = "Pa Bastl tut spije en shot k je že lih na sliki."
            showEmoji(lara)
            video.currentTime = 0;
            video.play()
            sound.currentTime = 0;
            sound.play()
        }

        else if(name === "spela" || name === "špela"){
            name = name.charAt(0).toUpperCase() + name.slice(1)
            output.innerText = `${name}, spij ${ran} ${shots}🥃.`
            showEmoji(spela)
            video.currentTime = 0;
            video.play()
            sound.currentTime = 0;
            sound.play()
        }

        else if(name === "ana"){
            name = name.charAt(0).toUpperCase() + name.slice(1)
            output.innerText = `${name}, spij ${ran} ${shots}🥃.`
            showEmoji(ana)
            video.currentTime = 0;
            video.play()
            sound.currentTime = 0;
            sound.play()
        }

        else if(name === "nika"){
            name = name.charAt(0).toUpperCase() + name.slice(1)
            output.innerText = `${name}, spij ${ran} ${shots}🥃.`
            showEmoji(nika)
            video.currentTime = 0;
            video.play()
            sound.currentTime = 0;
            sound.play()
        }

        else if(name === "trump" || name === "buda" || name === "kiko"){
            name = name.charAt(0).toUpperCase() + name.slice(1)
            output.innerText = `Mali faker Kiko ti pa žal ne smeš😢`
            showEmoji(lojz)
            video.currentTime = 0;
            video.play()
            sound.currentTime = 0;
            sound.play()
        }

        else if(name === "anze" || name === "anže" || name === "ak"){
            name = name.charAt(0).toUpperCase() + name.slice(1)
            output.innerText = `${name}, spij ${ran} ${shots}🥃.`
            showEmoji(anze)
            video.currentTime = 0;
            video.play()
            sound.currentTime = 0;
            sound.play()
        }

        else if(name === "matic" || name === "bastl" || name === "pes"){
            name = name.charAt(0).toUpperCase() + name.slice(1)
            output.innerText = `${name}, spij ${ran} ${shots}🥃.`
            showEmoji(bastl)
            video.currentTime = 0;
            video.play()
            sound.currentTime = 0;
            sound.play()
        }

        else if(name === "tadej" || name === "tado" || name === "paradiž"){
            name = name.charAt(0).toUpperCase() + name.slice(1)
            output.innerText = `${name}, spij ${ran} ${shots}🥃.`
            showEmoji(tadej)
            video.currentTime = 0;
            video.play()
            sound.currentTime = 0;
            sound.play()
        }

        else if(name === "nejc" || name === "neđo"){
            name = name.charAt(0).toUpperCase() + name.slice(1)
            output.innerText = `${name}, spij ${ran} ${shots}🥃.`
            showEmoji(nejc)
            video.currentTime = 0;
            video.play()
            sound.currentTime = 0;
            sound.play()
        }

        else if(name === "timč" || name === "timc" || name === "timbo" || name === "timotej" || name === "timi"){
            name = name.charAt(0).toUpperCase() + name.slice(1)
            output.innerText = `${name}, spij ${ran} ${shots}🥃.`
            showEmoji(timbo)
            video.currentTime = 0;
            video.play()
            sound.currentTime = 0;
            sound.play()
        }

        else if(name === "tjasa" || name === "tjaša"){
            name = name.charAt(0).toUpperCase() + name.slice(1)
            output.innerText = `Tjaša naša pije pa za dva🍻 \n O šment en je še pa mladoletn tk, da žal tokrat ne piješ😢`;
            showEmoji(tjasa);
            video.currentTime = 0;
            video.play()
            sound.currentTime = 0;
            sound.play()
        }













        else {
            name = name.charAt(0).toUpperCase() + name.slice(1)
            output.innerText = `${name}, spij ${ran} ${shots}🥃!`
            hideAllEmojis()
            sound.currentTime = 0;
            sound.play()
        }
    }
}
    