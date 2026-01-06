# Rsbuild project

## Setup

Install the dependencies:

```bash
pnpm install
```

## Get started

Start the dev server, and the app will be available at [http://localhost:3000](http://localhost:3000).

```bash
pnpm run dev
```

Build the app for production:

```bash
pnpm run build
```

Preview the production build locally:

```bash
pnpm run preview
```

## Learn more

To learn more about Rsbuild, check out the following resources:

- [Rsbuild documentation](https://rsbuild.rs) - explore Rsbuild features and APIs.
- [Rsbuild GitHub repository](https://github.com/web-infra-dev/rsbuild) - your feedback and contributions are welcome!

Features
Task Management: Create new tasks with a title, due date, and optional description.

Inline Editing: Edit task titles, descriptions, and dates directly within the list using the EditableField component.

Organization:

Sorting: Sort tasks by Name or Due Date.

Filtering: Filter tasks by "All", "Done", or "Not Done" status.

Bulk Actions: Option to delete all tasks at once.

State Management: Powered by Zustand for predictable global state handling.

Error Handling: Global error popup system to alert users of API or validation failures.

Persistence: All data is synced with a remote REST API.

Component Description
App: The root component that wraps the application in ErrorBoundary and Suspense. It orchestrates the main layout.

TodoCreationForm: Handles input validation and submission of new tasks.

TodoManagement: Provides controls for sorting, filtering, and bulk deletion.

TodoList: Filters and sorts the raw todo list based on store state before rendering items.

TodoItem: Represents a single task card with a checkbox and delete button.

EditableField: A reusable UI component that switches between read-only text and an input/textarea for inline editing.
