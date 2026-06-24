import { timeManager } from './time.js';
import { fetchGitHubPRs } from './api.js';

/**
 * Main Application Orchestrator
 * Initializes components and handles UI state transitions.
 */
class App {
    constructor() {
        this.prContainer = document.getElementById('pr-list-container');
    }

    /**
     * Entry point for the dashboard.
     */
    async init() {
        // Initialize Clock
        timeManager.start();

        // Load GitHub Data
        await this.loadPRs();
    }

    /**
     * Handles the fetching and rendering of PRs.
     */
    async loadPRs() {
        try {
            const prs = await fetchGitHubPRs();
            this.renderPRs(prs);
        } catch (error) {
            this.renderError('Failed to load GitHub data. Please check your connection.');
        }
    }

    /**
     * Renders the list of PRs to the DOM.
     * @param {Array} prs 
     */
    renderPRs(prs) {
        if (prs.length === 0) {
            this.prContainer.innerHTML = '<div class="empty-message">No open pull requests found.</div>';
            return;
        }

        // Use DocumentFragment for better performance with multiple DOM insertions
        const fragment = document.createDocumentFragment();

        prs.forEach(pr => {
            const prElement = document.createElement('a');
            prElement.href = pr.url;
            prElement.target = '_blank';
            prElement.className = 'pr-item';
            
            prElement.innerHTML = `
                <span class="pr-number">#${pr.number}</span>
                <span class="pr-title" title="${pr.title}">${pr.title}</span>
            `;
            
            fragment.appendChild(prElement);
        });

        this.prContainer.innerHTML = '';
        this.prContainer.appendChild(fragment);
    }

    /**
     * Renders an error message to the PR container.
     * @param {string} message 
     */
    renderError(message) {
        this.prContainer.innerHTML = `<div class="error-message">${message}</div>`;
    }
}

// Initialize the application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.init();
});
