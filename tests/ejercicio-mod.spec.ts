import 'mocha';
import {expect} from 'chai';
import {Lifo} from '../src/ejercicio-mod/class';

describe(`EJ MOD - LIFO`, () => {
  const pilaPrueba = new Lifo([2, 3, 2, 1, 4, 5]);

  describe(`Correcto funcionamiento de los métodos`, () => {
    it('Método para el push()', () => {
      pilaPrueba.push(3);
      expect(pilaPrueba.getpila()).to.deep.equal([2, 3, 2, 1, 4, 5, 3]);
    });
    it('Método para el pop()', () => {
      pilaPrueba.pop();
      expect(pilaPrueba.getpila()).to.deep.equal([2, 3, 2, 1, 4, 5]);
    });
    it('Método para el pseek()', () => {
      expect(pilaPrueba.pseek()).to.be.equal(5);
    });
    it('Método para el size()', () => {
      expect(pilaPrueba.size()).to.be.equal(6);
    });
    it('Método para el print()', () => {
      pilaPrueba.print();
    });
  });
});
