function mascarar() {
    let inputCpf = document.getElementById('inputCpf').value;
    if (inputCpf.length == 3) {
        document.getElementById('inputCpf').value = inputCpf + '.';
    } else if (inputCpf.length == 7) {
        document.getElementById('inputCpf').value = inputCpf + '.';
    } else if (inputCpf.length == 11) {
        document.getElementById('inputCpf').value = inputCpf + '-';
    }
}

function valida() {
    let minhaArray = ['01', '000.000.000-00', '244466666'];
    let inputCpf = document.getElementById('inputCpf').value;
    let inputPass = document.getElementById('inputSenha').value;

    if (inputCpf == minhaArray[1] && inputPass == minhaArray[2]) {
        document.getElementById('notification').innerHTML = "<br><a style='color: green'>Login realizado com sucesso!</a>"
        sleep(2000)
        document.getElementById('notification').innerHTML = '';
    } else {
        document.getElementById('notification').innerHTML = "<br><a style='color: red'>Login mal sucedido!</a>";
        sleep(2000)
        document.getElementById('notification').innerHTML = '';
    }
}