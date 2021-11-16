// Navbar

const sections = document.querySelectorAll('section');
const navbarLinks = document.querySelectorAll('.link')

window.addEventListener('scroll', () => {
    myFunc();
})

const myFunc = () => {
    sections.forEach((section, i) => {
        if (window.pageYOffset >= section.offsetTop - 40) {
            navbarLinks.forEach((navLink) => {
                navLink.classList.remove('active')
            })
            navbarLinks[i].classList.add('active')
        }
    })
}

// Toggle Button
const toggleBtn = document.querySelector('.toggle-btn');
const linkContainer = document.querySelector('.links-container');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    linkContainer.classList.toggle('show')
})


// Projects
const projectContainer = document.querySelector('.project-container');

projects.forEach(project => {
    projectContainer.innerHTML += `
        <div class="project-card" data-tags="#all, ${project.tags}">
            <div class="img-container">
                <img src="${project.image}" class="img">
            </div>

            <div class="content">
                <span class="tags">${project.tags}</span>
                <a href="${project.link}" target="_blank" class="link">
                    <h3 class="project-name">${project.name}</h3>
                    <i class='bx bx-right-arrow-alt'></i>
                </a>
            </div>
        </div>
    `
})


// Filter
const filters = document.querySelectorAll('.filter-btn');

filters.forEach(filterBtn => {
    filterBtn.addEventListener('click', () => {
        let id = filterBtn.getAttribute('id');

        let projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            if (card.getAttribute('data-tags').includes(id)) {
                card.classList.remove('hide')
            } else {
                card.classList.add('hide')
            }
        })

        filters.forEach(btn => btn.classList.remove('active'));
        filterBtn.classList.add('active')
    })
})


// Contact Form
const contactBtn = document.querySelector('.btn-contact');
const firstName = document.querySelector('.first-name');
const lastName = document.querySelector('.last-name');
const email = document.querySelector('.email');
const msg = document.querySelector('.message');


// // AOS
// AOS.init({
//     offset:80,
//     duration: 2000,
// })