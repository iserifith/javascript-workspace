
function display(height, whichAllign){

    let whiteSpace = ' ';
    let stars = [String.fromCharCode(9733)]; // [★]
    
    for (var i = 1; i < height; i++){
        stars.push(stars[i - 1] + stars[i - 1]);
        whiteSpace += whiteSpace;
    }

    if(whichAllign === 'right'){
        for (i = 0; i < height; i++){
            stars[i] = whiteSpace.substr(stars[i].length, whiteSpace.length - i) + stars[i];
        }
    }
    return stars.join('\r\n');
}

console.log(display(8, 'right'));
