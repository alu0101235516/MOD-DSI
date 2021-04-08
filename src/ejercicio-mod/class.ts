import {inter} from './inter';

export class Lifo<T> implements inter<T> {
  /**
     * Constructor de la clase
     */
  constructor(public pilaVec: T[]) {
  }

  public getpila() {
    return this.pilaVec;
  }

  /**
   * Funcion para añadir un nuevo elemento a la pila
   * @param elemento el elemento que quieremos añadir
   */

  push(elemento: T): void {
    this.pilaVec.push(elemento);
  }

  /**
   * FUncion para sacar el ultimo elemento de nuestra pila
   */

  pop(): void {
    this.pilaVec.pop();
  }

  /**
   * Función para retornar el ultimo elemento instanciado en nuestra pila
   * @returns dicho elemento
   */

  pseek(): T {
    return this.pilaVec[this.pilaVec.length-1];
  }

  /**
   * Funcion para comprobar el tamaño de la pila
   * @returns el tamaño de la pila
   */

  size(): number {
    return this.pilaVec.length;
  }

  /**
   * Funcion para imprimir por pantalla la pila
   */

  print(): void {
    console.log(this.pilaVec);
  }
}
