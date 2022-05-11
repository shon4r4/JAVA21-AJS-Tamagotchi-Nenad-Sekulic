import { Tamagotchi } from "./modules/tama";
const tm = new Tamagotchi();
document.querySelector('button').addEventListener('click', toggleStopWatch);
document.getElementById('feed').addEventListener('click', feed);
document.getElementById('play').addEventListener('click', play);

function feed(){
    tm.feed();
}

function play(){
    tm.play();
}

function toggleStopWatch(){
    if(tm.isRunning()){
        tm.stop();
        document.querySelector('button').innerText = 'Start';
    }
    else{
        tm.start();
        document.querySelector('button').innerText = 'Stop';  
    } 
}