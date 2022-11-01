const quickSort = (arr)=>{
    if(arr.length<2){
        return arr 
    }else{
        let menores = []
        let maiores = []
        let pivo =arr[arr.length-1]
        for(let i=0;i<(arr.length-1);i++){
            if(arr[i]<=pivo){
                menores.push(arr[i])
            }else{
                maiores.push(arr[i])
            }
        }
        return [...quickSort(menores),pivo,...quickSort(maiores)]
    }
}




