var slideInterval = 3500;
function getFigures() {
    var section = document.getElementById('carousel');
    return section.getElementsByTagName('figure');
}

function moveForward() {
    var result;
    var figures = getFigures();
    function getNextIndex(currIndex) {
        if (currIndex === figures.length) {
            result = 0;
        }
        else {
            result = currIndex+1;
        }
        return result;
    }
    for (var i=0; i < figures.length; i++ ) {
        if (figures[i].classList[0] === 'visible') {
            var iN = getNextIndex(i);
            figures[i].classList[0] = null;
            figures[iN].classList[0] = 'visible';
            break;
        }
    }
    setTimeout(moveForward(), slideInterval);
}

function startPlayback() {
    setTimeout(moveForward(), slideInterval);
}

