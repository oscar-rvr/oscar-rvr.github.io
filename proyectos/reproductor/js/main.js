const songList = [{
            title: "Acoustic Breeze",
            file: "acousticbreeze.mp3",
            cover: "1.jpg"
        },

        {
            title: "A new Beginning",
            file: "anewbeginning.mp3",
            cover: "2.jpg"
        },
        {
            title: "Creative minds",
            file: "creativeminds.mp3",
            cover: "3.jpg"
        },
    ]
    //let actual song
let actualSong = null;

//capturar elementos del DOM para trbajar con JS
const songs = document.getElementById("songs");
const audio = document.getElementById("audio");
const cover = document.getElementById("cover");
const title = document.getElementById("title");
const play = document.getElementById("play");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
progressContainer.addEventListener("click", setProgress);

//escuhar el elemnto de audio
audio.addEventListener("timeupdate", updateProgress);
//escuchar clics en los controles
play.addEventListener("click", () => {
    if (audio.paused) {
        playSong();
    } else {
        pauseSong();
    }
})
next.addEventListener("click", () => nextSong());
prev.addEventListener("click", () => prevSong());
//cargar canciones y mostrar el lista de canciones
function loadSongs() {
    songList.forEach((song, index) => {
        //crear li
        const li = document.createElement("li");
        //crear a
        const link = document.createElement("a");
        //hidratar a
        link.textContent = song.title;
        link.href = "#"
            //escuchar clics
        link.addEventListener("click", () => loadSong(index));
        //añadir a li
        li.appendChild(link);
        //añadir li a ul 
        songs.appendChild(li);
    })
}




//cargar cancion seleccionada
function loadSong(songIndex) {
    if (songIndex != actualSong) {
        changeActiveClass(actualSong, songIndex);
        actualSong = songIndex;
        audio.src = "./audio/" + songList[songIndex].file;
        playSong();

        changeCover(songIndex);
        changeTitle(songIndex);
        updateControls();

    }


}
//Actualizar barra de progres
function updateProgress() {
    //totla y actual
    const { duration, currentTime } = event.srcElement;
    const percent = (currentTime / duration) * 100;
    console.log(percent);
    progress.style.width = percent + "%"
}

//hacer la barra de progreso clicable
function setProgress(event) {
    const totalWidth = this.offsetWidth;
    const progressWidth = event.offsetX;
    const current = (progressWidth / totalWidth) * audio.duration;

    audio.currentTime = current;


}
//actualizar controles
function updateControls() {
    if (audio.paused) {
        play.classList.remove("fa-pause");
        play.classList.add("fa-play");
    } else {
        play.classList.add("fa-pause");
        play.classList.remove("fa-play");

    }
}
//reproducri cancion
function playSong() {
    if (actualSong != null) {
        audio.play();
        updateControls();
    }

}
//pausar cancion
function pauseSong() {

    audio.pause();
    updateControls();
}
//cambiar clase activa
function changeActiveClass(lastIndex, newIndex) {
    const links = document.querySelectorAll("a");
    if (lastIndex != null) {
        links[lastIndex].classList.remove("active");
    }
    links[newIndex].classList.add("active");
}


//cambiar el cobver de la cancion
function changeCover(songIndex) {
    cover.src = "./img/" + songList[songIndex].cover;
}

//cahnge title
function changeTitle(songIndex) {
    title.innerText = songList[songIndex].title;
}

//anterior cacnion
function prevSong() {

    if (actualSong > 0) {
        loadSong(actualSong - 1);
    } else {
        loadSong(songList.length - 1);
    }
}
//siguiente cancino
function nextSong() {


    if (actualSong < songList.length - 1) {
        loadSong(actualSong + 1);
    } else {
        loadSong(0)
    }
}

//lamzar siguiente cancion cuando acaba la anterior
audio.addEventListener("ended", () => nextSong());
//go
loadSongs();