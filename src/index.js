
// You should implement your task here.

module.exports = function towelSort (matrix) {

   let result=[];
    /*if (matrix.length === 0  && matrix === [] || matrix !==[]) {
        return [];}*/

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



  
