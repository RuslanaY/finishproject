$('.owl-carousel').owlCarousel({
    autoplay:true,
    autoplayTimeout: 1000,
    loop:true,
    nav: true,
    responsive:{
        0:{
            items:2
        },
        480:{
            items:4
        },
        768:{
            items:6
        },
        1100:{
            items:8
        }
    }
});

const contents = [
    {
        img: "images/2.svg",
        text: "DoorDash went from a 100-person startup to over 9,000 employees. We needed a solution that was innovative in the T&E space.",
        author: "— Mike Kim, VP of Finance, DoorDash"
    },
    {
        img: "images/3.svg",
        text: "Another quote or content goes here.",
        author: "— Another Author"
    },
    {
        img: "images/1.svg",
        text: "Another quote or content goes here.",
        author: "— Another Author"
    }
];

let currentIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.left-arrow').addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? contents.length - 1 : currentIndex - 1;
        updateContent();
    });

    document.querySelector('.right-arrow').addEventListener('click', () => {
        currentIndex = (currentIndex === contents.length - 1) ? 0 : currentIndex + 1;
        updateContent();
    });

    function updateContent() {
        const content = contents[currentIndex];
        document.querySelector('.content img').src = content.img;
        document.querySelector('.content p').textContent = content.text;
        document.querySelector('.content span').textContent = content.author;
    }

    // Початкове завантаження контенту
    updateContent();
});

