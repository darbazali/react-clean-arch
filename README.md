# React Project Structure Documentation

## Folder Structure

```
src/
├── adapters/
│   ├── api/
│   └── storage/
├── assets/
├── components/
│   ├── common/
│   └── layout/
├── core/
│   └── module/
├── features/
│   ├── posts/
│   │   ├── components/
│   │   ├── page/
│   │   ├── hooks/
│   │   └── service/
│   └── [other-features]/
├── styles/
├── utils/
├── hooks/
├── App.tsx
├── AppRoutes.tsx
└── main.tsx
```

## Explanation of Structure

### adapters/

This folder contains code that interfaces with external systems or libraries.

- `api/`: API client, related utilities, and configrations.
- `storage/`: Local storage, session storage, or other client-side persistence mechanisms.

### assets/

Static files such as images, fonts, and other media resources.

### components/

Reusable React components that are not specific to any feature.

- `common/`: Shared components like buttons, inputs, modals, etc.
- `layout/`: Components related to the overall layout of the app (e.g., Header, Footer, Sidebar).

### core/

The central part of the application, containing core business logic.

- `module/`: Core modules that implement business rules and logic, independent of UI or external interfaces.

### features/

Feature-specific code, organized using Feature-Driven Development principles. Each feature (e.g., posts) has its own folder containing:

- `components/`: React components specific to this feature.
- `page/`: Main page component(s) for the feature.
- `hooks/`: Custom React hooks specific to this feature.
- `service/`: Feature-specific services that interact with adapters and core modules.

### styles/

Global styles, theme configurations, and style utilities.

### utils/

Utility functions and helpers that are used across the application.

### hooks/

Global custom React hooks that can be used across multiple features.

### Root Files

- `App.tsx`: Main application component.
- `AppRoutes.tsx`: Application routing configuration.
- `main.tsx`: Entry point of the application.

## Clean Architecture Implementation

This structure implements Clean Architecture principles adapted for a React application:

1. The `core/` directory represents the innermost layer, containing business logic independent of the UI or external systems.
2. The `features/` directory implements use cases and contains UI components, acting as a bridge between the core and the adapters.
3. The `adapters/` directory handles external interactions, keeping them separate from the business logic.
4. The `components/` directory contains reusable UI components, separate from business logic.

## Best Practices

1. Keep core business logic in the `core/module/` directory independent of React or any other framework.
2. Use services within features (`features/[feature-name]/service/`) to interact with core modules and adapters.
3. Implement feature-specific custom hooks in `features/[feature-name]/hooks/` to manage state and side effects.
4. Use the global `hooks/` directory for hooks that are shared across multiple features.
5. Keep adapters thin and focused on translating between the external world and your application's core.
6. Use the `components/` directory for truly reusable components that are used across multiple features.
7. Implement feature-specific pages in `features/[feature-name]/page/` that compose feature components and use feature hooks.

## Implementation Guide

1. **Core Modules**: Implement pure business logic in `core/module/`. These should be framework-agnostic and focus on data processing and business rules.
2. **Feature Services**: In `features/[feature-name]/service/`, create services that use core modules and adapters to implement feature-specific logic.
3. **Feature Hooks**: Implement custom hooks in `features/[feature-name]/hooks/` that use feature services and manage React state and side effects.
4. **Feature Components**: Create React components in `features/[feature-name]/components/` that use feature hooks to render UI and handle user interactions.
5. **Feature Pages**: Compose feature components in `features/[feature-name]/page/` to create full page views for the feature.
6. **Adapters**: Implement API configration and storage interactions in the `adapters/` directory, keeping them separate from business logic.
7. **Routing**: Use `AppRoutes.tsx` to define routes that lead to feature pages.

## Example Flow

For a "Create Post" feature:

1. Core module (`core/module/postModule.js`) defines post validation logic.
2. Feature service (`features/posts/service/postService.js`) uses the core module and API adapter to create a post.
3. Feature hook (`features/posts/hooks/useCreatePost.js`) uses the post service and manages form state.
4. Feature component (`features/posts/components/CreatePostForm.js`) uses the hook to render a form and handle submission.
5. Feature page (`features/posts/page/CreatePostPage.js`) composes the CreatePostForm and any other necessary components.

## Conclusion

This structure provides a clear separation of concerns while allowing for feature-focused development. It balances Clean Architecture principles with React's component-based nature, promoting maintainability and scalability of your application.
