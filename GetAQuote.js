/* This code works with a web plugin called "Nightbot".
*  Nightbot can parse pure Javascript code and fetch urls
*  Nightbot cannot import modules or call more than one function
*  
*  The code is structured to take a String and return a string(quote).
*  Possible returns: corresponding quote by name, corresponding quote by index, random quote from a pool, random quote.
*
*  Nightbot command to use this code:
*  !addcom !myCommandName $(eval q = `$(query)`; $(urlfetch json https://pastebin.com/raw/hm3WWdj7))
*/

let response = '';
{
    /* quote collections */
    const arr = ["No.","Yes.",
                "That makes two of us.","I approve.","Who has taught you these lies?","Do you dare challenge me?",

                "Good to have you.","Welcome to the battle.","Spartan. It's comforting to see you.",
                "We are victorious.","This time, we triumph.","Now that was a battle to remember.",
                "Well done, Spartan.",

                "The enemy is THAT way. Pay attention to the fray!","This madness must end!",
                "What foolishness is this?","Don't be stupid, Demon!",
                "Stop staring at me... The hell is wrong with you.","You shot me, fool!",

                "We must be careful. There are no second chances here.","I hope you are ready for a fight.","Do you require aid?",
                "We are under attack!","Weapons fire! Do you hear?","Their flanks are weak!",
                "I am already dead.","I am sorry, Spartan.","Forgive my error.",
                "Have I... Misunderstood some human custom?",

                "Demon!","The demon is here!?","Caution, a sniper.","Phantom!","The Banshees will return. Hurry, back into the jungle!",
                "There are some powerful weapons we've not yet used...","Grenades! Blow them to bits!","The beast is using a hammer!",
                "It's going to explode.","It has been... Eliminated.",

                "Walk if you wish. I'm sure you know what you are doing.","Circumstances made strange allies of us.",
                "Close. The stench is fresh.","Light the ring. Finish the fight.","Throwing a molotav.",

                "Accursed parasite! Rise up and I will kill you! Again and again!","What is it? More Brutes?",
                "Were it so easy.","Kill me or release me, parasite. But do not waste my time with talk!",
                "And so, you must be silenced.","We trade one villain for another.",
                "I have had many names in this long war. The humans knew me as 'Destroyer'. In the Covenant, I was Supreme Commander. The Prophets named me... Arbiter. And your Master Chief calls me... friend. How well do you know your friend, human? And what will you call me when you learn the truth of what I have done?"];

    const dict = {no:0, yes:1,
                agrees:2, agrees2:3, disagrees:4, disagrees2:5,

                hi:6, hi2:7, hi3:8,
                win:9, win2:10, win3:11,
                rally:12,

                angry:13, angry2:14, 
                angry3:15, angry4:16,

                warn:19, warn2:20, aid:21,
                alert:22, alert2:23, flank:24,
                dead:25, sorry:26, sorry2:27,
                huh:28,

                demon:29, demon2:30, snipers:31, phantom:32, banshees:33, 
                weapons:34, grenades:35, hammer:36,
                explode:37, gone:38,
                
                walk:39, allies:40,
                stench:41, halo3:42,

                flood:44, worse:45,
                easy:46, spam:47,
                silence:48, trade:49,
                lore:50};

    
    /* support function */
    let responsePool = (q) =>{
        let randQuote = -1;
        let quotes = [];
        switch(q) {
            case 'predict':
            quotes = [0,1,46,26,10];
                randQuote = quotes[Math.floor(Math.random() * 5)];
                break;
            case 'clap':
                quotes = [9,10,11,12];
                randQuote = quotes[Math.floor(Math.random() * 4)];
                break;
        }
        return randQuote;
    };

    /* logic */
    var input = q;
    /* if 'input' is empty - default to random int */
    if (input === "" | input === " ") {
    input = Math.floor(Math.random()*arr.length);
    }
    /* if 'input' is string - limit to one word */
    else if (isNaN(input)) {
        input = input.split(" ")[0].toLowerCase();
        const check = responsePool(input);
        if (check > -1){
            input = check;
        }
        /* if 'input' is undefined - default to random int */
        else if (dict[input] === undefined & input != "commands") {
            input = Math.floor(Math.random()*arr.length);
        }
    }
    /* if 'input' is int and out of range - default to zero */
    else if (!isNaN(input) & (input >= arr.length | input < 0)) {
        input = 0;
    }


    /* build response */
    if (input == "commands") {
        response = Object.keys(dict).join(" ").toString();
    } else {
        isNaN(input)?line = arr[dict[input]] : line = arr[input];
        response = `/me '${line}' - The Arbiter`;
    }
}

response;