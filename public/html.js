
const q_ch = document.querySelector('#quote_chevron');
const a_link = document.querySelector('#about_link');
const p_link = document.querySelector('#projects_link');
const resume_button = document.querySelector('button.resume');
const chars = document.querySelector('#chars');
const name_link = document.querySelector('#name_link');
const email = document.querySelector('#personal_email');
const phone = document.querySelector('#personal_phone');
const about_element = document.querySelector('.about');
const quote = document.querySelector('.quote')
const lightColor = '#FBF7F2';
const darkColor = '#212F3C';
const eye = document.querySelector('#eye')

if (window.localStorage.getItem('color')) {
    let color = window.localStorage.getItem('color')

    if (color === 'light') {
        document.documentElement.style.setProperty('--main-color', lightColor);
    }
    else {
        document.documentElement.style.setProperty('--main-color', darkColor);
    }
}

q_ch.addEventListener('click', ()=>{
    quote.scrollIntoView({block: "center", behavior: 'smooth'})
})

a_link.addEventListener('click', ()=>{
    about_element.scrollIntoView({block: "start", behavior: 'smooth'})
})

p_link.addEventListener('click', ()=>{
    document.querySelector('#project1').scrollIntoView({block: 'start'});
})

name_link.addEventListener('click', ()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

resume_button.addEventListener('click', ()=>{
    window.open('https://www.docdroid.net/WyjIuyO/fake-resume-pdf', 'Resume')
})


document.querySelector('#contact_section textarea').addEventListener('input', (event)=>{
    let char_count = chars.querySelector('#char_count');
    let current = event.target.value.length;

    char_count.innerHTML = current;
})

const email_info = document.querySelector('#personal_email .tooltiptext')
document.querySelector('.email-btn').addEventListener('click', ()=> {
    email.scrollIntoView({block: 'center'});
});

document.querySelector('#personal_email > span').addEventListener('click', ()=> {
    navigator.clipboard.writeText('ibraem1026@gmail.com');
    email_info.innerHTML = '✔'
    setTimeout(()=>{
        email_info.innerHTML = 'Click to copy!'
    }, 1000)
});

const phone_info =  document.querySelector('#personal_phone .tooltiptext')
document.querySelector('.phone-btn').addEventListener('click', ()=> {
    phone.scrollIntoView({block: 'center'});
});

document.querySelector('#personal_phone > span').addEventListener('click', ()=> {
    navigator.clipboard.writeText('240-520-8934');
    phone_info.innerHTML = '✔'
    setTimeout(()=>{
        phone_info.innerHTML = 'Click to copy!'
    }, 1000)
});

eye.addEventListener('click', (event)=> {
    let color = '';

    if (event.target.id === 'eye') {
        color = event.target.dataset.color
    }
    else {
        color = event.target.closest('#eye').dataset.color
        console.log(color)
    };

    if (color === 'light') {
        window.localStorage.setItem('color', 'dark');
        document.documentElement.style.setProperty('--main-color', darkColor);
        eye.dataset.color = 'dark';
    }
    else {
        window.localStorage.setItem('color', 'light');
        document.documentElement.style.setProperty('--main-color', lightColor);
        eye.dataset.color = 'light';
    };
})