const RoomMap = new Map();

RoomMap.set('start', {
    img: 'start',
    music: 'aud_dark',
    displayTitle: true,
    choices: [
        {text: 'Start', dest: 'intro'}
    ]
});

RoomMap.set('intro', {
    music: 'aud_dark',
    text: 'The year is 2057.<br><br> The Nova mega-corperation owns 95% of the worlds buisiness and controls all forms of global communication. The separation between rich and poor is the biggest it has ever been, and has come to be known as “The Schism,” among the lower class.<br><br> You are Ridley Chel, a freelance hacker who makes thier living off of coorperate sabatage, digital rebellion, and tracking down a cheating boyfriend every now an then.<br><br> You are about to change everything...',
    choices: [
        {text: 'Next', dest: 'bedroom_01'}
    ]
});

RoomMap.set('bedroom_01', {
    img: 'appartment',
    music: 'aud_appartment',
    text: 'As you open your eyes the mid-afternoon sun shines in through the slits in your blinds, and cascades across the empty pizza boxes and Nova- Max<sup>TM</sup> cans that litter your appartment.<br /><br /> A new email waits on your computer.',
    choices: [
        {text: 'Read', dest: 'read_email'},
        {text: 'Delete and go back to bed', dest: 'delete_email'}
    ]
});

RoomMap.set('delete_email', {
    img: 'appartment',
    music: 'aud_appartment',
    text: 'You decide to delete the email and go back to bed.<br><br> After all, it probably wasn’t anything important.',
    choices: [
        {text: 'Game Over. Start Again?', dest: 'start'}
    ]
});

RoomMap.set('read_email', {
    img: 'appartment',
    music: 'aud_appartment',
    text: 'You lazily climb out of bed and walk over to your computer, opening the email. It’s mostly empty, except for a line of text that reads:<br><br> \“709 Glass Rd. 14/8\”<br><br> Strange...',
    choices: [
        {text: 'Reply to email', dest: 'reply_email'},
        {text: 'Search internet for \"709 Glass Rd. 14/8.\"', dest: 'search_email_info'}
    ]
});

RoomMap.set('reply_email', {
    img: 'appartment',
    music: 'aud_appartment',
    text: 'You decide to reply to the email, and send the following message:<br><br> “Who is this, and what do these numbers mean?”<br><br> You hit send, but only seconds later you get a reply:<br><br> “The email address does not exist.”',
    choices: [
        {text: 'Search internet for \"709 Glass Rd. 14/8.\"', dest: 'search_email_info'}
    ]
});

RoomMap.set('search_email_info', {
    img: 'appartment',
    music: 'aud_appartment',
    text: 'You decide to google the information in the email.<br><br> The results show that the address contained in the message is the address for Nova Corp. HQ, but you can\'t find any references to 14/8.<br><br> You feel the need to find out more, and you know there is only one way to do that.',
    choices: [
        {text: 'Take taxi to Nova Corp. HQ', dest: 'taxi_to_nchq'},
        {text: 'Walk to Nova Corp. HQ', dest: 'walk_to_nchq'}
    ]
});

RoomMap.set('taxi_to_nchq', {
    img: 'street',
    music: 'aud_street',
    text: 'You go outside an hail a taxi. A bright yellow Nova Cab<sup>TM</sup> hovers to a stop in front of your building and you hop in. The ride to Nova Corp. HQ isn’t very eventful. The driver mostly keeps quiet and drinks loudly through the straw of his large Nova-Fizz<sup>TM</sup> cup.',
    choices: [
        {text: 'Next', dest: 'nova_lobby'}
    ]
});

RoomMap.set('walk_to_nchq', {
    img: 'street',
    music: 'aud_street',
    text: 'Walking down the street you hear the hustle and bustle of the crowded city. Holographic Nova Corp. advertisements shout slogans and sales pitches to the passerbys.<br><br> As you near Nova Corp. HQ, you encounter a homeless man muttering to himself. He then looks directly at you and says \“Hey, I know why you’re here, follow me and I’ll show you a secret way in.\”',
    choices: [
        {text: 'Trust Him', dest: 'trust_man'},
        {text: 'Don\'t Trust Him', dest: 'nova_lobby'}
    ]
});

RoomMap.set('trust_man', {
    img: 'street',
    music: 'aud_street',
    text: 'You decide to trust him, as after all, he probably knows this area a whole let better than you. He leads you about a block away into an alley and motions towards what looks like a cellar door. “Once inside, just keep heading straight and you will be there before you know it.”<br><br> You go through the doors, and you can hear them shut and lock behind you. You feel something hit the back of your head and everything goes dark.',
    choices: [
        {text: 'Game over. Try again?', dest: 'start'}
    ]
});

