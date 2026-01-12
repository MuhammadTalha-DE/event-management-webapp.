// Initial events array
let events = [
    {
        id: 1,
        name: "Tech Conference 2023",
        date: "2027-12-15",
        description: "Annual technology conference with industry leaders and workshops on emerging technologies."
    },
    {
        id: 2,
        name: "Music Festival",
        date: "2027-11-20",
        description: "A weekend of live music featuring popular artists across multiple genres."
    },
    {
        id: 3,
        name: "Charity Gala",
        date: "2027-10-30",
        description: "Formal fundraising event to support local community initiatives."
    },
    {
        id: 4,
        name: "Startup Pitch Competition",
        date: "2027-01-25",
        description: "Entrepreneurs pitch their business ideas to a panel of investors."
    },
    {
        id: 5,
        name: "Art Exhibition Opening",
        date: "2027-02-10",
        description: "Opening night for a new contemporary art exhibition featuring local artists."
    },



    {
        id: 21,
        name: "AI Ethics and Future Forum",
        date: "2027-03-20",
        description: "Discussion on ethical AI development and implementation."
    },
    {
        id: 22,
        name: "Blockchain Technology Seminar",
        date: "2027-03-27",
        description: "Understanding cryptocurrency and blockchain applications."
    },
    {
        id: 23,
        name: "Cybersecurity Awareness Workshop",
        date: "2027-04-03",
        description: "Learn to protect your digital identity and data."
    },
    {
        id: 24,
        name: "Web Development Bootcamp",
        date: "2027-04-10",
        description: "Hands-on training in modern web development technologies."
    },
    {
        id: 25,
        name: "IoT Smart Home Expo",
        date: "2027-04-17",
        description: "Exhibition of latest smart home devices and automation."
    },
    {
        id: 26,
        name: "Data Science Conference",
        date: "2027-04-24",
        description: "Big data analytics and machine learning applications."
    },
    {
        id: 27,
        name: "5G Technology Forum",
        date: "2027-05-01",
        description: "Exploring the impact of 5G on communication and industries."
    },
    {
        id: 28,
        name: "Virtual Reality Gaming Tournament",
        date: "2027-05-08",
        description: "Competitive VR gaming with latest equipment demonstrations."
    },
    {
        id: 29,
        name: "Quantum Computing Introduction",
        date: "2027-05-15",
        description: "Basic concepts and future potential of quantum computing."
    },
    {
        id: 30,
        name: "Tech Startup Pitch Competition",
        date: "2027-05-22",
        description: "Emerging tech companies present innovative solutions."
    },


    {
        id: 11,
        name: "Community Clean-up Day",
        date: "2027-03-18",
        description: "Volunteer to clean local parks and public spaces."
    },
    {
        id: 12,
        name: "Blood Donation Drive",
        date: "2027-03-25",
        description: "Join us to donate blood and save lives in our community."
    },
    {
        id: 13,
        name: "Food Bank Volunteering",
        date: "2027-04-01",
        description: "Help sort and distribute food to families in need."
    },
    {
        id: 14,
        name: "Environmental Conservation Workshop",
        date: "2027-04-08",
        description: "Learn about sustainability and conservation practices."
    },
    {
        id: 15,
        name: "Literacy Tutoring Program",
        date: "2027-04-15",
        description: "Volunteer to teach reading skills to adults."
    },
    {
        id: 16,
        name: "Disaster Preparedness Training",
        date: "2027-04-22",
        description: "Learn emergency response and first aid skills."
    },
    {
        id: 17,
        name: "Senior Citizens Tech Help Day",
        date: "2027-04-29",
        description: "Help elderly community members with technology basics."
    },
    {
        id: 18,
        name: "Cultural Diversity Festival",
        date: "2027-05-06",
        description: "Celebrate different cultures through food, music, and art."
    },
    {
        id: 19,
        name: "Animal Shelter Support Event",
        date: "2027-05-13",
        description: "Volunteer day at the local animal shelter."
    },
    {
        id: 20,
        name: "Community Garden Planting",
        date: "2026-05-20",
        description: "Help plant and maintain the neighborhood community garden."
    },


    {
        id: 1,
        name: "Mindfulness Meditation Workshop",
        date: "2026-03-15",
        description: "Learn meditation techniques for stress reduction and mental clarity."
    },
    {
        id: 2,
        name: "Public Speaking Masterclass",
        date: "2026-03-22",
        description: "Build confidence and communication skills for effective presentations."
    },
    {
        id: 3,
        name: "Time Management Seminar",
        date: "2026-03-29",
        description: "Strategies for productivity and work-life balance."
    },
    {
        id: 4,
        name: "Emotional Intelligence Training",
        date: "2026-04-05",
        description: "Develop self-awareness and interpersonal skills."
    },
    {
        id: 5,
        name: "Leadership Development Program",
        date: "2026-04-12",
        description: "Cultivate leadership qualities and team management skills."
    },
    {
        id: 6,
        name: "Creative Writing Workshop",
        date: "2026-04-19",
        description: "Unlock your creative potential through writing exercises."
    },
    {
        id: 7,
        name: "Financial Literacy Course",
        date: "2026-04-26",
        description: "Learn budgeting, investing, and financial planning basics."
    },
    {
        id: 8,
        name: "Yoga and Wellness Retreat",
        date: "2026-05-03",
        description: "Weekend retreat focusing on physical and mental wellbeing."
    },
    {
        id: 9,
        name: "Career Advancement Strategies",
        date: "2026-05-10",
        description: "Networking and skill-building for professional growth."
    },
    {
        id: 10,
        name: "Digital Detox Challenge",
        date: "2026-05-17",
        description: "Learn to balance technology use for better mental health."
    },


    {
        id: 31,
        name: "Global Youth Leadership Summit",
        date: "2026-03-16",
        description: "Young leaders discuss global challenges and solutions."
    },
    {
        id: 32,
        name: "International Cultural Exchange Fair",
        date: "2026-03-23",
        description: "Promoting cross-cultural understanding through arts."
    },
    {
        id: 33,
        name: "Climate Change Diplomacy Forum",
        date: "2026-03-30",
        description: "Discussion on international climate agreements and policies."
    },
    {
        id: 34,
        name: "Human Rights Symposium",
        date: "2026-04-06",
        description: "Addressing global human rights challenges and advocacy."
    },
    {
        id: 35,
        name: "United Nations SDG Conference",
        date: "2026-04-13",
        description: "Progress on Sustainable Development Goals implementation."
    },
    {
        id: 36,
        name: "International Trade Workshop",
        date: "2026-04-20",
        description: "Understanding global trade agreements and economics."
    },
    {
        id: 37,
        name: "Refugee Support Initiative Meeting",
        date: "2026-04-27",
        description: "Coordinating international aid for refugee communities."
    },
    {
        id: 38,
        name: "Global Health Partnerships Summit",
        date: "2026-05-04",
        description: "Collaboration for international healthcare improvements."
    },
    {
        id: 39,
        name: "Digital Divide Bridging Conference",
        date: "2026-05-11",
        description: "Addressing technology access inequality worldwide."
    },
    {
        id: 40,
        name: "Peacebuilding and Conflict Resolution",
        date: "2027-05-18",
        description: "Diplomatic approaches to international conflict prevention."
    }
];
/*
const allEvents = [
    ...personalDevelopmentEvents,
    ...socialResponsibilityEvents,
    ...technologyEvents,
    ...internationalEvents
];
    */

