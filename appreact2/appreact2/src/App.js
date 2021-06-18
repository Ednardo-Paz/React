import React from 'react';

const formFilds = [
  {
    id: 'nome',
    label: 'Nome',
    type: 'text',
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
  },
  {
    id: 'senha',
    label: 'Senha',
    type: 'password',
  },
  {
    id: 'rua',
    label: 'Rua',
    type: 'text',
  },
  {
    id: 'numero',
    label: 'Número',
    type: 'text',
  },
  {
    id: 'bairro',
    label: 'Bairro',
    type: 'text',
  },
  {
    id: 'cidade',
    label: 'Cidade',
    type: 'text',
  },
  {
    id: 'estado',
    label: 'Estado',
    type: 'text',
  },
];


const App = () => {
  const [form, setForm] = React.useState(formFilds.reduce((acc, fild) => {

    return {
      ...acc,
      [fild.id]: ''
    }
  }, {}));
  const [response, setResponse] = React.useState(null);
  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value })
  }

  function handleSubmit (event) {
    event.preventDefault();
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify(form)
    }).then((response) => {
      setResponse(response)
    })
  }


  return (
    <form onSubmit={handleSubmit}>
      {formFilds.map(({id, label, type}) => (
        <div key={id}>
          <label htmlFor={id}>{label}</label>
          <input type={type} id={id} value={form[id]} onChange={handleChange} />
        </div>
      ))}
      {response && response.ok && <p>Formulário enviado.</p>}
      <button>Enviar</button>
    </form>
  );
};

export default App;
