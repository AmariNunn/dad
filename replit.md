# TRI Creative - Promotional Products & Services Website

## Overview

A modern, futuristic-themed business website for TRI Creative, a promotional products and creative services company. The application features an interactive p5.js particle background with force field effects, glassmorphism UI design, and a quote request system backed by PostgreSQL.

The site showcases services including promotional products, apparel printing, business consulting, event planning, graphics design, and professional printing. Users can browse services, view product galleries, and submit quote requests through a form that stores data in the database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom dark futuristic theme using CSS variables
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Animations**: Framer Motion for page transitions and entry animations
- **Interactive Background**: p5.js canvas-based particle system with mouse force field effect
- **State Management**: TanStack React Query for server state and data fetching
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ESM modules
- **API Design**: RESTful endpoints defined in shared routes configuration
- **Build System**: Custom build script using esbuild for server and Vite for client

### Data Layer
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM with drizzle-zod for schema validation
- **Schema Location**: `shared/schema.ts` contains table definitions
- **Migrations**: Drizzle Kit for database migrations (`npm run db:push`)

### Project Structure
```
client/           # React frontend application
  src/
    components/   # Reusable UI components
    pages/        # Route page components
    hooks/        # Custom React hooks
    lib/          # Utilities and query client
server/           # Express backend
  index.ts        # Server entry point
  routes.ts       # API route handlers
  storage.ts      # Database operations
  db.ts           # Database connection
shared/           # Shared code between client/server
  schema.ts       # Drizzle database schema
  routes.ts       # API route definitions with Zod schemas
```

### Key Design Decisions

1. **Monorepo Structure**: Client and server share TypeScript types and validation schemas through the `shared/` directory, ensuring type safety across the stack.

2. **Path Aliases**: Configured `@/` for client source, `@shared/` for shared code, and `@assets/` for attached assets to simplify imports.

3. **Dark Theme First**: CSS variables define a dark futuristic color palette with neon cyan and purple accents, applied through Tailwind's color system.

4. **Component-Driven UI**: shadcn/ui provides accessible, customizable components that integrate with the dark theme through CSS variable overrides.

## External Dependencies

### Database
- **PostgreSQL**: Primary data store, connection via `DATABASE_URL` environment variable
- **Drizzle ORM**: Type-safe database queries and schema management

### Third-Party Libraries
- **p5.js**: Canvas rendering for interactive particle background
- **Framer Motion**: Animation library for page transitions
- **Radix UI**: Accessible UI primitives (dialog, dropdown, tabs, etc.)
- **TanStack Query**: Async state management for API calls
- **Zod**: Runtime type validation for forms and API payloads

### Development Tools
- **Vite**: Frontend build tool and dev server with HMR
- **esbuild**: Fast server bundling for production
- **TypeScript**: Type checking across the entire codebase

### Environment Variables Required
- `DATABASE_URL`: PostgreSQL connection string (required for database operations)