RoomMap.set('nova_lobby', {
    img: 'lobby',
    music: 'aud_dark',
    text: 'You walk through the front doors of Nova Corp. HQ into a large atrium filled with people going about their buisiness. There is a large front desk with an AI receptionist blocking access to the rest of the building.',
    choices: [
        {text: 'Try to bribe receptionist to let you in', dest: 'bribe'},
        {text: 'Attempt to sneak past and hope nobody notices', dest: 'sneak'}
    ]
});

RoomMap.set('bribe', {
    img: 'lobby',
    music: 'aud_dark',
    text: 'You walk up to the desk, pull some cash out of your pocket, and smoothly slide some it onto the desk.<br><br> The AI receptionist looks expressionless at the $1.25 you just put onto the desk and promptly calls security.',
    choices: [
        {text: 'Run', dest: 'run'},
        {text: 'Surrender', dest: 'surrender'}
    ]
});

RoomMap.set('run', {
    img: 'lobby',
    music: 'aud_dark',
    text: 'You decide to run, but the doors have automatically locked behind you. You can see the security guards coming around the corner, and they don’t seem to be too happy.<br><br> There is a sudden electric shock in your left arm, and you wake up in a police holding cell.',
    choices: [
        {text: 'Game Over. Try Again?', dest: 'start'}
    ]
});

RoomMap.set('surrender', {
    img: 'lobby',
    music: 'aud_dark',
    text: 'You decide in a place like this that there’s no way to escape and just surrender. The security guards see that you are complacent and simply escort you out of the building.<br><br> \"Maybe I can try again,\" you think, but as you turn around you notice all the holographic signs around the building are now showing your face along with the text \“Do not allow entry to this individual.<br><br>\” No way you can sneak in now.',
    choices: [
        {text: 'Game Over. Try Again?', dest: 'start'}
    ]
});

RoomMap.set('sneak', {
    img: 'lobby',
    music: 'aud_dark',
    text: 'Somebody bumps into you as they walk by, totally oblivious to the world around them. You realize that everybody is to absorbed in their own business that there’s no way they would notice you.<br><br> You sneak past and manage to make it to some service elevators.',
    choices: [
        {text: 'Get in elevator', dest: 'elevator'}
    ]
});

RoomMap.set('elevator', {
    img: 'elevator',
    music: 'aud_dark',
    text: 'Once inside the elevator you see a massive list of 100 buttons.<br><br> \"This is going to be harder than I though,\" you think to yourself.<br><br> If you try to brute force this, you might be here all day!',
    choices: (()=>{
        let list = new Array(100);

        for (let i = 0; i < list.length; i++){
            list[i] = {text: (i + 1).toString(), dest: 'generic_floor'};
        }

        list[0].text = 'G';
        list[0].dest = 'sneak';
        list[13].dest = '14th_floor';
        list[99].text = 'Pen';
        list[99].dest = 'top_floor';

        return list;
    })()
});

RoomMap.set('generic_floor', {
    img: '14th_floor',
    music: 'aud_dark',
    text: 'You step out of the elevator and are faced with a row of doors in a dimly lit corridor.<br><br> Only way to find out what\'s behind them is to open them',
    choices: (()=>{
        let list = new Array(10);

        for (let i = 0; i < list.length; i++){
            list[i] = {text: (i + 1).toString(), dest: 'generic_room_generic_floor'}
        }

        list.unshift({text:'🠔', dest: 'elevator'});

        return list;
    })()
});

RoomMap.set('generic_room_generic_floor', {
    img: 'generic_room',
    music: 'aud_dark',
    text: 'The room seems to be mostly empty except for a large computer against the wall. It looks like some kind of large scale processing server or data storage mainframe.',
    choices: [
        {text: 'Go back and try another room', dest: 'generic_floor'},
        {text: 'Hack computer', dest: 'hack_generic'}
    ]
});

RoomMap.set('hack_generic', {
    img: 'generic_room',
    music: 'aud_dark',
    text: 'You start hacking into the computer, and with almost no effort at all you are in. Unfortunately as you dig through the files on the machine, there’s almost nothing of any use.<br><br> Suddenly you feel your hands being pulled behind your back and feel handcuffs being slapped on your wrists. You must triggered a silent alarm.',
    choices: [
        {text: 'Game over. Try again?', dest: 'start'}
    ]
});

RoomMap.set('14th_floor', {
    img: '14th_floor',
    music: 'aud_dark',
    text: RoomMap.get('generic_floor').text,
    choices: (()=>{
        let list = new Array(10);

        for (let i = 0; i < list.length; i++){
            list[i] = {text: (i + 1).toString(), dest: 'generic_room_14th_floor'};
        }

        list[7].dest = '8th_room';

        list.unshift({text:'🠔', dest: 'elevator'});

        return list;
    })()
});

