# Acme Dashboard

A modern analytics dashboard built with React, TypeScript, and Material-UI. The Acme Dashboard provides real-time data visualization and insights with a clean, responsive user interface.

## Features

- Real-time data visualization with interactive charts
- Responsive design that works on desktop and mobile
- Dark mode support with customizable theming
- Modular component architecture
- Type-safe development with TypeScript
- Smooth animations and transitions
- RESTful API integration ready

## Technology Stack

- React 19
- TypeScript 5.8
- Material-UI (MUI) 7
- Recharts for data visualization
- Framer Motion for animations
- React Router for navigation
- Vite for fast development and building

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or bun package manager

### Installation

1. Clone the repository
   ```
   git clone https://github.com/Ankitmohanty2/Acme-Dashboard.git
   cd Acme-Dashboard
   ```

2. Install dependencies
   ```
   npm install
   ```
   or if using bun:
   ```
   bun install
   ```

### Running the Application

Start the development server:
```
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Build the application for production:
```
npm run build
```

Preview the production build:
```
npm run preview
```

## Project Structure

```
Acme-Dashboard/
├── components/          # Reusable React components
├── api/                # API integration and utilities
├── constants/          # Application constants
├── utils/              # Helper functions and utilities
├── App.tsx             # Main application component
├── index.tsx           # Entry point
├── theme.ts            # Material-UI theme configuration
├── types.ts            # TypeScript type definitions
├── vite.config.ts      # Vite configuration
└── tsconfig.json       # TypeScript configuration
```

## Development

The application uses Vite as the build tool for fast HMR and optimized builds. All components are built with React hooks and follow modern React best practices.

### Key Components

- Dashboard: Main analytics view
- Sidebar: Navigation component
- ErrorBoundary: Error handling and fallback UI

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Contributing

Contributions are welcome. Please feel free to submit a pull request or open an issue for bugs and feature requests.

## License

This project is part of the Acme Corporation suite of applications.