// DOM Elements
const eventsContainer = document.getElementById('eventsContainer');
const eventForm = document.getElementById('eventForm');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearch');
const noEventsMessage = document.getElementById('noEventsMessage');
const eventCount = document.getElementById('eventCount');
const resetBtn = document.getElementById('resetBtn');
const currentYearSpan = document.getElementById('currentYear');

// Error message elements
const nameError = document.getElementById('nameError');
const dateError = document.getElementById('dateError');
const descError = document.getElementById('descError');

// Set current year in footer
currentYearSpan.textContent = new Date().getFullYear();

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    // Sort events by date
    sortEvents();
    
    // Display initial events
    displayEvents(events);
    
    // Set today's date as default for the date picker
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('eventDate').value = today;
    document.getElementById('eventDate').min = today;
});

// Function to display events
function displayEvents(eventsArray) {
    eventsContainer.innerHTML = '';
    
    if (eventsArray.length === 0) {
        noEventsMessage.style.display = 'block';
        eventCount.textContent = '0';
        return;
    }
    
    noEventsMessage.style.display = 'none';
    eventCount.textContent = eventsArray.length;
    
    eventsArray.forEach(event => {
        const eventCard = createEventCard(event);
        eventsContainer.appendChild(eventCard);
    });
}

// Function to create an event card
function createEventCard(event) {
    const eventCard = document.createElement('div');
    eventCard.className = 'event-card';
    
    // Check if event is in the past
    const eventDate = new Date(event.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (eventDate < today) {
        eventCard.classList.add('past');
    }
    
    // Format date for display
    const formattedDate = formatDate(event.date);
    
    eventCard.innerHTML = `
        <div class="event-header">
            <h3>${event.name}</h3>
            <span class="event-date">${formattedDate}</span>
        </div>
        <div class="event-body">
            <p class="event-description">${event.description}</p>
            <div class="event-actions">
                <button class="delete-btn" data-id="${event.id}">
                    <i class="fas fa-trash-alt"></i> Delete Event
                </button>
            </div>
        </div>
    `;
    
    // Add event listener to delete button
    const deleteBtn = eventCard.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => deleteEvent(event.id));
    
    return eventCard;
}

