/**
 * Time and Date Logic Module
 * Handles the live updating clock and date display with DOM caching.
 */

class TimeManager {
    constructor() {
        this.clockElement = document.getElementById('clock');
        this.dateElement = document.getElementById('date');
        this.intervalId = null;
    }

    /**
     * Starts the clock interval.
     */
    start() {
        this.update();
        this.intervalId = setInterval(() => this.update(), 1000);
    }

    /**
     * Stops the clock interval.
     */
    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }

    /**
     * Updates the DOM with the current time and date.
     */
    update() {
        const now = new Date();
        
        // Format: HH:MM:SS
        this.clockElement.textContent = now.toLocaleTimeString('en-US', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });

        // Format: Day, Month Date, Year (e.g., Tuesday, May 5, 2026)
        this.dateElement.textContent = now.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
}

export const timeManager = new TimeManager();
