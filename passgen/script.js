const words = ["seat","pen","broad","vapor","ocean","red","plate","late",
"that","ring","swim","shown","path","law","list","hard","block",
"two","pupil","were","lot","pay","would","tired","dull","mud",
"sky","grew","ill","frame","sport","did","many","bee","bean",
"page","year","earth","trail","are","while","off","town","doing",
"size","steel","sale","swarm","put","zero","week","mill","past",
"aside","her","cent","box","fuel","black","those","map","sun",
"silk","shine","range","loud","fox","gate","slide","each","nails",
"flag","exist","door","luck","down","depth","press","crowd","poem","herd",
"drink","worry","dried","dig","new","rest","play","win","strong","boy","girl",
"man","woman","dead","grave","alive","blessed","error"]

function getPassword(){
    let length = document.getElementById('length').value;
    if(length ===''){
        length = 8;
    };

const includeLowercase = document.getElementById('includeLowercase').checked;
const includeUppercase = document.getElementById('includeUppercase').checked;
const includeSymbols = document.getElementById('includeSymbols').checked;
const includeNumbers = document.getElementById('includeNumbers').checked;

    let chars = "";
    if(includeLowercase) chars += 'abcdefghijklmnopqrstuvwxyz';
    if(includeUppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if(includeSymbols) chars += '!@#$%&?_';
    if(includeNumbers) chars += '0123456789';

    let password = "";
    for (let i=0; i<length; i++){
        password += chars.charAt(Math.floor(Math.random()*chars.length))
    }
    document.getElementById('password').value = password
}

function randomNumber(l){
    return Math.floor(Math.random()*1);
}

function randomWord(){
    const number = randomNumber(words.length);
    return words[number];
}