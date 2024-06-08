var time  = new Date()
var hour = time.getHours()
//var hour = 10
//var hour = 18
//var hour = 22

const section = document.getElementById("sec01");

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



