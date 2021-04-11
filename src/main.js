import RoomMap from './RoomMap.js';

let imgEl;
let titleEl;
let textEl;
let choicesEl;
let manyChoiceEl;
let clickAud;
let musicAud;
let choiceTmpl;
let manyChoiceTmpl;
let debugTraceCache = [];

window.onload = () => {
    imgEl = document.getElementById('img');
    titleEl = document.getElementById('title');
    textEl = document.getElementById('text');
    choicesEl = document.getElementById('choices');
    manyChoiceEl = document.getElementById('manyChoices');
    clickAud = document.getElementById('aud_click');
    choiceTmpl = document.getElementById('tmpl_choice');
    manyChoiceTmpl = document.getElementById('tmpl_many_choice');

    debugTrace(RoomMap.get('start'));

    loadRoom('start');
}

function loadRoom(roomName){
    let room = RoomMap.get(roomName);
    let img = document.getElementById(room.img);

    titleEl.hidden = (room.displayTitle) ? false : true;
    imgEl.src = (room.img) ? document.getElementById(room.img).src : '';
    textEl.innerHTML = (room.text) ? room.text : '';
    choicesEl.innerHTML = '';
    manyChoiceEl.innerHTML = '';

    if (room.music){
        if (musicAud && !musicAud.paused && musicAud.id != room.music){
            musicAud.pause();
            musicAud.currentTime = 0;
        }

        musicAud = document.getElementById(room.music);
        musicAud.play();
    }

    for (let i = 0; i < room.choices?.length; i++){
        let choice = room.choices[i];
        let choiceBtn;


        if (room.choices.length <= 4){
            choiceBtn = choiceTmpl.cloneNode(true);
        }
        else{
            choiceBtn = manyChoiceTmpl.cloneNode(true);
        }


        choiceBtn.innerHTML = choice.text;
        choiceBtn.addEventListener('click', ()=>{
            clickAud.play();
            loadRoom(choice.dest);
        });

        if (room.choices.length <= 4){
            choicesEl.appendChild(choiceBtn);
        }
        else{
            manyChoiceEl.appendChild(choiceBtn);
        }
    }
}

function debugTrace(room){
    for (let i = 0; i < room.choices?.length; i++){
        let choice = room.choices[i];

        if (!debugTraceCache.includes(choice.dest)){
            let nextRoom = RoomMap.get(choice.dest);

            debugTraceCache.push(choice.dest);

            if (nextRoom){
                debugTrace(nextRoom);
            }
            else{
                console.warn('Room', choice.dest, "does not exist");
            }
        }
    }
}