

function main(){

    const fs = require("fs");
 
    var input = process.argv; //Recibe los inputs que le lleguen por consola
 
    var allfile = fs.readFileSync(input[2], 'utf8'); //el input en la posicion 2 corresponde al nombre del archivo
    var splitter = allfile.split("\n");

    // Map es la matriz, cuyos vectores son las filas del archivo leido
    var map = [];
    var  filePos = [];
    splitter.pop();
    for(var i = 0; i < splitter.length; i++){
        if(splitter[i].length!=3){
           map.push(splitter[i].split("")); //Se guardan las filas de la matriz
        }
     }
     
     // Goals es las X del mapa, es decir, los lugares donde deben ir estas para ser solucion
     var goals = [];
  
     for(var i = 0; i < map.length; i++){
        for(var j = 0; j < map.length; j++){
           if(map[i][j]=="X"){
              goals.push([i, j]); //Se guardan los objetivos
           }
        }
     }
     
     for(var i=0; i< map.length; i++){
         if((parseInt(map[i][0]) !=0 && !isNaN(parseInt(map[i][0])))){
            //console.log(map[i])
            filePos.push([parseInt(map[i][0]), parseInt(map[i][2])])
         }
         var [FPhead, ...FPrest] = filePos
     }
     console.log("map\n",map) //GOOD
     console.log("goals\n", goals) //GOOD
     console.log("boxes\n", FPrest) //GOOD
     console.log("Hako\n",FPhead) //GOOD
   
}
main()
