import { breakingRecords } from './breakingRecords/breakingRecords';

/**
  FUNCION MAIN DONDE MANDAREMOS A LLAMAR TODAS NUETRAS FUNCIONES PARA PROBAR LOS CODIGOS 
 */
function main() {
  console.log('---------- Respuesta al HR----------\n');

  const textArray = [10, 5, 20, 20, 4, 5, 2, 25, 1];
  const res = breakingRecords(textArray);
  console.log(res);
}
main();
