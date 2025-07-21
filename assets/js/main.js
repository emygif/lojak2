
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


const scrollHeader = () =>{
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)




const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')

	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

const cart = document.getElementById('cart'),
      cartShop = document.getElementById('cart-shop'),
      cartClose = document.getElementById('cart-close')


if(cartShop){
    cartShop.addEventListener('click', () =>{
        cart.classList.add('show-cart')
    })
}
if(cartClose){
    cartClose.addEventListener('click', () =>{
        cart.classList.remove('show-cart')
    })
}

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'


const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'


if (selectedTheme) {

  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}


themeButton.addEventListener('click', () => {

    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
const searchItems = [
    { name: "Camisa Slipknot", image: "assets/img/slipknot.png", link: "https://produto.mercadolivre.com.br/MLB-4587213062-camiseta-slipknot-oficial-licenciada-stamp-rockwear-original-_JM?matt_tool=50488828&matt_word=&matt_source=google&matt_campaign_id=22090354451&matt_ad_group_id=173090601276&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882732518&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=135351964&matt_product_id=MLB4587213062-182395799847&matt_product_partition_id=2389866552388&matt_target_id=pla-2389866552388&cq_src=google_ads&cq_cmp=22090354451&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gclid=Cj0KCQjwqIm_BhDnARIsAKBYcmtcua4jZ467WbRUXKUZDXx6GD8LZDOTIwODTLpgsvBZpKWK464RVT8aAqAiEALw_wcB" },
    { name: "Camisa The Cure", image: "assets/img/thecure.png", link: "hCj0KCQjwqIm_BhDnARIsAKBYcmvMCAXTKtH7eNoAkORb0OHLuOPz9MYVkr1kE3AtrBynGIGY80O2isQaAkwqEALw_wcB" },
    { name: "Camisa Slowdive", image: "assets/img/slowdive.png", link: "Cj0KCQjwqIm_BhDnARIsAKBYcmvMCAXTKtH7eNoAkORb0OHLuOPz9MYVkr1kE3AtrBynGIGY80O2isQaAkwqEALw_wcB" },
    { name: "Camisa TV Girl", image: "assets/img/tvgirl.png", link: "hCj0KCQjwqIm_BhDnARIsAKBYcmvMCAXTKtH7eNoAkORb0OHLuOPz9MYVkr1kE3AtrBynGIGY80O2isQaAkwqEALw_wcB" },
    { name: "Camisa The Smiths", image: "assets/img/the smiths.png", link: "" },
    { name: "Camisa Deftones", image: "assets/img/deftones.png", link: "" }
];

function searchFunction() {
    let input = document.getElementById("search-bar").value.toLowerCase();
    let resultsContainer = document.getElementById("search-results");

    resultsContainer.innerHTML = ""; 
    if (input === "") {
        resultsContainer.style.display = "none";
        return;
    }
    
    let filteredItems = searchItems.filter(item => item.name.toLowerCase().includes(input));

    if (filteredItems.length > 0) {
        resultsContainer.style.display = "block";
        filteredItems.forEach(item => {
            let resultDiv = document.createElement("div");
            resultDiv.innerHTML = `
                <a href="${item.link}" target="_blank" class="search-result-item">
                    <img src="${item.image}" alt="${item.name}"> ${item.name}
                </a>
            `;
            resultsContainer.appendChild(resultDiv);
        });
    } else {
        resultsContainer.style.display = "block";
        resultsContainer.innerHTML = `<div class="no-results">Não encontrado</div>`;
    }
}