// Function to format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Function to add a new event
function addEvent(event) {
    // Generate a unique ID (in a real app, this would come from a database)
    const newId = events.length > 0 ? Math.max(...events.map(e => e.id)) + 1 : 1;
    
    const newEvent = {
        id: newId,
        name: event.name,
        date: event.date,
        description: event.description
    };
    
    events.push(newEvent);
    sortEvents();
    displayEvents(events);
    
    // Clear search if active
    searchInput.value = '';
    
    // Show success message
    showNotification(`Event "${event.name}" added successfully!`, 'success');
}

// Function to delete an event
function deleteEvent(eventId) {
    const eventIndex = events.findIndex(event => event.id === eventId);
    
    if (eventIndex !== -1) {
        const eventName = events[eventIndex].name;
        events.splice(eventIndex, 1);
        displayEvents(events);
        
        // Show notification
        showNotification(`Event "${eventName}" deleted successfully!`, 'info');
    }
}

// Function to sort events by date
function sortEvents() {
    events.sort((a, b) => new Date(a.date) - new Date(b.date));
}

// Function to search events
function searchEvents(searchTerm) {
    if (!searchTerm.trim()) {
        displayEvents(events);
        return;
    }
    
    const filteredEvents = events.filter(event => {
        const searchLower = searchTerm.toLowerCase();
        return (
            event.name.toLowerCase().includes(searchLower) ||
            event.date.includes(searchTerm) ||
            formatDate(event.date).toLowerCase().includes(searchLower)
        );
    });
    
    displayEvents(filteredEvents);
}

// Function to validate form
function validateForm() {
    let isValid = true;
    
    // Clear previous error messages
    nameError.textContent = '';
    dateError.textContent = '';
    descError.textContent = '';
    
    // Get form values
    const eventName = document.getElementById('eventName').value.trim();
    const eventDate = document.getElementById('eventDate').value;
    const eventDescription = document.getElementById('eventDescription').value.trim();
    
    // Validate event name
    if (!eventName) {
        nameError.textContent = 'Event name is required';
        isValid = false;
    } else if (eventName.length < 3) {
        nameError.textContent = 'Event name must be at least 3 characters';
        isValid = false;
    }
    
    // Validate event date
    if (!eventDate) {
        dateError.textContent = 'Event date is required';
        isValid = false;
    } else {
        const selectedDate = new Date(eventDate);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (selectedDate < today) {
            dateError.textContent = 'Event date cannot be in the past';
            isValid = false;
        }
    }
    
    // Validate event description
    if (!eventDescription) {
        descError.textContent = 'Event description is required';
        isValid = false;
    } else if (eventDescription.length < 10) {
        descError.textContent = 'Description must be at least 10 characters';
        isValid = false;
    }
    
    return isValid ? { name: eventName, date: eventDate, description: eventDescription } : null;
}

// Function to show notification
function showNotification(message, type) {
    // Remove any existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        <span>${message}</span>
        <button class="notification-close"><i class="fas fa-times"></i></button>
    `;
    
    // Add notification to page
    document.body.appendChild(notification);
    
    // Show notification with animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    });
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }
    }, 5000);
    
    // Add CSS for notifications if not already present
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: white;
                padding: 15px 20px;
                border-radius: 8px;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
                display: flex;
                align-items: center;
                gap: 10px;
                z-index: 10000;
                transform: translateX(150%);
                transition: transform 0.3s ease;
                max-width: 400px;
            }
            .notification.show {
                transform: translateX(0);
            }
            .notification.success {
                border-left: 5px solid #ea8b0e;
            }
            .notification.info {
                border-left: 5px solid #6708e3;
            }
            .notification i {
                font-size: 1.5rem;
            }
            .notification.success i {
                color: rgb(19, 248, 84);
            }
            .notification.info i {
                color: #3498db;
            }
            .notification-close {
                background: none;
                border: none;
                color: #108ffe;
                cursor: pointer;
                margin-left: auto;
                font-size: 1.2rem;
            }
            @media (max-width: 768px) {
                .notification {
                    left: 20px;
                    right: 20px;
                    max-width: none;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Event Listeners

// Form submission
eventForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const validatedData = validateForm();
    
    if (validatedData) {
        addEvent(validatedData);
        eventForm.reset();
        
        // Reset date to today
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('eventDate').value = today;
    } else {
        showNotification('Please fix the errors in the form', 'info');
    }
});

// Search functionality
searchInput.addEventListener('input', function() {
    searchEvents(this.value);
});

// Clear search button
clearSearchBtn.addEventListener('click', function() {
    searchInput.value = '';
    displayEvents(events);
});

// Reset form button
resetBtn.addEventListener('click', function() {
    eventForm.reset();
    
    // Reset date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('eventDate').value = today;
    
    // Clear error messages
    nameError.textContent = '';
    dateError.textContent = '';
    descError.textContent = '';
});
