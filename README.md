# Spear Check React Application

This project is a polished React application designed to help marketers draft accurate emails and copy by fact-checking their content in real-time. It uses a Notion document as a facts repository and leverages AI services for verification.

## Features

- Fetch and parse content from a provided Notion document
- Real-time fact-checking as users type their content
- AI-assisted fact-checking and suggestion generation
- User-friendly interface for displaying fact-checking results and suggestions

## Setup and Installation

1. Clone the repository:
   ```
   git clone https://github.com/Yedhuk95/spear-check.git
   cd spear-check
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your API keys:
   ```
   REACT_APP_NOTION_API_KEY=your_notion_api_key
   REACT_APP_OPENAI_API_KEY=your_openai_api_key
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.
6. Add a new Notion Integration on Notion Developers.
7. Add the integration as a connection to the document which will be shared.
8. The document must NOT BE private.
9. Share the link and fetch the content and type.

## Approach and Design Decisions

- Used Create React App for quick setup and standardized project structure
- Implemented functional components and React hooks for efficient state management
- Separated concerns by creating distinct components for different parts of the UI
- Used custom hooks (e.g., `useFactCheck`) to encapsulate complex logic
- Implemented services for AI and Notion API interactions to keep the code modular

## Third-Party Libraries and APIs

- React: Front-end library for building user interfaces
- Chakra UI : Component library for React
- Notion API: For fetching content from Notion documents
- OpenAI API: For AI-assisted fact-checking and suggestions
- Axios: For making HTTP requests

## Known Issues and Areas for Improvement

- Implement better error handling for API requests
- The Notion API is private and has to be integrated with the document before proceeding with link sharing
- Optimize performance and increment token size for larger documents
- Implement user authentication for secure and easier access to Notion documents
- Add ability to save and load multiple Notion documents as fact repositories

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
