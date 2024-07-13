function toggleMenu() {
    const navbarNav = document.getElementById('navbarNav');
    navbarNav.classList.toggle('active');
}







const reviews = [
    {
        text: "“I never rate something a 5, until now. The laundry is clean and the wash and fold service is the very best.”",
        author: "-Steve G."
    },
    {
        text: "“This online laundry management system has streamlined our operations. It’s efficient and user-friendly!”",
        author: "-Maria T."
    },
    {
        text: "“Outstanding service! The website is so easy to use, and my clothes have never been so clean!”",
        author: "-John K."
    },
    {
        text: "“I am impressed with how smooth the process is. Scheduling and managing laundry has never been easier.”",
        author: "-Linda W."
    }
];

let currentReviewIndex = 0;

function showReview(index) {
    currentReviewIndex = index;
    const review = reviews[index];
    document.getElementById('review').innerHTML = `${review.text}<br><br>${review.author}`;
    updateActiveDot(index);
}

function updateActiveDot(index) {
    const dots = document.getElementsByClassName('dot');
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    dots[index].classList.add('active');
}