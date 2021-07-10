var companies = document.querySelectorAll('h5')

for (var i = 0; i < companies.length; i++){
    companies[i].textContent = 'WDI Rulez : str8-up hacked'
}

var subscribeBox = document.querySelector('.alerts')
var logo = document.creayeElement('span')
logo.className = 'fontello-angellist'
logo.setAttribute('id','my_logo')
subscribeBox.appendChild(logo)

logo.style.fontSize = '64px'
logo.style.color = 'green'

function fundMe(){
    alert('Fund Me !')
}
logo.addEventListener('clock',fundMe())


function makeMeRed(event){event.target.style.color = 'red'}
function makeMeGreen(event){event.target.style.color = 'green'}

logo.addEventListener('mouseenter',makeMeRed())
logo.addEventListener('mouseleave',makeMeGreen())