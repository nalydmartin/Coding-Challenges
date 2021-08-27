function alphabetPosition(text) {
  
    text = text.toLowerCase();
    
    let new_text = "";
  
    for(i in text) {
  
      if(text[i] in alpha) {
        // console.log("This is i: " + i);
        // console.log(text[i]);
        // console.log("Alphabet position: " + alpha[text[i]])
        // console.log(typeof alpha[text[i]])
        new_text = new_text.concat(alpha[text[i]], " ");
      }
  
      }
    new_text = new_text.trim()
    return new_text;
    }
  
  const alpha = {
    'a':'1',
    'b':'2',
    'c':'3',
    'd':'4',
    'e':'5',
    'f':'6',
    'g':'7',
    'h':'8',
    'i':'9',
    'j':'10',
    'k':'11',
    'l':'12',
    'm':'13',
    'n':'14',
    'o':'15',
    'p':'16',
    'q':'17',
    'r':'18',
    's':'19',
    't':'20',
    'u':'21',
    'v':'22',
    'w':'23',
    'x':'24',
    'y':'25',
    'z':'26'}
  
  
    console.log(alphabetPosition("The sunset sets at twelve o' clock."));