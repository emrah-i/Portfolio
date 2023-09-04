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

document.querySelector('.github-btn').addEventListener('click', ()=>{
    window.open('https://github.com/emrah-i', '_blank');
})

document.querySelector('.linkedin-btn').addEventListener('click', ()=>{
    window.open('https://linkedin.com/in/emrakh-i', '_blank');
})

document.querySelector('#project1 .project_buttons .project').addEventListener('click', ()=>{
    window.open('https://network.applikuapp.com', '_blank');
})

document.querySelector('#project1 .project_buttons .source').addEventListener('click', ()=>{
    window.open('https://github.com/emrah-i/Network', '_blank');
})

document.querySelector('#project2 .project_buttons .project').addEventListener('click', ()=>{
    window.open('https://eblog.applikuapp.com', '_blank');
})

document.querySelector('#project2 .project_buttons .source').addEventListener('click', ()=>{
    window.open('https://github.com/emrah-i/Blog', '_blank');
})

document.querySelector('#project3 .project_buttons .project').addEventListener('click', ()=>{
    window.open('https://inventory.applikuapp.com', '_blank');
})

document.querySelector('#project3 .project_buttons .source').addEventListener('click', ()=>{
    window.open('https://github.com/emrah-i/Inventory', '_blank');
})

document.querySelector('#quote_chevron').addEventListener('click', ()=>{
    document.querySelector('.quote').scrollIntoView({block: "center", behavior: 'smooth'})
})

document.querySelector('#about_link').addEventListener('click', ()=>{
    document.querySelector('.about').scrollIntoView({block: "start", behavior: 'smooth'})
})

document.querySelector('#projects_link').addEventListener('click', ()=>{
    document.querySelector('#project1').scrollIntoView({block: 'start'});
})

document.querySelector('#name_link').addEventListener('click', ()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

document.querySelector('button.resume').addEventListener('click', ()=>{
    window.open('https://www.docdroid.net/WyjIuyO/fake-resume-pdf', 'Resume')
})


document.querySelector('#contact_section textarea').addEventListener('input', (event)=>{
    let char_count = document.querySelector('#char_count');
    let current = event.target.value.length;

    char_count.innerHTML = current;
})

const email_info = document.querySelector('#personal_email .tooltiptext')
document.querySelector('.email-btn').addEventListener('click', ()=> {
    document.querySelector('#personal_email').scrollIntoView({block: 'center'});
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
    document.querySelector('#personal_phone').scrollIntoView({block: 'center'});
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