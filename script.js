
const elementos = [
    {simbolo: "H", nome: "Hidrogênio"},
    {simbolo: "He", nome: "Hélio"},
    {simbolo: "Li", nome: "Lítio"},
    {simbolo: "Be", nome: "Berílio"},
    {simbolo: "B", nome: "Boro"},
    {simbolo: "C", nome: "Carbono"},
    {simbolo: "N", nome: "Nitrogênio"},
    {simbolo: "O", nome: "Oxigênio"},
    {simbolo: "F", nome: "Flúor"},
    {simbolo: "Ne", nome: "Neônio"},
    {simbolo: "Na", nome: "Sódio"},
    {simbolo: "Mg", nome: "Magnésio"},
    {simbolo: "Al", nome: "Alumínio"},
    {simbolo: "Si", nome: "Silício"},
    {simbolo: "P", nome: "Fósforo"},
    {simbolo: "S", nome: "Enxofre"},
    {simbolo: "Cl", nome: "Cloro"},
    {simbolo: "Ar", nome: "Argônio"},
    {simbolo: "K", nome: "Potássio"},
    {simbolo: "Ca", nome: "Cálcio"},
    {simbolo: "Sc", nome: "Escândio"},
    {simbolo: "Ti", nome: "Titânio"},
    {simbolo: "V", nome: "Vanádio"},
    {simbolo: "Cr", nome: "Crômio"},
    {simbolo: "Mn", nome: "Manganês"},
    {simbolo: "Fe", nome: "Ferro"},
    {simbolo: "Co", nome: "Cobalto"},
    {simbolo: "Ni", nome: "Níquel"},
    {simbolo: "Cu", nome: "Cobre"},
    {simbolo: "Zn", nome: "Zinco"},
    {simbolo: "Ga", nome: "Gálio"},
    {simbolo: "Ge", nome: "Germânio"},
    {simbolo: "As", nome: "Arsênio"},
    {simbolo: "Se", nome: "Selênio"},
    {simbolo: "Br", nome: "Bromo"},
    {simbolo: "Kr", nome: "Criptônio"},
    {simbolo: "Rb", nome: "Rubídio"},
    {simbolo: "Sr", nome: "Estrôncio"},
    {simbolo: "Y", nome: "Ítrio"},
    {simbolo: "Zr", nome: "Zircônio"},
    {simbolo: "Nb", nome: "Nióbio"},
    {simbolo: "Mo", nome: "Molibdênio"},
    {simbolo: "Tc", nome: "Tecnécio"},
    {simbolo: "Ru", nome: "Rutênio"},
    {simbolo: "Rh", nome: "Ródio"},
    {simbolo: "Pd", nome: "Paládio"},
    {simbolo: "Ag", nome: "Prata"},
    {simbolo: "Cd", nome: "Cádmio"},
    {simbolo: "In", nome: "Índio"},
    {simbolo: "Sn", nome: "Estanho"},
    {simbolo: "Sb", nome: "Antimônio"},
    {simbolo: "Te", nome: "Telúrio"},
    {simbolo: "I", nome: "Iodo"},
    {simbolo: "Xe", nome: "Xenônio"},
    {simbolo: "Cs", nome: "Césio"},
    {simbolo: "Ba", nome: "Bário"},
    {simbolo: "La", nome: "Lantânio"},
    {simbolo: "Ce", nome: "Cério"},
    {simbolo: "Pr", nome: "Praseodímio"},
    {simbolo: "Nd", nome: "Neodímio"},
    {simbolo: "Pm", nome: "Promécio"},
    {simbolo: "Sm", nome: "Samário"},
    {simbolo: "Eu", nome: "Európio"},
    {simbolo: "Gd", nome: "Gadolínio"},
    {simbolo: "Tb", nome: "Térbio"},
    {simbolo: "Dy", nome: "Disprósio"},
    {simbolo: "Ho", nome: "Hólmio"},
    {simbolo: "Er", nome: "Érbio"},
    {simbolo: "Tm", nome: "Túlio"},
    {simbolo: "Yb", nome: "Itérbio"},
    {simbolo: "Lu", nome: "Lutécio"},
    {simbolo: "Hf", nome: "Háfnio"},
    {simbolo: "Ta", nome: "Tântalo"},
    {simbolo: "W", nome: "Tungstênio"},
    {simbolo: "Re", nome: "Rênio"},
    {simbolo: "Os", nome: "Ósmio"},
    {simbolo: "Ir", nome: "Irídio"},
    {simbolo: "Pt", nome: "Platina"},
    {simbolo: "Au", nome: "Ouro"},
    {simbolo: "Hg", nome: "Mercúrio"},
    {simbolo: "Tl", nome: "Tálio"},
    {simbolo: "Pb", nome: "Chumbo"},
    {simbolo: "Bi", nome: "Bismuto"},
    {simbolo: "Po", nome: "Polônio"},
    {simbolo: "At", nome: "Astato"},
    {simbolo: "Rn", nome: "Radônio"},
    {simbolo: "Fr", nome: "Frâncio"},
    {simbolo: "Ra", nome: "Rádio"},
    {simbolo: "Ac", nome: "Actínio"},
    {simbolo: "Th", nome: "Tório"},
    {simbolo: "Pa", nome: "Protássio"},
    {simbolo: "U", nome: "Urânio"},
    {simbolo: "Np", nome: "Neptúnio"},
    {simbolo: "Pu", nome: "Plutônio"},
    {simbolo: "Am", nome: "Amerício"},
    {simbolo: "Cm", nome: "Cúrio"},
    {simbolo: "Bk", nome: "Berquélio"},
    {simbolo: "Cf", nome: "Califórnio"},
    {simbolo: "Es", nome: "Einsteínio"},
    {simbolo: "Fm", nome: "Férmio"},
    {simbolo: "Md", nome: "Mendelévio"},
    {simbolo: "No", nome: "Nobélio"},
    {simbolo: "Lr", nome: "Laurêncio"},
    {simbolo: "Rf", nome: "Rutherfórdio"},
    {simbolo: "Db", nome: "Dúbnio"},
    {simbolo: "Sg", nome: "Sibórgio"},
    {simbolo: "Bh", nome: "Bóhrio"},
    {simbolo: "Hs", nome: "Hássio"},
    {simbolo: "Mt", nome: "Meitnério"},
    {simbolo: "Ds", nome: "Darmstádtio"},
    {simbolo: "Rg", nome: "Roentgênio"},
    {simbolo: "Cn", nome: "Copernício"},
    {simbolo: "Nh", nome: "Nihônio"},
    {simbolo: "Fl", nome: "Fleróvio"},
    {simbolo: "Mc", nome: "Moscóvio"},
    {simbolo: "Lv", nome: "Livermório"},
    {simbolo: "Ts", nome: "Tennesso"},
    {simbolo: "Og", nome: "Oganessônio"}
];