RoomMap.set('generic_room_14th_floor', {
    img: 'generic_room',
    music: 'aud_dark',
    text: RoomMap.get('generic_room_generic_floor'),
    choices: [
        {text: 'Go back and try another room', dest: '14th_floor'},
        {text: 'Hack computer', dest: 'hack_generic'}
    ]
});

RoomMap.set('8th_room', {
    img: 'generic_room',
    music: 'aud_dark',
    text: RoomMap.get('generic_room_generic_floor'),
    choices: [
        {text: 'Go back and try another room', dest: '14th_floor'},
        {text: 'Hack computer', dest: 'hack_8th_room'}
    ]
});

RoomMap.set('hack_8th_room', {
    img: 'generic_room',
    music: 'aud_dark',
    text: 'You start hacking away at the computer. There seems to be quite a lot of resistance, but sooner or later you crack it wide open<br><br>The computer seems to handle all financials for Nova Corp. What will you do?',
    choices: [
        {text: 'Divert all funds to the people and the city, eliminating the Great Schism.', dest: 'altruist_ending'},
        {text: 'Divert all funds to you, making you the wealthiest person who has ever lived.', dest: 'rich_ending'},
        {text: 'Delete all funds, resetting the company and most of the city to square one.', dest: 'chaos_ending'}
    ]
});

RoomMap.set('altruist_ending', {
    img: 'rich_city',
    music: 'aud_appartment',
    text: 'A couple days have passed since you entered Nova Corp.The city hasn’t had much time to improve, but there is an atmosphere of hope for a better future  among it’s citizens as funds get distributed.<br><br>As you sit in your appartment, you realize your life probably isn’t going to change much. You should probably get to cleaning this place though.',
    choices: [
        {text: 'Play Again?', dest: 'start'}
    ]
});

RoomMap.set('rich_ending', {
    img: 'rich_you',
    music: 'aud_appartment',
    text: 'A couple of weeks have passed since you made yourself the richest human being to have ever lived. Everyone knows it was you, but Nova Corp. doesn’t have even a penny to thier name, how would they pay their lawyers to come after you? The city is slowly eating itself alive as well, as you removed the only source of structure the city had.<br><br>Too bad for them you think, as you take another sip of your drink, sitting on the beach of your new tropical country you purchased.',
    choices: [
        {text: 'Play Again?', dest: 'start'}
    ]
});

RoomMap.set('chaos_ending', {
    img: 'city_ruins',
    music: 'aud_dark',
    text: 'Even just hours after you managed to topple Nova Corp. the city is eating itself alive. The structural backbone that powered the city has collapsed for seemingly mysterious reasons, and the citizens are in panic.<br><br>You know the fires will smolder out one day, and that maybe restarting from the beginning is what this city needed. Only time will tell.',
    choices: [
        {text: 'Play Again?', dest: 'start'}
    ]
});

RoomMap.set('top_floor', {
    img: 'top_hallway',
    music: 'aud_dark',
    text: 'As the elevator reaches the top floor, the doors open and there is a long hallway lined with windows, and a pair of large double doors at the end.<br><br>The door appears to be locked.',
    choices: [
        {text: 'Attempt to climb out window and into office from outside.', dest: 'through_window'},
        {text: 'Try hacking the door.', dest: 'hack_door'}
    ]
});

RoomMap.set('hack_door', {
    img: 'top_hallway',
    music: 'aud_dark',
    text: 'You plug your modified smartphone up to the electronic door lock and start running penetration diagnostic subroutines. Suddenly your phone starts smoking and bolts of electricity.<br><br>One of them hits you and you wake up in a police holding cell.',
    choices: [
        {text: 'Game over. Try Again?', dest: 'start'}
    ]
});

RoomMap.set('through_window', {
    img: 'office',
    music: 'aud_dark',
    text: 'You climb out the window and out onto a small ledge. You can see the windows in the CEO’s office are open, so you climb inside.<br><br>Inside is a large oak desk with a computer, as well as a safe near the wall.',
    choices: [
        {text: 'Hack computer', dest: 'hack_office_comp'},
        {text: 'Hack safe', dest: 'hack_office_safe'},
        {text: 'Go back to elevator', dest: 'elevator'}
    ]
});

RoomMap.set('hack_office_comp', {
    img: 'office',
    music: 'aud_dark',
    text: 'You hack into the CEO\'s computer.<br><br>There’s not much on here other than some buisiness expense spreadsheets, and him sending emails to people bragging about things he recently bought.',
    choices: [
        {text: 'Try something else', dest: 'through_window'}
    ]
});

RoomMap.set('hack_office_safe', {
    img: 'office',
    music: 'aud_dark',
    text: 'You hook up your smartphone to the safe and start running penetration subroutines. You hear some whirring mechanical noises from inside the lock and a loud CLUNK.<br><br>The safe opens, but to your surprise there doesn’t seem to be anything inside.',
    choices: [
        {text: 'Try something else', dest: 'through_window'}
    ]
});

export default RoomMap;