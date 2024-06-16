/* 
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                                     HORARIO CAPTURADO DO COMPUTADOR DO USUÁRIO
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
                                                               
var time  = new Date()
var hour = time.getHours()
//var hour = 10
//var hour = 18
//var hour = 22

const section = document.getElementById("sec01")

if (hour >= 6 && hour <= 16){
    section.style.background = "linear-gradient(180deg, #0093E9 0%, #80D0C7 100%)"
    document.documentElement.style.setProperty('--estrela', 'transparent' )

}
else if (hour >= 17 && hour <= 19){
    section.style.background = 'linear-gradient(180deg, #FEE140 0%, #FA709A 100%)'
    document.documentElement.style.setProperty('--estrela', '#fff' )
}
else {
    section.style.background= ' linear-gradient( 178.7deg,  rgba(126,184,253,1) 5.6%, rgba(2,71,157,1) 95.3% )'
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
            //img_agro = 'img/agricultura-ativo.png';
            break
        case 2:
            tela.src = 'html/pecuaria.html';
            //img_pecuaria.src = 'img/pecuaria-ativo.png';
            break
        case 3:
            tela.src = 'html/transporte.html';
            //img_transporte.src = 'img/transporte-ativo.png';
            break
        case 4:
            tela.src = 'html/industria.html';
            //img_industria.src = 'img/industria-ativo.png';
            break
        case 5:
            tela.src = 'html/tec-campo.html';
            //img_tec_agro.src = 'img/tecnologia_agricultura-ativo.png';
            break
        case 6:
            tela.src = 'html/questionario.html';
            //img_form.src='img/formulario-ativo.png';
        
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