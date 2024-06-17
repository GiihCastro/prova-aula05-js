
let tarefas = [];


function adicionarTarefa(descricao) {
  const novaTarefa = {
    id: Date.now(), // Um identificador único para a tarefa
    descricao: descricao,
    completa: false
  };
  tarefas.push(novaTarefa);
  console.log(`Tarefa "${descricao}" adicionada com sucesso!`);
  renderizarTarefas();
}


function removerTarefa(id) {
  tarefas = tarefas.filter(tarefa => tarefa.id !== id);
  console.log(`Tarefa com id ${id} removida com sucesso!`);
  renderizarTarefas();
}


function atualizarTarefa(id, novaDescricao) {
  const tarefa = tarefas.find(tarefa => tarefa.id === id);
  if (tarefa) {
    tarefa.descricao = novaDescricao;
    console.log(`Tarefa com id ${id} atualizada para "${novaDescricao}"!`);
    renderizarTarefas();
  } else {
    console.log(`Tarefa com id ${id} não encontrada.`);
  }
}


function renderizarTarefas() {
  const listaTarefas = document.getElementById('task-list');
  listaTarefas.innerHTML = '';
  tarefas.forEach(tarefa => {
    const li = document.createElement('li');
    li.className = tarefa.completa ? 'complete' : '';
    li.innerHTML = `
      <span>${tarefa.descricao}</span>
      <div>
        <button onclick="removerTarefa(${tarefa.id})">Remover</button>
        <button id="atualizar" onclick="atualizarTarefaPrompt(${tarefa.id})">Atualizar</button>
      </div>
    `;
    listaTarefas.appendChild(li);
  });
}


document.getElementById('form-add').addEventListener('submit', function(event) {
  event.preventDefault();
  const descricao = document.getElementById('new-task').value;
  adicionarTarefa(descricao);
  document.getElementById('new-task').value = '';
});


function atualizarTarefaPrompt(id) {
  const novaDescricao = prompt('Atualize a descrição da tarefa:');
  if (novaDescricao) {
    atualizarTarefa(id, novaDescricao);
  }
}


adicionarTarefa('Comprar leite');
adicionarTarefa('Pagar as contas');