// gsap.to(".badal-1, .badal-2, .badal-3", {
//     x: "-100%", // Move to the left off-screen
//     duration: 10, // Duration of one cycle
//     repeat: -1, // Infinite repeat
//     ease: "linear", // Continuous smooth motion
//     stagger: 0, // Stagger the start of each image
//     modifiers: {
//       x: (x) => {
//         if (parseFloat(x) <= -100) {
//           return "100%";
//         }
//         return x;
//       }
//     }
//   });
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
    "(min-width: 1400px)": function () {

        gsap.to(".blooon", {
            y: '132%',
            scrollTrigger: {
                trigger: ".oyh",
                start: "top 20% top",
                end: "bottom bottom",
                scrub: true,
            }
        });

        gsap.to(".tiels", {
            y: '319%',
            scrollTrigger: {
                trigger: ".oyh",
                start: "top 20% top",
                end: "bottom bottom",
                scrub: true,
            }
        });

        gsap.to(".tiels img", {
            rotateX: 76,
            scrollTrigger: {
                trigger: ".oyh",
                start: "top 11% top",
                end: "bottom bottom",
                scrub: true,
            }
        });
    }
});




gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
    "(max-width: 1399px)": function () {

        gsap.to(".blooon", {
            y: '162%',
            x: '27%',
            scrollTrigger: {
                trigger: ".oyh",
                start: "top 20% top",
                end: "bottom bottom",
                scrub: true,
            }
        });

        gsap.to(".tiels", {
            y: '401%',
            x: '22%',
            scrollTrigger: {
                trigger: ".oyh",
                start: "top 20% top ",
                end: "bottom bottom",
                scrub: true,
            }
        });

        gsap.to(".tiels img", {
            rotateX: 76,
            scrollTrigger: {
                trigger: ".oyh",
                start: "top 11% top",
                end: "bottom bottom",
                scrub: true,
            }
        });
    }
});






document.addEventListener('DOMContentLoaded', function () {
    // Get references to the progress bar and links
    const progressBar = document.querySelector('.inneer-progress');
    const firstLink = document.getElementById('first-link');
    const secondLink = document.getElementById('secnd-link');
    const thirdLink = document.getElementById('third-link');

    // Function to update the position of the progress bar
    function updateProgressBar(percentage) {
        progressBar.style.transform = `translateY(${percentage}%)`;
    }

    firstLink.addEventListener('click', function () {
        updateProgressBar(0);
        document.getElementById('kitchen-img-1').style.display = 'block'
        document.getElementById('kitchen-img-3').style.display = 'none'
        document.getElementById('kitchen-img-2').style.display = 'none'
    });

    secondLink.addEventListener('click', function () {
        updateProgressBar(105);
        document.getElementById('kitchen-img-2').style.display = 'block'
        document.getElementById('kitchen-img-1').style.display = 'none'
        document.getElementById('kitchen-img-3').style.display = 'none'


    });

    thirdLink.addEventListener('click', function () {
        updateProgressBar(200);
        document.getElementById('kitchen-img-3').style.display = 'block'
        document.getElementById('kitchen-img-2').style.display = 'none'
        document.getElementById('kitchen-img-1').style.display = 'none'

    });
});


// // Get current URL path
// const currentPath = window.location.pathname;

// // Select all nav links
// const navLinks = document.querySelectorAll('.nav-link');

// // Loop through each link and check if its href matches the current path
// navLinks.forEach(link => {
//   const linkPath = link.getAttribute('href');
  
//   // Check if the linkPath matches the current URL path
//   if (currentPath.includes(linkPath)) {
//     link.classList.add('active');
//   }
// });











const bigggPop = document.getElementById('biggg-pop');
const bigDropDown = document.getElementById('big-drop-down');

bigggPop.addEventListener('mouseover', () => {
    bigDropDown.style.display = 'block';
    
});

bigggPop.addEventListener('mouseout', () => {
    bigDropDown.style.display = 'none';
    
});

bigDropDown.addEventListener('mouseover', () => {
    bigDropDown.style.display = 'block';
});

bigDropDown.addEventListener('mouseout', () => {
    bigDropDown.style.display = 'none';
});















const steps = document.querySelectorAll('.form-step');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
let currentStep = 0;

function showStep(stepIndex) {
    steps.forEach((step, index) => {
        step.classList.toggle('active', index === stepIndex);
    });
    prevBtn.style.display = stepIndex === 0 ? 'none' : 'inline-block';
    nextBtn.textContent = stepIndex === steps.length - 1 ? 'Submit' : 'Next';
}

function validateStep() {
    const inputs = steps[currentStep].querySelectorAll('input, textarea');
    for (let input of inputs) {
        if (!input.checkValidity()) {
            input.reportValidity();
            return false;
        }
    }
    return true;
}

nextBtn.addEventListener('click', () => {
    if (nextBtn.textContent === 'Submit') {
        if (validateStep()) {
            const submissionModal = new bootstrap.Modal(document.getElementById('submissionModal'));
            submissionModal.show();
            document.getElementById('multiStepForm').reset();
            currentStep = 0;
            showStep(currentStep);
        }

    } else {
        if (validateStep()) {
            currentStep++;
            if (currentStep >= steps.length) currentStep = steps.length - 1;
            showStep(currentStep);
        }
    }
});

prevBtn.addEventListener('click', () => {
    currentStep--;
    if (currentStep < 0) currentStep = 0;
    showStep(currentStep);
});

showStep(currentStep);

















// // Select elements
// const productLink = document.getElementById('biggg-pop-link');
// const megaMenu = document.getElementById('big-drop-down');

// // Function to open mega menu
// function openMenu() {
//   gsap.to(megaMenu, {
//     height: 'auto',
//     opacity: 1,
//     duration: 0.5,
//     ease: 'power2.out',
//     onStart: () => megaMenu.style.display = 'block'
//   });
// }

// // Function to close mega menu
// function closeMenu() {
//   setTimeout(() => {
//     if (!megaMenu.matches(':hover') && !productLink.matches(':hover')) {
//       gsap.to(megaMenu, {
//         height: 0,
//         opacity: 0,
//         duration: 0.5,
//         ease: 'power2.in',
//         onComplete: () => megaMenu.style.display = 'none'
//       });
//     }
//   }, 200);
// }

// // Event listeners for hover
// productLink.addEventListener('mouseenter', openMenu);
// productLink.addEventListener('mouseleave', closeMenu);
// megaMenu.addEventListener('mouseleave', closeMenu);
// megaMenu.addEventListener('mouseenter', openMenu);




