// Liste  5 objetos nativos
Object
Element
String
Array
Function
Number

// Liste 5 objetos do Browser
window
alert
Document
HTMLCollection
NodeList

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox

if (typeof document.webkitVisibilityState !== 'undefined') {
    console.log('Existe');
} else {
    console.log('Não existe')
}