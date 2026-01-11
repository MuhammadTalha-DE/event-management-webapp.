// Initial events array
let events = [
    {
        id: 1,
        name: "Tech Conference 2023",
        date: "2023-12-15",
        description: "Annual technology conference with industry leaders and workshops on emerging technologies."
    },
    {
        id: 2,
        name: "Music Festival",
        date: "2023-11-20",
        description: "A weekend of live music featuring popular artists across multiple genres."
    },
    {
        id: 3,
        name: "Charity Gala",
        date: "2023-10-30",
        description: "Formal fundraising event to support local community initiatives."
    },
    {
        id: 4,
        name: "Startup Pitch Competition",
        date: "2024-01-25",
        description: "Entrepreneurs pitch their business ideas to a panel of investors."
    },
    {
        id: 5,
        name: "Art Exhibition Opening",
        date: "2024-02-10",
        description: "Opening night for a new contemporary art exhibition featuring local artists."
    }
];

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
                border-left: 5px solid #26d0ce;
            }
            .notification.info {
                border-left: 5px solid #3498db;
            }
            .notification i {
                font-size: 1.5rem;
            }
            .notification.success i {
                color: #26d0ce;
            }
            .notification.info i {
                color: #3498db;
            }
            .notification-close {
                background: none;
                border: none;
                color: #6c757d;
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
