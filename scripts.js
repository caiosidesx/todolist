/*
Lista de tarefas (Lógica de Programação)
    [x] Saber quando o botão foi clicado
    [x] Pegar o texto do Input
    [x] Colocar esse texto na Tela
    [x] Deletar a tarefa da tela (Quando eu clicar no X)
*/

function adicionarTarefa(){
    let valorDoInput = document.querySelector('input').value

    let li = document.createElement('li')
    li.innerHTML = valorDoInput + '<span onclick="deletarTarefa(this)">❌</span>'

    document.querySelector('ul').appendChild(li)

    document.querySelector('input').value = ''
}

function deletarTarefa(li){
    li.parentElement.remove()
    
}