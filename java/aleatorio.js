const nomes = ["Larissa", "Gabrieli", "Eduardo", "Angela", "Rodrigo", "Poliana" ]
export function aleatorio (lista){
    const posicao = Math.florr(Math.random()*lista.lenght);
    return lista [posicao];
}
export const nome = aleatorio(nomes)