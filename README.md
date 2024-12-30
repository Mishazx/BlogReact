# React Blog Application

## Overview

This is a modern, responsive React blog application that fetches and displays blog posts and comments using a public API. The application features a clean, dark-mode-compatible design with dynamic post listing and detailed post views.

## Features

- 🌐 Fetches posts and comments from JSONPlaceholder API
- 📱 Responsive design with dark mode support
- 🎨 Flexible grid layout for post listing
- 💬 Detailed post comments view
- 🔄 Dynamic column layout selection

## Technologies Used

- React
- TypeScript
- CSS Modules
- Fetch API
- JSONPlaceholder API

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/Mishazx/BlogReact.git
cd BlogReact
```

2. Install dependencies
```bash
npm i
```

3. Start the development server
```bash
npm run dev
```

## Project Structure

```
src/
├── components/
│   ├── Common/
│   ├── Header/
│   ├── LoadingSpinner/
│   ├── PostDetail/
│   └── PostList/
├── services/
│   └── api.ts
└── types.ts
```

## Available Scripts

- `npm run dev`: Runs the app in development mode
- `npm run build`: Builds the app for production
- `npm test`: Launches the test runner

## Customization

- Modify `src/services/api.ts` to change API endpoints
- Update `src/types.ts` to adjust data models
- Customize styles in CSS module files

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
