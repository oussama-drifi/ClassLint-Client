# Gestion Emploi du Temps

A web application for managing and visualizing weekly training schedules for student groups. Built for internal use at a vocational training center, it allows staff to view timetables by week, track session progress per group, and add new sessions through a modal interface.

---

## Features

- Weekly schedule view per group (Mon–Sat, 4 sessions/day)
- Session progress statistics per group (Summary page)
- Add session modal with module, room, and instructor selection
- Skeleton loading states during data fetch
- Icon-only sidebar navigation
- Deployed on Vercel

---

## Pages

| Route | Page | Description |
|---|---|---|
| `/sommaire` | Summary | Progress statistics per group |
| `/emploi` | Schedule | Weekly timetable grid |
| `/formateurs` | Instructors | Instructor management (WIP) |
| `/ajouter` | Add New | Add new entries (WIP) |
| `/paramètres` | Settings | App settings (WIP) |

---

## Project Structure

```
src/
├── app/
│   ├── slices/         # Redux slices (sessions, statistics, addSession)
│   └── selectors/      # Reselect selectors
├── components/
│   ├── SideBar/        # Global sidebar navigation
│   └── selectMenu/     # Reusable dropdown component
├── features/
│   ├── Schedule/       # Schedule table, session card, add session modal
│   └── Summary/        # Group statistics, skeleton loaders
├── hooks/              # Custom hooks (useFetch)
├── pages/              # Page-level components per route
├── routes/             # AppRoutes (React Router config)
└── assets/
```

---

## Tech Stack

| Purpose | Package |
|---|---|
| Framework | React 19 |
| Build tool | Vite 6 |
| Language | TypeScript |
| Routing | React Router v7 |
| State management | Redux Toolkit + React Redux |
| HTTP client | Axios |
| Icons | Lucide React |
| Font | Poppins (`@fontsource/poppins`) |

---

## Backend

The app connects to a local Flask API running at `http://127.0.0.1:5000`. The following endpoints are consumed:

- `GET /api/emploi/:week_id` — fetch sessions for a given week
- `GET /api/progress` — fetch group progress statistics
- `GET /api/modules/:group_id` — fetch modules available for a group

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

> Make sure the Flask backend is running locally before starting the dev server.

---

## Linting

```bash
npm run lint
```

ESLint is configured with `@typescript-eslint`, `eslint-plugin-react-hooks`, and `eslint-plugin-react-refresh`.
