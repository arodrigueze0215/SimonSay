const niveles = 15
let teclas = generarTeclas(niveles)

function siguienteNivel(nivelActual) {
    if (nivelActual==niveles) {
        return swal({
            title:'Ganaste',
            type: 'success'
        });
    }
    alert(`Nivel ${nivelActual + 1}`);
    for (let i = 0; i <= nivelActual; i++) {
        setTimeout(()=> activate(teclas[i]), 1000*(i+1)+1000);          
    }
    let i=0;
    let teclaActual = teclas[i];
    window.addEventListener('keydown', onkeydown);
    function onkeydown(ev) {
        if (ev.keyCode==teclaActual) {
        activate(teclaActual, {succes:true});
        i++;
        if (i>nivelActual) {
            window.removeEventListener('keydown', onkeydown);
            setTimeout(()=>siguienteNivel(i),1500);
        }
        teclaActual = teclas[i];
        } else{
        activate(ev.keyCode, {fail:true});
        window.removeEventListener('keydown', onkeydown);
        setTimeout(() => alert('Perdiste :('), 1000);
        }
    }
}
siguienteNivel(0)

function generarTeclas(niveles) {
    return new Array(niveles).fill(0).map(generarTeclaAleatoria)
}

function generarTeclaAleatoria() {
    const min = 65
    const max = 90
    return Math.round(Math.random() * (max - min) + min)
}

function getElementByKeyCode(keyCode) {
    return document.querySelector(`[data-key="${keyCode}"]`)
}

function activate(keyCode, opts = {}) {
    const el = getElementByKeyCode(keyCode)
    el.classList.add('active')
    if (opts.success) {
        el.classList.add('success')
    } else if (opts.fail) {
        el.classList.add('fail')
    }
    setTimeout(() => deactivate(el), 500)
}

function deactivate(el) {
    el.className = 'key'
}