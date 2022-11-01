

let sum = (arr,total1)=>{
    let total=0
    console.log(arr)

    if(arr.length>1){
       
       total =total + arr.pop()
       sum(arr,total)
    }else if(arr.length==1){
        console.log(total1+arr[0])
       return total1+arr[0]
        
    }
   
}  


let arr=[1,2,3,4]
console.log(sum(arr))