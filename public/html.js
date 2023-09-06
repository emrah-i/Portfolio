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

document.querySelector('#bookshelf-view').addEventListener('click', ()=>{
    window.open('https://bookshelf.applikuapp.com', '_blank');
})

document.querySelector('#bookshelf-source').addEventListener('click', ()=>{
    window.open('https://github.com/emrah-i/Bookshelf', '_blank');
})

document.querySelector('#movies-view').addEventListener('click', ()=>{
    window.open('https://movies.applikuapp.com', '_blank');
})

document.querySelector('#movies-source').addEventListener('click', ()=>{
    window.open('https://github.com/emrah-i/MoviesList', '_blank');
})

document.querySelector('#pomodoro-view').addEventListener('click', ()=>{
    window.open('https://replit.com/@emrah-i/Pomodoro', '_blank');
})

document.querySelector('#flashcards-view').addEventListener('click', ()=>{
    window.open('https://replit.com/@emrah-i/Flashcards', '_blank');
})

document.querySelector('#pong-view').addEventListener('click', ()=>{
    window.open('https://replit.com/@emrah-i/Pong', '_blank');
})

document.querySelector('#snake-view').addEventListener('click', ()=>{
    window.open('https://replit.com/@emrah-i/Snake', '_blank');
})

document.querySelectorAll('.smaller-source').forEach(element=>{
    element.addEventListener('click', ()=>{
        window.open('https://github.com/emrah-i/Smaller-Projects', '_blank');
    })    
})

document.querySelector('#quote_chevron').addEventListener('click', ()=>{
    document.querySelector('.quote').scrollIntoView({block: "center", behavior: 'smooth'})
})

document.querySelector('#about_link').addEventListener('click', ()=>{
    document.querySelector('#about_section').scrollIntoView({block: "center", behavior: 'smooth'})
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

document.querySelectorAll('.projects .carousel').forEach(element=>{
    element.addEventListener('click', (event)=>{
        event.target.closest('.carousel').classList.add('enlarged')

        if (document.querySelector('.enlarged')) {
            document.addEventListener('click', (event)=>{
                if (hasCarouselAncestor(event.target) === false) {
                    document.querySelectorAll('.projects .carousel').forEach(element=>{
                        element.classList.remove('enlarged');
                    })
                }
            })
        }
    })
})

document.querySelector('#email_req').addEventListener('submit', async (event)=>{
    event.preventDefault()

    form = document.querySelector('#email_req')

    const formData = new FormData(form)

    const requestBody = {};

    formData.forEach((value, key) => {
        requestBody[key] = value;
    });

    const response = await fetch('/email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
    })
    const data = await response.json();
    if (data.success) {
        showPopup('Success');
        form.reset()
        grecaptcha.reset();
    } else {
        showPopup(data.message);
        grecaptcha.reset();
    }
})

function showPopup(message) {
    
    const popup = document.querySelector('#popup')
    const popupText = document.querySelector('#popup_text')

    popup.style.display = 'flex'
    popupText.innerHTML = message

    setTimeout(()=>{
        popup.style.opacity = 1
    }, 100)
    setTimeout(()=>{
        popup.style.opacity = 0
    }, 1500)
    setTimeout(()=>{
        popup.style.display = 'none'
    }, 1800)
}

function hasCarouselAncestor(element) {
    while (element) {
      if (element.classList.contains("carousel")) {
        return true;
      }
      element = element.parentElement;
    }
    return false;
}