console.log("Hello World");
const GAME2POSIBILITIES = [[0,0], [0,1], [0,2], [1,0], [1,1], [1,2], [2,0], [2,1], [2,2]];

var currentposibles = GAME2POSIBILITIES;
var hints = [];
function generatePossibleHints(guess, checker) {
    // If you don't include uncheckedChecker, 0,0 and 0,1 will return
    // 1,0.
    var uncheckedChecker = checker;
    var hint = [];
    for (let slot = 0; slot<2; slot++) {
        // Check for black
        if (guess[slot]==uncheckedChecker[slot]) {
            hint.push(1);
        } /* Now we check for white */ else if (uncheckedChecker.includes(guess[slot])) {
            hint.push(0);            
        }
    }
    return hint;
}
