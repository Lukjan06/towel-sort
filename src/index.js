
// You should implement your task here.

module.exports = function towelSort (matrix) {

   let result=[];
   if (arguments.length === 0) {
        return [];
    }

    for(let i = 0; i < matrix.length; i++) {
           
        for(let r = 0; r < matrix[i].length; r++) {
            if(i % 2 === 0) {
                result.push(matrix[i][r]);
                
            
            }
            else if (i % 2 !== 0){ 
                result.push(matrix[i][matrix[i].length-1-r])
            }  
    }
          
   
}
   return result;
}


//доделать при пустом параметре ф-ции выводить []
  
