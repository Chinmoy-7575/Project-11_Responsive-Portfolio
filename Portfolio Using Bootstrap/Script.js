let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

let typed = new Typed('.auto-input',{
    strings: ['Front-End Developer!', 'Freelancer!', 'UI Designer!'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 2000,
    loop: true,
})

let navLinks = document.querySelectorAll('nav ul li a')

let sections = document.querySelectorAll('section')

window.addEventListener('scrool', function() {
    const scrollPos = this.window.scrollY
    sections.forEach(sections => {
        if(scrollPos > sections.offsetTop && scrollPos < (sections.offsetTop + sections.offsetHight)){
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(sections.getAttribute('id') === link.getAttribute('herf').substring) {
                    link.classList.add('active')
                }
            });
        }
    });
});