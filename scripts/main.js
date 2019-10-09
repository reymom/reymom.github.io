let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/logo-reymon.png') {
        myImage.setAttribute ('src','images/logo-reymon2.png');
    } else {
        myImage.setAttribute ('src','images/logo-reymon.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('What is your name, pretty human?');
    if(!myName || myName === null) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'I can show you future, ' + myName
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
}   else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'I can show your future, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}

