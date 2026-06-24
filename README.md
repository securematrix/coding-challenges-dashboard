# Coding Challenges Dashboard Extension

A production-ready Chrome Extension that overrides the New Tab page with a custom dashboard.

## File Structure
- `manifest.json`: Extension configuration (MV3).
- `newtab.html`: The dashboard structure.
- `styles.css`: Premium aesthetics and layout.
- `main.js`: Main logic and orchestration.
- `api.js`: GitHub API integration.
- `time.js`: Live clock and date logic.

## How to Load the Extension
1. Open Google Chrome.
2. Navigate to `chrome://extensions/`.
3. Enable **Developer mode** in the top right corner.
4. Click **Load unpacked**.
5. Select the `chrome extention` folder where these files are located.
6. Open a new tab to see your dashboard!

## Features
- **Dynamic Background**: Coding Challenges theme (#04295B).
- **Live Clock**: Updates every second with precise time and date.
- **GitHub Integration**: Fetches real-time open Pull Requests from the `SharedSolutions` repository.
- **Modular Code**: Clean separation of concerns following engineering standards.
