let output = document.getElementById("output")
let anze = document.getElementsByClassName("anze")[0]
let filip = document.getElementsByClassName("filip")[0]
let lara = document.getElementsByClassName("lara")[0]
let lojz = document.getElementsByClassName("lojz")[0]
let trump = document.getElementsByClassName("trump")[0]
let video = document.getElementById("confeti")
const sound = document.getElementById("soundEffect")

function handleSubmit(event) {
    event.preventDefault();
    let name = document.getElementsByClassName("input")[0].value;
    console.log(name)
    checkName(name)
}

function checkName(name) {
    let ran = Math.floor(Math.random()*6 + 1)
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
        case 4:
            shots = "shote";
            break;
        case 5:
            shots = "shotov";
            break;
        case 6:
            shots = "shotov";
            break;
    }
    name = name.toLowerCase()
    if (name === '') {
        output.innerText = 'Vnesi ime!'
    } else {
        if (name === "lara" || name === "lara vošnjak" || name === "lara vosnjak") {
            output.innerText = `Lara, spij ${ran} ${shots}!🥃`
            sad.style.display = "flex"
            happy.style.display = "none"
            reserved.style.display = "none"
            zvij.style.display = "none"
            video.currentTime = 0;
            video.play()
            sound.currentTime = 0;
            sound.play()
        }
        else if(name === "filip" || name === "flikaš flir") {
            output.innerText = "Filip ti si šefe tk da spij 6 shotov!🥃"
            sad.style.display = "none"
            happy.style.display = "none"
            zvij.style.display = "none"
            reserved.style.display = "flex"
            video.currentTime = 0;
            video.play()
            sound.currentTime = 0;
            sound.play()
        }
        else if(name === "enej" || name === "enj"){
            name = name.charAt(0).toUpperCase() + name.slice(1)
            output.innerText = `${name}, spij ${ran} ${shots}🥃. \n \n pa hitr zvij enga!🌿🚬`
            happy.style.display = "none"
            sad.style.display = "none"
            reserved.style.display = "none"
            zvij.style.display = "flex"
            video.currentTime = 0;
            video.play()
            sound.currentTime = 0;
            sound.play()
        }
        else {
            name = name.charAt(0).toUpperCase() + name.slice(1)
            output.innerText = `${name}, spij ${ran} ${shots}🥃!`
            happy.style.display = "flex"
            sad.style.display = "none"
            reserved.style.display = "none"
            zvij.style.display = "none"
            video.currentTime = 0;
            video.play()
            sound.currentTime = 0;
            sound.play()
        }
    }
}
    