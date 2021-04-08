/**
 * Interfaz generica para la conversión
 */

export interface inter<T> {
   pilaVec: T[];
/**
 * Metodos de la interfaz
 */

    push(elemento: T): void;
    pop(): void;
    pseek(): T;
    size(): number;
    print(): void;

}
