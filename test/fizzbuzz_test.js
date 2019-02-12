const expect = require('chai').expect;
const fizzbuzz = require('../src/fizzbuzz')

describe('FIZZ BUZZ', function(){
    it('al enviar un numero que NO es divisible por 3, deberia retornar falso', function(){
        number = 1;
        resultFizz = fizzbuzz.ItisFizz(number);
        expect(false).equal(resultFizz);
    });

    it('al enviar un numero que es divisible por 3, deberia retornar verdadero', function(){
        number = 6;
        resultFizz = fizzbuzz.ItisFizz(number);
        expect(true).equal(resultFizz);
    });

    it('al enviar un numero que NO es divisible por 5, deberia retornar falso',function(){
        number = 8;
        resultBuzz = fizzbuzz.ItisBuzz(number);
        expect(false).equal(resultBuzz);
    });

    it('al enviar un numero que es divisible por 5, deberia retornar verdadedo',function(){
        number = 20;
        resultBuzz = fizzbuzz.ItisBuzz(number);
        expect(true).equal(resultBuzz);
    });
});