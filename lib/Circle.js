class Circle {
   constructor(text, tcolor, scolor){
      this.text = text;
      this.tcolor = tcolor;
      this.scolor = scolor;
  }
   render (){
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.scolor}"/><text x="145" y="125" font-size="60" text-anchor="middle" fill="${this.tcolor}">${this.text}</text></svg>`
   }
}

module.exports = Circle;