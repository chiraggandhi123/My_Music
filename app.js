arr = ["./1.wav","./2.wav","./clock.mp3","./dogs.mp3","./snakes.mp3","./6.mp3"]
// document.getElementById("myTune").innerHTML = `<source src = ${string(arr[0])}>`
i=0
let x = document.getElementById('myTune')


function next(){
    
    i++
    
    if(i>arr.length-1){i=0}
    document.getElementById('myTune').pause();
    document.getElementById('myTune').load();
    x.innerHTML = ""
    x.innerHTML += `<source src = ${arr[i]}>`
    document.getElementById('myTune').play()
    document.getElementById(i).style.backgroundColor="#000"
    document.getElementById(i+1).style.backgroundColor="white"
    play_button()
    
    
}


function prev(){
    
    i--
    
    if(i<0) { i=0}
    document.getElementById('myTune').pause();
    document.getElementById('myTune').load();
    document.getElementById('myTune').currentTime = 0;
    x.innerHTML=""
    x.innerHTML += `<source src = ${arr[i]}>`

    console.log(i,x)
    document.getElementById('myTune').play()
    document.getElementById(i+2).style.backgroundColor="#000"
    document.getElementById(i+1).style.backgroundColor="white"
    play_button();

}
function play_button(){
    let x = document.getElementById('play')
    x.outerHTML = `        <i class="fa fa-pause-circle fa-2x" id="pause" onclick="document.getElementById('myTune').pause(); pause_button();" aria-hidden="true"></i>`
    console.log(i+1)
    document.getElementById(i+1).style.backgroundColor="white"
    
}
function pause_button(){
    let x = document.getElementById('pause')
    x.outerHTML = `        <i class="fa fa-play-circle fa-2x" id="play" onclick="document.getElementById('myTune').play(); play_button();" aria-hidden="true"></i>
    `

}

