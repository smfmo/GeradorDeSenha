function gerarSenha(length = 12){
    const letrasAleatorias = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012345678';
    let senha = '';

    for(let i = 0; i < length; i++){
        const gerador = Math.floor(Math.random() * letrasAleatorias.length);
        senha += letrasAleatorias[gerador];
    }
    document.getElementById('senha').textContent = senha;
}