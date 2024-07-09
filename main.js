const form = document.getElementById('form-agenda');
const contato = [];
const telefone = [];
let linhas = '';



form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinhas();
    atualizaTabela();

})

function adicionaLinhas(){ 

    const inputNome = document.getElementById('nome-agenda');
    const inputTel = document.getElementById('numero-tel');

    if(contato.includes(inputNome.value)){ 
        alert(`O contato: ${inputNome.value}, já foi digitado`);
    } else{ 
        contato.push(inputNome.value); 
        telefone.push(parseFloat(inputNome.value)); 
       
        let linha ='<tr>'; 
        linha += `<td> ${inputNome.value}`; 
        linha += `<td> ${inputTel.value} </td>`; 
        linha += `</tr>`; 
        linhas += linha; 
    
    }

    inputNome.value = '';
    inputTel.value = ''; 

}

function atualizaTabela(){ 

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas; 
}
