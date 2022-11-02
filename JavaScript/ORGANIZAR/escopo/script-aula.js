function mostrarCarro() {
    var carro = 'Fusca';
    console.log(carro);
}

mostrarCarro(); // Fusca no console
//console.log(carro); // Erro, carro is not defined

if (true) {
    const mes = 'Dezembro';
    console.log(mes);
}
    //console.log(mes);



    {
        var carro2 = 'Fusca2';
        const ano = 2022;
    }
    console.log(carro2); // Carro
    //console.log(ano); // erro ano is not defined

    // isso pq somente o Var vaza do escopo, já o Const não.



    var i = 50;

   // for(let i = 0; i < 10; i++) {
     //   console.log(`Número ${i}`);
    // }

    console.log(i * 10);



    const semana = 'Sexta';

    console.log(semana)

    data = {
        ano: 2022,
        mes: 'Dezembro'
    }

    data.ano = 2019;
    data.dia = 25;