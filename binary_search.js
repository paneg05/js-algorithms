let pesquisa_binaria = (lista,item)=>{
    let iteracoes=0
    let baixo = 0
    let alto = lista.length-1
    while(baixo<=alto){
        meio= Math.ceil((baixo+alto)/2) 
        
        chute = lista[meio]
        if(chute==item){
            return `item: ${chute} encontrado no index: ${meio} com ${iteracoes} tentativas`       }
        if(chute>item){
            alto=meio-1
        }else{
            baixo=meio+1
        }
        iteracoes++
    }

    return `item: ${item} nao encontrado na lista`
}

let lista=[]

//teste 
x=50000000

for(let i=0;i<x;i++){

    i==0 ? lista[i] =Math.ceil(Math.random()*2)  : lista[i]=Math.ceil((Math.random()*2)+lista[(i-1)]) 
    
}
//teste


console.log(pesquisa_binaria(lista,Math.ceil(Math.random()*x)))