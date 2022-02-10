const customname = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
    const random = math.floor(math.random()*array.length);
    return array[random];
}