let indiceAtual = 0;
const simboloElemento = document.getElementById("elemento-atual");
const inputElemento = document.getElementById("nome-elemento");
const mensagemElemento = document.getElementById("mensagem");
const botaoVerificar = document.getElementById("verificar-btn");

function atualizarElemento() {
    simboloElemento.textContent = elementos[indiceAtual].simbolo;
    inputElemento.value = "";
}

function verificarNome() {
    const nomeInserido = inputElemento.value.trim().toLowerCase();
    const nomeCorreto = elementos[indiceAtual].nome.toLowerCase();

    console.log("Nome inserido:", nomeInserido);
    console.log("Nome correto:", nomeCorreto);
    console.log("Índice atual:", indiceAtual);

    if (nomeInserido === nomeCorreto) {
        mensagemElemento.textContent = "Correto!";

        indiceAtual++;
        if (indiceAtual >= elementos.length) {
            mensagemElemento.textContent = "Parabéns! Você completou todos os elementos!";
            indiceAtual = 0;
        } else {
            mensagemElemento.textContent = "Correto!";
        }
        atualizarElemento();
    } else {
        mensagemElemento.textContent = "Incorreto! Tente novamente do início.";
        indiceAtual = 0;
        atualizarElemento();
    }
}

botaoVerificar.addEventListener("click", verificarNome);

inputElemento.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        verificarNome();
    }
});

atualizarElemento();
