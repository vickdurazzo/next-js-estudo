export const authService = {
async login({ username, password }) {
  return fetch('http://localhost:4000/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  }).then( async (respostaDoServidor) =>{
    if(!respostaDoServidor.ok) throw new Error('Usuário ou senha inválidos!')
    const body = await respostaDoServidor.json();
    console.log(respostaDoServidor);
  })

 
}
}