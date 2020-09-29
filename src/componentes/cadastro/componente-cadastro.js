import eventoEnvia from "./cadastro-clientes"

const inicializaCadastro = () => {

const form = document.createElement('form');

const cadastro = `
<div class="container" >
  <div class="form-group">
    <label>CPF</label>
    <input type="number" class="form-control" data-cpf placeholder="Digite seu CPF aqui" />
  </div>
  <div class="form-group">
    <label>Nome</label>
    <input type="text" class="form-control" data-nome placeholder="Digite seu nome aqui" />
  </div>
  <button type="submit" class="btn btn-primary">Enviar</button>
</div>
`;

form.innerHTML = cadastro;

  eventoEnvia(form);
  return form;
}

export default inicializaCadastro
// Transformamos o arquivo HTML de cadastro de cliente em um componente;
// Foi necessário renomear o arquivo "cadastro-cliente.htlm" para "componente-cadastro.js" 
// e remover a parte de HTML que já existe no arquivo "clientes.html";