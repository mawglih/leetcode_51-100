/**
 * Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.
You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.
Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right. For the last line of text, it should be left-justified, and no extra space is inserted between words.

Note:
A word is defined as a character sequence consisting of non-space characters only.
Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
The input array words contains at least one word.
 */

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    let output = [];
    let line = [words[0]];
    let leftSpace = maxWidth - words[0].length;
    for(let i = 1; i < words.length; i++) {
        let word = words[i];
        if(leftSpace >= word.length + 1) {
            line.push(word);
            leftSpace -= word.length + 1;
        } else {
            output.push(justifyLeft(line, leftSpace));
            line = [word];
            leftSpace = maxWidth - word.length;
        }
    }
    if(line.length) {
        let lastLine = line.join(' ');
        lastLine += ' '.repeat(maxWidth - lastLine.length);
        output.push(lastLine);
    }
    
    return output;
};

function justifyLeft(line, space) {
    if(line.length === 1) {
        return line[0] + ' '.repeat(space)
    } 
    let i = 0;
    while (space > 0) {
        line[i] += ' ';
        i = (i + 1) % (line.length - 1);
        space--;
    }
    return line.join(' ');
};

const words = ["This", "is", "an", "example", "of", "text", "justification."];

console.log(fullJustify(words, 15));

// runtime 68 ms
// memory 42.5 MB
