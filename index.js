
function battleRank(vitorias, derrotas){
    let qtdSaldoVitorias = vitorias - derrotas
    return qtdSaldoVitorias
}

let saldoVitorias = battleRank(110,5)

if(saldoVitorias < 10){
    console.log("O Herói tem saldo de " + saldoVitorias
        + " está no nível Ferro")
} else if (saldoVitorias > 11 && saldoVitorias <=20){
    console.log("O Herói tem saldo de " + saldoVitorias
        + " vitórias e está no nível Bronze")
} else if (saldoVitorias > 21 && saldoVitorias <= 50){
    console.log("O Herói tem saldo de " + saldoVitorias
        + " vitórias e está no nível Prata")
} else if (saldoVitorias > 51 && saldoVitorias <=80){
    console.log("O Herói tem saldo de " + saldoVitorias
        + " vitórias e está no nível Ouro")
} else if (saldoVitorias > 81 && saldoVitorias <= 90){
    console.log("O Herói tem saldo de " + saldoVitorias
        + " vitórias e está no nível Diamante")
} else if (saldoVitorias > 91 && saldoVitorias <= 100){
    console.log("O Herói tem saldo de " + saldoVitorias
        + " vitórias e está no nível Lendário")
} else if (saldoVitorias > 101){
    console.log("O Herói tem saldo de " + saldoVitorias
        + " vitórias e está no nível Lendário")
}

/*
let nome = prompt("Digite o nome do herói:");
let nivel = parseInt(prompt("Digite o nível do herói:"), 10);

// Verificar o nível do herói e imprimir o resultado
if (nivel < 1000) {
    console.log(`O herói ${nome} é do nível: Ferro`);
} else {
    console.log(`O herói ${nome} é de outro nível.`);
}
*/