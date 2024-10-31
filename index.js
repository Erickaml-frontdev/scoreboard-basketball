let homePts = 0
let guestPts = 0
function home1Points(){
    homePts +=1
    document.getElementById("score-home") .textContent = homePts;
}
function home2Points(){
    homePts +=2
    document.getElementById("score-home") .textContent = homePts;
}
function home3Points(){
    homePts +=3
    document.getElementById("score-home") .textContent = homePts;
}

function guest1Points(){
    guestPts +=1
    document.getElementById("score-guest") .textContent = guestPts;
}
function guest2Points(){
    guestPts +=2
    document.getElementById("score-guest") .textContent = guestPts;
}
function guest3Points(){
    guestPts +=3
    document.getElementById("score-guest") .textContent = guestPts;
}

