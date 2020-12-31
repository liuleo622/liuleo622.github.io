let myImage = document.querySelector('img');

myImage.onclick = function () {
    mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/fire-fox.jpg') {
        myImage.setAttribute('src','images/fire-fox2.png');
    } else {
        myImage.setAttribute('src','images/fire-fox.jpg');
    }
}

let myBotton = document.querySelector('button');
let myHead = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字');
    localStorage.setItem('name',myName);
    myHead.textContent = 'Mozilla 酷毙了,' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHead.textContent = 'Mozilla 酷毙了,' + storedName;
}

myBotton.onclick = function() {
    let aName = localStorage.getItem('name');
    setUserName();
    let bName = localStorage.getItem('name');
    if(!bName || bName==='null'){
        localStorage.setItem('name',aName)
        myHead.textContent = 'Mozilla 酷毙了,' + aName;
    }
}