// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic Event Loading (Simulated)
const events = [
    {
        date: { day: "15", month: "OCT" },
        title: "Global Music Festival",
        time: "7:00 PM - 11:00 PM",
        tags: ["concert", "outdoor"]
    },
    {
        date: { day: "20", month: "OCT" },
        title: "Local Basketball Finals",
        time: "6:00 PM - 9:00 PM",
        tags: ["sports", "indoor"]
    },
    {
        date: { day: "25", month: "OCT" },
        title: "Tech Expo 2024",
        time: "10:00 AM - 6:00 PM",
        tags: ["expo", "indoor"]
    }
];

const eventsGrid = document.querySelector('.events-grid');

events.forEach(event => {
    const eventCard = document.createElement('div');
    eventCard.classList.add('event-card');

    eventCard.innerHTML = `
        <div class="event-date">
            <span class="day">${event.date.day}</span>
            <span class="month">${event.date.month}</span>
        </div>
        <div class="event-info">
            <h3>${event.title}</h3>
            <p class="event-time">${event.time}</p>
            <div class="event-tags">
                ${event.tags.map(tag => `<span class="tag ${tag}">${tag}</span>`).join('')}
            </div>
        </div>
    `;

    eventsGrid.appendChild(eventCard);
});

// Ticket Purchase Simulation
const ticketButton = document.querySelector('#box-office .btn');
ticketButton.addEventListener('click', () => {
    alert("Thank you for your interest! Redirecting to ticket purchase page...");
    // Simulate redirect (replace with actual link)
    window.location.href = "#";
});

// Contact Form Submission (Simulated)
const contactForm = document.querySelector('#planner form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;

        if (name && email && message) {
            alert(`Thank you, ${name}! We will contact you at ${email} shortly.`);
            contactForm.reset();
        } else {
            alert("Please fill out all fields.");
        }
    });
}

// Fade-in Animation for Sections
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});