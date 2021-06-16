
import React from 'react'
import Header from './Header'
import Home from './Home'
import Prod from './Prod'

const App = () => {
  const { pathname } = window.location;

  let Pagina = Prod;
  if(pathname === '/produtos') {
    Pagina = Prod
  } else {
    Pagina = Home
  }

  return (
    <div>
     <Header />
      <Pagina />
      
      
    </div>
  )
}

export default App




// import React from 'react'
// import Form from './Form/Form'



// const App = () => {
//   return (
//     <div>
//       <Form />
//     </div>
//   )
// }

// export default App




// import React from 'react';
// import Form from './Form/Form';
// import Footer from './Footer';
// import Form from './Form/Form';
// import Header from './Header';



// const App = () => {
//   return (
//     <div>
//       <Form />
//     </div>
//   )
// }

// export default App



// const Titulo = ({cor, texto, children}) => {

//   return <h1 style={{color: cor}}>{texto}, { children}</h1>

// };

// const App = () => {
//   return (
//     <div>
//       <Titulo cor="red" texto="Meu tituto"> Isso é o childeren </Titulo>    
//       <Titulo cor="blue" texto="Meu tituto 2" />    
//     </div>
//   )
// }

// export default App



 // const App = () => { 
//   return (
//     <>
//       <Header />
//       <Form />
//       <Footer />
//     </>
//   );
// };
// export default App;


// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
// const luana = {
//   cliente: 'Luana',
//   idade: 27,
//   compras: [
//     { nome: 'Notebook', preco: 'R$ 2500' },
//     { nome: 'Geladeira', preco: 'R$ 3000' },
//     { nome: 'Smartphone', preco: 'R$ 1500' },
//   ],
//   ativa: true,
// };

// const mario = {
//   cliente: 'Mario',
//   idade: 31,
//   compras: [
//     { nome: 'Notebook', preco: 'R$ 2500' },
//     { nome: 'Geladeira', preco: 'R$ 3000' },
//     { nome: 'Smartphone', preco: 'R$ 1500' },
//     { nome: 'Guitarra', preco: 'R$ 3500' },
//   ],
//   ativa: false,
// };
//   const dados = luana;

//   const total = dados.compras.map((item) => +item.preco.replace(`R$`, ``)).reduce((a,b) => a + b)
//   console.log(total)

//   return (
//     <div>
//       <p>Nome: {dados.cliente}</p>
//       <p>Idade: {dados.idade}</p>
//       <p>
//         Situação: {' '}
//         <span style={{color: dados.ativa? 'green' : 'red'}}>{dados.ativa ? 'Ativa' : 'Inativa'}</span>{' '}
//       </p>
//       <p>Total: R${total}</p>
//       {total > 10000 && <p> Você está gastando muito.</p>}
//     </div>
//   );
// };
// const livros = [
//   { nome: 'A Game of Thrones', ano: 1996 },
//   { nome: 'A Clash of Kings', ano: 1998 },
//   { nome: 'A Storm of Swords', ano: 2000 },
// ];

//  <ul>

//    {livros
//    .filter((livro) => livro.ano >= 1998)
//    .map((livro) => (
//      <li key={livro.nome}>{livro.nome}</li>
//    )) }
//  </ul>

// const App = () => {

//   return;
// };
// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
