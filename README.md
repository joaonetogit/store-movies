# Movie Store Frontend

This is the frontend for the Movie Store application, developed to consume the [Movie Store API](https://github.com/joaonetogit/api-movie-store). The project is built with ReactJS and TypeScript, using various modern libraries and tools to create an efficient and responsive user interface.

## Technologies Used

- **ReactJS + TypeScript**: Framework and main language for development.
- **React Router Dom**: Route management.
- **TailwindCSS**: Fast and responsive styling.
- **ShadcnUI**: Reusable UI components.
- **Zustand**: State management.
- **ViteJS**: Fast and efficient build tool.
- **React Query**: Asynchronous state management and caching.
- **Axios**: Execution of HTTP requests.
- **ESLint + Prettier**: Code linting and formatting.
- **Vitest**: Unit tests.

## Installation

1. Clone this repository:

```bash
git clone https://github.com/joaonetogit/movie-store.git
```

2. Install the dependencies:

```bash
pnpm install
```

## Use

To start the development server, run the following command:

```bash
pnpm dev
```

## Available scripts

- `pnpm dev`: Starts the development server.
- `pnpm build`: Creates a production version of the application.
- `pnpm lint`: Runs ESLint to check for linting problems.
- `pnpm prettier`: Runs Prettier to format the code.
- `pnpm test`: Runs tests using Vitest.

## Project structure

- **src/**: Main source code directory.
  - **__tests__/**: Unit tests.
  - **api/**: Axios settings.
  - **components/**: Reusable components.
  - **functions/**: API settings and calls.
  - **pages/**: Application pages.
  - **store/**: Zustand settings for state management.

## Contribution

1. Fork this repository.
2. Create a new branch: `git checkout -b my-feature`.
3. Make your changes and commit: `git commit -m 'My new feature'`.
4. Send it to the original branch: `git push origin my-feature`.
5. Create a pull request.
