console.log("Let's vibe & relax a while!");


let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('AudioBar');
let visual = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName');

let songs = [
    {songName: "Under the Influence", filePath: "songs/1.mp3", coverPath: "cover/1.jpeg"},
    {songName: "Akuma no Ko", filePath: "songs/2.mp3", coverPath: "cover/2.png"},
    {songName: "I Really Want To Stay At Your House ", filePath: "songs/3.mp3", coverPath: "cover/3.jpg"},
    {songName: "How Long", filePath: "songs/4.mp3", coverPath: "cover/4.jpg"},
    {songName: "Let me Down x Zamane Ko", filePath: "songs/5.mp3", coverPath: "cover/5.png"},
    {songName: "PokeGym lo-fi", filePath: "songs/6.mp3", coverPath: "cover/6.jpg"},
    {songName: "Stan(only Dido)", filePath: "songs/7.mp3", coverPath: "cover/7.jpeg"},
    {songName: "The Night We Met", filePath: "songs/8.mp3", coverPath: "cover/8.png"},
    {songName: "Mando lo-fi", filePath: "songs/9.mp3", coverPath: "cover/9.jpg"},
    {songName: "Bad Habits", filePath: "songs/10.mp3", coverPath: "cover/10.jpg"},
];

songItems.forEach((element, i)=>{
  
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})


masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        visual.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        visual.style.opacity = 0;
    }
})


audioElement.addEventListener('timeupdate', ()=> {
   

    progress = parseInt((audioElement.currentTime / audioElement.duration)*100);

    progressBar.value = progress;
})

progressBar.addEventListener('change', ()=>{
    audioElement.currentTime = progressBar.value * audioElement.duration / 100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
        
    })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
       // console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');

        audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');

    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    visual.style.opacity = 1;

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    visual.style.opacity = 1;
})
