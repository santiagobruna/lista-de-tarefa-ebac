/*
    Capturar o nome da tarefa - ok
    ao clicar no botao/submeter - ok 
    adicionar o nome da tarefa a um elemento de lista - ok
* */
$(document).ready(function(){
    $('button').click(function(){
        $('form').slideDown();
    });

    $('form').on('submit', function(e) {
        e.preventDefault();
        const tarefaValue = $('#nome-tarefa').val();
        const novaTarefa =  $(`<li>${tarefaValue}</li>`);
        $(novaTarefa).appendTo('.container-lista ol');
        $('.container-lista').slideDown();
        $('#nome-tarefa').val('');
    });

     // Adicionar o efeito de riscar nos itens da lista ao clicar
     $('.container-lista ol').on('click', 'li', function() {
        $(this).css('text-decoration', 'line-through');
    });
});