 // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Select DOM elements
    const eventForm = document.getElementById('event-form');
    const eventsContainer = document.getElementById('events-container');
    const noEventsMsg = document.getElementById('no-events-msg');
    const searchInput = document.getElementById('search-input'); // New element
    
    // 1. Display initial events from a predefined array of objects
    let events = [
        {
            name: "Tech Conference 2023",
            date: "2023-11-15",
            description: "A conference about the latest in AI and Web Development."
        },
        {
            name: "Summer Music Festival",
            date: "2024-06-20",
            description: "Live music performances and food stalls."
        },
        {
            name: "Workshop: Intro to React",
            date: "2022-10-05", // This is a past date
            description: "Learn the basics of React.js in one day."
        }
    ];

    // Function to render events to the DOM
    function renderEvents() {
        // Clear current list
        eventsContainer.innerHTML = '';

        // Get today's date at midnight for comparison
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // 6. Add a search bar to filter events by name or date
        const searchTerm = searchInput.value.toLowerCase();

        // Filter events based on search term
        const filteredEvents = events.filter(event => {
            const nameMatch = event.name.toLowerCase().includes(searchTerm);
            const dateMatch = event.date.includes(searchTerm);
            return nameMatch || dateMatch;
        });

        // Handle "No events" message
        if (filteredEvents.length === 0) {
            if (events.length === 0) {
                noEventsMsg.textContent = "No events available. Add one above!";
            } else {
                noEventsMsg.textContent = "No events match your search.";
            }
            eventsContainer.appendChild(noEventsMsg);
            noEventsMsg.style.display = 'block';
            return;
        } else {
            noEventsMsg.style.display = 'none';
        }

        // Loop through events and create HTML elements
        filteredEvents.forEach((event, index) => {
            // Note: We must find the real index in the main 'events' array to delete correctly,
            // not the index in the filtered array.
            const originalIndex = events.indexOf(event);

            const eventCard = document.createElement('div');
            eventCard.classList.add('event-card');

            // 4. Highlight events in the past date differently
            const eventDateObj = new Date(event.date);
            if (eventDateObj < today) {
                eventCard.classList.add('past');
            } else {
                eventCard.classList.add('upcoming');
            }

            const eventName = document.createElement('h3');
            eventName.textContent = event.name;

            const eventDate = document.createElement('p');
            eventDate.innerHTML = `<strong>Date:</strong> ${event.date}`;

            const eventDesc = document.createElement('p');
            eventDesc.classList.add('description');
            eventDesc.textContent = event.description;

            // 3. Delete an event from the list
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.onclick = function() {
                deleteEvent(originalIndex);
            };

            // Append elements
            eventCard.appendChild(eventName);
            eventCard.appendChild(eventDate);
            eventCard.appendChild(eventDesc);
            eventCard.appendChild(deleteBtn);

            eventsContainer.appendChild(eventCard);
        });
    }

    // 2. Add new events dynamically from the form
    eventForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent page reload

        // Get values
        const nameInput = document.getElementById('event-name');
        const dateInput = document.getElementById('event-date');
        const descInput = document.getElementById('event-desc');

        // Validation: Ensure HTML5 'required' attribute caught it, but double check JS side
        if (!nameInput.value || !dateInput.value || !descInput.value) {
            // 2b. Display a warning message if the form is incomplete
            alert("Please fill in all fields!"); 
            return;
        }

        // Create object
        const newEvent = {
            name: nameInput.value,
            date: dateInput.value,
            description: descInput.value
        };

        // Add to array
        events.push(newEvent);

        // 5. Sort events by date in ascending order automatically after adding
        events.sort((a, b) => new Date(a.date) - new Date(b.date));

        // Update UI
        renderEvents();
        
        // Reset form
        eventForm.reset();
    });

    // Function to handle deletion
    function deleteEvent(index) {
        if (confirm('Are you sure you want to delete this event?')) {
            events.splice(index, 1);
            renderEvents();
        }
    }

    // Event Listener for Search Bar (Real-time filtering)
    searchInput.addEventListener('input', function() {
        renderEvents();
    });

    // Initial render when page loads
    renderEvents();