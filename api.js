/**
 * GitHub API Logic Module
 * Handles fetching and parsing pull requests.
 */

const REPO_URL = 'https://api.github.com/repos/CodingChallegesFYI/SharedSolutions/pulls';

/**
 * Fetches open pull requests from the specified repository.
 * @returns {Promise<Array>} List of PR objects containing title and number.
 */
export async function fetchGitHubPRs() {
    try {
        const response = await fetch(REPO_URL, {
            headers: {
                'Accept': 'application/vnd.github.v3+json'
            }
        });

        if (!response.ok) {
            throw new Error(`GitHub API Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
            throw new Error('Invalid response format from GitHub API');
        }

        // Map only required fields for performance and clean code
        return data.map(pr => ({
            title: pr.title,
            number: pr.number,
            url: pr.html_url
        }));

    } catch (error) {
        console.error('Fetch failed:', error);
        throw error;
    }
}
