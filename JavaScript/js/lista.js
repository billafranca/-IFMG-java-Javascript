lista = [];
let novoItem = prompt("Digite um item: "
);
while(novoItem != "-"){
    lista.push(novoItem);
    novoItem = prompt("Digite um item: ");
}

   if (lista.length == 0){
    console.log("a lista está vazia!");
   }else{
    console.log("você deveria adicionar itens a essa lista: ")
   }
   for(let i =0; i<lista.length; i++){
      console.log(lista[i]);
   }