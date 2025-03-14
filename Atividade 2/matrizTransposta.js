/* A função deve receber uma matriz (array de arrays) A e imprimir a matriz original e a versão transposta; A imagem abaixo aparenta um exemplo de transposição de matriz:

   [1, 2],          
a= [3, 4],    ===>  at=  [ 1  3  5 ]
   [5, 6]                [ 2  4  6 ]
 
 */

   function transporMatriz(A){
      console.log('Matriz\n');
      for(let i = 0; i <A.length; i++){
         let linha = "";
         for(let j = 0; j < A[i].length; j++){
            linha += A[i][j] + "\t";
         }
         console.log(linha);
      }

      console.log('Transporta\n');
      for(let j = 0; j < A[0].length; j++){
         let linha = "";
         for(let i = 0; i < A.length; i++){
            linha += A[i][j] + "\t";
         }
         console.log(linha);
      }
   }

   let matriz = [
      [1, 2],
      [3, 4],
      [5, 6]
   ];
   
   transporMatriz(matriz);

