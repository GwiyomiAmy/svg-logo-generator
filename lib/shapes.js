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
   }
  }
  