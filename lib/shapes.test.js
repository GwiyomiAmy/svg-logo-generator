const Triangle = require('./Triangle');
const Circle = require('./Circle');
const Square = require('./Square');

describe('Triangle', () => {
   describe('Text Length', () => {
      it('should throw an error when the text length is more than 3', () => {
         const cb = () => new Triangle('AAAA');
         const err = new Error('Letters must not be more than 3 characters long.');
         expect(cb).toThrowError(err);
      })
   })
})

describe('Circle', () => {
   describe('Text Length', () => {
      it('should throw an error when the text length is more than 3', () => {
         const cb = () => new Triangle('AAAA');
         const err = new Error('Letters must not be more than 3 characters long.');
         expect(cb).toThrowError(err);
      })
   })
})

describe('Square', () => {
   describe('Text Length', () => {
      it('should throw an error when the text length is more than 3', () => {
         const cb = () => new Triangle('AAAA');
         const err = new Error('Letters must not be more than 3 characters long.');
         expect(cb).toThrowError(err);
      })
   })
})