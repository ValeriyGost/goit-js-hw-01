function getElementWidth (content, padding, border){
    const contentUserWidth = parseFloat(content);
    const paddingUser = parseFloat(padding) * 2;
    const borderUser = parseFloat(border) * 2;
    return contentUserWidth + paddingUser + borderUser;
}



console.log(getElementWidth("50px", "8px", "4px")); 
console.log(getElementWidth("60px", "12px", "8.5px")); 
console.log(getElementWidth("200px", "0px", "0px")); 