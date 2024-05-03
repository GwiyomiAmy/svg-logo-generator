class Svg {
   constructor(){
      this.version = "1.1";
      this.width = "300",
      this.height = "200";
      this.xmlns = "http://www.w3.org/2000/svg"
   }
  
   render() {
      return `<svg version=${this.version} width="300" height="200" xmlns="http://www.w3.org/2000/svg">`
   };
}

class Circle {
   constructor(text, tcolor, scolor){
      this.text = text;
      this.tcolor = tcolor;
      this.scolor = scolor;
  }
  render (){
   return `<circle cx="150" cy="100" r="80" fill=${this.scolor}/><text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.tcolor}>${this.text}</text></svg>`
   }
  }
  
  class Triangle {
   constructor(text, tcolor, scolor){
      this.text = text;
      this.tcolor = tcolor;
      this.scolor = scolor;
  }
  render (){
   return `<polygon points="150, 18 144, 186 56, 182" fill=${this.scolor}/><text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.tcolor}>${this.text}</text></svg>`
   }
  }

  class Square {
   constructor(text, tcolor, scolor){
      this.text = text;
      this.tcolor = tcolor;
      this.scolor = scolor;
  }
  render (){
   return `<rect x="90" y="40" width="120" height="120" fill=${this.scolor}/><text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.tcolor}>${this.text}</text></svg>`
   }
  }