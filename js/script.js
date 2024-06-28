/* 
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                                     HORARIO CAPTURADO DO COMPUTADOR DO USUÁRIO
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
                                                               
let time  = new Date()
let hour = time.getHours()
//hour = 10
//hour = 18
//hour = 22

const section = document.getElementById("sec01")

if (hour >= 6 && hour <= 16){
   document.body.style.background = "linear-gradient(180deg, #0093E9 0%,  #75cf65 25%)"
    document.documentElement.style.setProperty('--estrela', 'transparent' )

}
else if (hour >= 17 && hour <= 19){
    document.body.style.background = 'linear-gradient(180deg, #0093E9 0%,  #75cf65 25%)'
    document.documentElement.style.setProperty('--estrela', 'transparent' )
}
else {
    document.body.style.background= 'linear-gradient(178.7deg, rgb(1, 36, 80) 0%, #75cf65 45%)'
    document.documentElement.style.setProperty('--estrela', '#ffffff')
}




/* 
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                                     BARRA DE PROGRESSO
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
/*
const img_agro = document.getElementById('agricultura');
const img_pecuaria = document.getElementById('pecuaria');
const img_industria = document.getElementById('transporte');
const img_transporte = document.getElementById('industria');
const img_tec_agro = document.getElementById('tecnologia');
const img_form = document.getElementById('formulario');
*/


const progresso = document.getElementById('progresso');
const btn_avancar = document.getElementById('btn-avancar');
const btn_voltar = document.getElementById('btn-voltar');


const etapas_de_progresso = document.querySelectorAll(".etapa-progresso");

let etapaAtual = 1;

const avancar = () =>{
    etapaAtual++;
    pagina();
    atualizar();
};

const voltar = ()=> {
    etapaAtual --;

    if (etapaAtual < 1 ) {
        etapaAtual = 1;
    }
    pagina();
    atualizar();
    
};


const atualizar = ()=> {
    etapas_de_progresso.forEach((step,index)=>{
        if(index < etapaAtual)step.classList.add('ativo');
        else step.classList.remove("ativo");
    })

    
    if(etapaAtual > etapas_de_progresso.length-1){
    etapaAtual = etapas_de_progresso.length;
    
    btn_avancar.classList.add("desabilitado");
    } else btn_avancar.classList.remove("desabilitado");

    if(etapaAtual == 1)btn_voltar.classList.add('desabilitado');
    else btn_voltar.classList.remove("desabilitado")

    const todosAtivos = document.querySelectorAll(".ativo")

    let width = (todosAtivos.length / etapas_de_progresso.length) * 50 - 7.5;
    console.log(width)
    progresso.style.width  = width + todosAtivos.length + '%';
    
 };


/* 
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                                     'TELA' DA SEÇÃO 3
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

const tela = document.getElementById('tela');

const pagina = ()=> {

    switch(etapaAtual) {
        case 1:
            tela.src = 'html/agricultura.html';
            break
        case 2:
            tela.src = 'html/pecuaria.html';
            break
        case 3:
            tela.src = 'html/transporte.html';
            break
        case 4:
            tela.src = 'html/industria.html';
            break
        case 5:
            tela.src = 'html/tec-campo.html';
            break
        case 6:
            tela.src = 'html/questionario.html';

            
        
}
}

/*
const recarregarImagens = ()=> {
    img_agro.src = 'img/agricultura.png'
    img_pecuaria.src = 'img/pecuaria.png';
    img_transporte.src = 'img/transporte.png';
    img_industria.src = 'img/industria.png';
    img_tec_agro.src = 'img/tecnologia_agricultura.png';
    img_form.src='img/formulario.png';

}
    */


/* 
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                                     ANIMAÇÃO ONDAS
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/


let onda1 = document.getElementById('onda1');
let onda2 = document.getElementById('onda2');
let onda3 = document.getElementById('onda3');
let onda4 = document.getElementById('onda4');

window.addEventListener('scroll', function(){
    let rolagemPos = window.scrollY;

    onda1.style.backgroundPositionX = 400 + rolagemPos * 4+'px';
    onda2.style.backgroundPositionX = 300 + rolagemPos * -4+'px';
    onda3.style.backgroundPositionX = 200 + rolagemPos * 2+'px';
    onda4.style.backgroundPositionX = 100 + rolagemPos * -2*'px';
})

/* 
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                                     MOSTRAR CABECALHO
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

const header = document.getElementById('cabecalho');
const envelope = document.getElementById('envelope');
const menu_barra1 = document.getElementById('b1');
const menu_barra2 = document.getElementById('b2');
const menu_barra3 = document.getElementById('b3');


function cabecalhoAtivado(){
    header.style.backgroundColor = 'white';
    envelope.src='../img/envelope.png';
    menu_barra1.style.backgroundColor = 'black';
    menu_barra2.style.backgroundColor = 'black';
    menu_barra3.style.backgroundColor = 'black';
    
}

function cabecalhoDesativado(){
    header.style.background = 'transparent';
    //menu.src='../img/menu-hamburguer-branco.png';
    envelope.src='../img/envelope-branco.png';
    menu_barra1.style.backgroundColor = 'white';
    menu_barra2.style.backgroundColor = 'white';
    menu_barra3.style.backgroundColor = 'white';
}



/* 
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                                     MENU
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

const menu = document.getElementById('menu');
const menuHamburguer = document.getElementById('checkbox-menu');


function menuCLick(){
    if (menuHamburguer.checked){
        header.style.backgroundColor = 'white';
        envelope.src='../img/envelope.png';
        menu_barra1.style.backgroundColor = 'black';
        menu_barra2.style.backgroundColor = 'black';
        menu_barra3.style.backgroundColor = 'black';
        menu.style.display = 'block'

    }else {
        menu.style.display = 'none'
    }
}

