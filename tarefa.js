const histPessoa = (ano,codigo,ch,nota) => {

    const hist = document.getElementById("tbPessoas")
    const qtdLinhas = hist.rows.length
    const linha = hist.insertRow(qtdLinhas)

    const colunaAno = linha.insertCell(0)
    const colunaCodigo = linha.insertCell(1)
    const colunaCH = linha.insertCell(2)
    const colunaNota = linha.insertCell(3)
    const colunaCustoToal = linha.insertCell(4)

    colunaAno.innerHTML = ano
    colunaCodigo.innerHTML = codigo
    colunaCH.innerHTML = ch
    colunaNota.innerHTML = nota
    colunaCustoToal.innerHTML = nota * ch

}

/* Gyovani Yuri Souza Santos */

const myForm = document.getElementById("myForm");

myForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const disciplina = {
        Nota: parseFloat(document.getElementById('nota').value),
        Periodo: document.getElementById('ano').value,
        Codigo: document.getElementById('cd').value,
        CargaHoraria:  parseFloat(document.getElementById('ch').value)
    }

    myForm.reset()

    
    fmediach(disciplina.CargaHoraria)
    
   
   
    flistar(disciplina.Codigo, disciplina.Nota, disciplina.Periodo, disciplina.CargaHoraria)
    fvalorTotal
})



const listanotas = []
const listaperiodos = []
const listach = []
const listacodigos = []

const flistar = (codigo, nota, periodo,cargahoraria) => {
    document.getElementById('tcod').innerHTML = codigo
    document.getElementById('tnota').innerHTML = `R$ ${nota}`
    document.getElementById('tperiodo').innerHTML = periodo
    document.getElementById('tch').innerHTML = `${cargahoraria} itens.`
}




const fmediach = (cargahoraria) => {
    listach.push(cargahoraria)
    listareduzida = listach.reduce((acc, x) => acc + x, 0)
    document.getElementById('chtotal').innerHTML = `${listareduzida} itens.`

}









const notasdep = []


