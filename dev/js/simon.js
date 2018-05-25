const niveles = 15;
let teclas;
let siguienteNivel = (nivelActual) =>{
    if (nivelActual==niveles) {
        return swal({
            title:'Ganaste',
            type: 'success'
        });
    }
    swal({
        timer:1000,
        title:`Nivel ${nivelActual + 1}`,
        buttons:false
    });

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
            var sw=swal({
                title:'Perdiste :(',
                text: 'Quieres jugar de nuevo?',
                buttons:{
                    cancel: 'No',
                    acept: true
                }
            });
            sw.then((value)=>{
                if (value) {
                    teclas = generarTeclas(niveles);
                    siguienteNivel(0);               
                }
            });
        }
    }
}

let generarTeclaAleatoria = () =>{
    const min = 65
    const max = 90
    return Math.round(Math.random() * (max - min) + min)
}

let activate = (keyCode, opts = {}) =>{
    const el = getElementByKeyCode(keyCode)
    el.classList.add('active')
    if (opts.success) {
        el.classList.add('success')
    } else if (opts.fail) {
        el.classList.add('fail')
    }
    setTimeout(() => deactivate(el), 500)
}

let deactivate = (el) =>{
    el.className = 'key'
}
let getElementByKeyCode = (keyCode) => document.querySelector(`[data-key="${keyCode}"]`);
let generarTeclas = (niveles) => new Array(niveles).fill(0).map(generarTeclaAleatoria);

export default function start(nivelActual){
    teclas = generarTeclas(niveles);
    siguienteNivel(nivelActual);
}