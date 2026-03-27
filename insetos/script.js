const atletas = [
    {
        nome: "Besouro Rinoceronte",
        esporte: "Levantamento de Peso",
        desc: "Consegue levantar 850 vezes o próprio peso. Um monstro!",
        emoji: "🪲"
    },
    {
        nome: "Gafanhoto",
        esporte: "Salto em Distância",
        desc: "Salta até 20 vezes o comprimento do seu próprio corpo.",
        emoji: "🦗"
    },
    {
        nome: "Libélula",
        esporte: "Voo de Velocidade",
        desc: "Atinge quase 60km/h e manobra como um caça.",
        emoji: "🚁"
    },
    {
        nome: "Pulga",
        esporte: "Salto em Altura",
        desc: "Se fosse humana, saltaria por cima da Torre Eiffel.",
        emoji: "🛹"
    }
];

const btn = document.getElementById('btn-treinar');
const nomeTxt = document.getElementById('atleta-nome');
const imgDiv = document.getElementById('atleta-img');
const descTxt = document.getElementById('atleta-desc');

btn.addEventListener('click', () => {
    const sorteio = atletas[Math.floor(Math.random() * atletas.length)];
    
    nomeTxt.innerText = sorteio.nome;
    imgDiv.innerText = sorteio.emoji;
    descTxt.innerText = `${sorteio.esporte}: ${sorteio.desc}`;
});