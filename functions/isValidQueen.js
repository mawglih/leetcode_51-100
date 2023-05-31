/**
 * x and y current position of queen, n number of rows and columns on the board
 */

const isValid = (x, y, n) => {
    for(let i = 0; i < n; n ++) { // i row #
        for (let j = 0; j < n; j++) { // j column #
            if(i === x || j === y) return false;
            else if( Math.abs(i - j) === Math.abs(x - y)) return false;
        }
    }
    return true;
}