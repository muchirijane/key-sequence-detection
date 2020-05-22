const pressed = [];
  const secretCode = 'javascript';
  window.addEventListener('keyup', (e)=>{
    //console.log(e.key)
    pressed.push(e.key);
    console.log(pressed);
    // -6 - 1 = -7 , 10 -6 = 4
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    if(pressed.join('').includes(secretCode)){
      console.log('DING DING!!');
      cornify_add();
    }
  });