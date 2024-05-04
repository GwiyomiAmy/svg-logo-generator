class Square {
   constructor(text, tcolor, scolor){
      if (text.length > 3) {
         throw new Error('Letters must not be more than 3 characters long.');
       }
      this.text = text;
      this.tcolor = tcolor;
      this.scolor = scolor;
   }
   render (){
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="${this.scolor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.tcolor}">${this.text}</text></svg>`
   }
}

module.exports = Square;
