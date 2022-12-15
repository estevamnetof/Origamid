// Referência da Seleção
    // Procura: Java
// const regexp = /Java/g;

// 'PHP e Java são linguagens diferentes'.replace(regexp, '--$Script');
// PHP e --$Script são linguagens diferentes
// $& será igual à Java


// ===================================================


// Grupo de Captura
    // Procura: sequência alfanúmerica, seguida
    // de @, seguido de alfanúmerico ou .
// const regexp = /(\w+)@[\w.]+/g;

// 'andre@email.com.br'.replace(regexp, '$1@gmail.com');
// andre@gmail.com

    // Não use este regexp para emails, ele falha em alguns casos.


// ===================================================


// Mais de um Grupo
    // Procura: sequência alfanúmerica, seguida
    // de , seguido espaço de sequência alfanúmerica.
// const regexp = /(\w+), \s(\w+)/g;

// 'Rafael , Andre'.replace(regexp, '$2 $1');
// Rafael , Andre


// ===================================================


// Mais do que Captura apenas
    // Procura: qualquer sequência de ta
// const regexp = /(ta)+/gi;

// 'Tatata, tata, ta'.replace(regexp, 'Pá');
// Pá, Pá, Pá


// ===================================================


// Ignorar Captura
    // Procura: qualquer sequência de ta
// const regexp = /(?:ta)+/gi;

// 'Tatata, tata, ta'.replace(regexp, 'Pá');
// Pá, Pá, Pá


// ===================================================


// Positive Lookahead
    // Procura: dígitos em sequência, que
    // possuírem px, sem selecionar o px.
// const regexp = /\d(?=px)/g;

// '2em, 4px, 5%, 2px, 1px'.replace(regexp, 'X');
// 2em, Xpx, 5%, Xpx, Xpx


// ===================================================


// Negative Lookahead
    // Procura: dígitos que não possuírem px
    // sem selecionar o restante
// const regexp = /\d(?!px)/g;

// '2em, 4px, 5%, 5px, 1px'.replace(regexp, 'X');
// Xem, 4px, X%, 5px, 1px


// ===================================================


// Positive Lookbehind
    // Procura: dígitos que possuírem R$
    // na frente dos mesmos
    const regexp = /(?<=R\$)[\d]+/g;

    'R$99, 100, 200, R$20'.replace(regexp, 'X');
    // R$X, 100, 200, R$X