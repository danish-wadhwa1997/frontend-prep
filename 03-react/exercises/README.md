# 📝 React Exercises

Practice problems to build React skills from beginner to advanced.

## Exercises

### Beginner Level

#### Exercise 1: Basic Components
**File**: `exercise-01-components.jsx`

Create the following components:
1. A `Button` component that accepts `label`, `onClick`, and `variant` props
2. A `Card` component with `title` and `children`
3. A `UserCard` component that displays user information (name, email, avatar)
4. Use these components in an `App` component

---

#### Exercise 2: State Management
**File**: `exercise-02-state.jsx`

Build a todo list application:
1. Add new todos
2. Mark todos as complete
3. Delete todos
4. Filter todos (all, active, completed)
5. Count remaining todos

---

#### Exercise 3: Forms and Input Handling
**File**: `exercise-03-forms.jsx`

Create a registration form with:
1. Name input
2. Email input with validation
3. Password input with strength indicator
4. Age selector
5. Terms and conditions checkbox
6. Submit button with form validation
7. Display submitted data on success

---

### Intermediate Level

#### Exercise 4: Custom Hooks
**File**: `exercise-04-custom-hooks.jsx`

Create custom hooks:
1. `useToggle` - Toggle boolean state
2. `useLocalStorage` - Sync state with localStorage
3. `useDebounce` - Debounce a value
4. `useFetch` - Fetch data with loading/error states
5. Build components using each hook

---

#### Exercise 5: Context API
**File**: `exercise-05-context.jsx`

Build a theme switcher:
1. Create a `ThemeContext` with light/dark themes
2. Create a `ThemeProvider` component
3. Create a `ThemeToggle` button
4. Apply theme to multiple components
5. Persist theme preference in localStorage

---

#### Exercise 6: Performance Optimization
**File**: `exercise-06-performance.jsx`

Optimize a list component:
1. Create a large list (1000+ items)
2. Use `React.memo` to prevent unnecessary re-renders
3. Use `useMemo` for expensive calculations
4. Use `useCallback` for event handlers
5. Implement virtual scrolling (optional)

---

### Advanced Level

#### Exercise 7: Advanced Patterns
**File**: `exercise-07-patterns.jsx`

Implement these patterns:
1. **Compound Components**: Build a `Tabs` component with `TabList` and `TabPanel`
2. **Render Props**: Create a `MouseTracker` component
3. **Higher-Order Component**: Create a `withAuth` HOC
4. **Custom Hook Pattern**: Refactor HOC to use custom hook

---

#### Exercise 8: Complete Application
**File**: `exercise-08-app/`

Build a complete e-commerce product listing:
1. Fetch products from an API
2. Display products in a grid
3. Filter by category
4. Search products
5. Sort by price/name
6. Add to cart functionality
7. Shopping cart sidebar
8. Responsive design

**Structure:**
```
exercise-08-app/
├── components/
│   ├── ProductCard.jsx
│   ├── ProductGrid.jsx
│   ├── FilterSidebar.jsx
│   ├── Cart.jsx
│   └── SearchBar.jsx
├── hooks/
│   └── useProducts.js
├── context/
│   └── CartContext.jsx
└── App.jsx
```

---

#### Exercise 9: Testing
**File**: `exercise-09-testing.test.jsx`

Write tests for your components:
1. Test button clicks
2. Test form submissions
3. Test custom hooks
4. Test context providers
5. Test async operations

---

#### Exercise 10: Routing
**File**: `exercise-10-routing.jsx`

Set up React Router:
1. Create a navigation component
2. Set up routes for Home, About, Products, Contact
3. Create a Product detail page with dynamic route
4. Implement protected routes (require authentication)
5. Add 404 page

---

## Solutions

Check the `../solutions/` directory for example solutions.

## Tips

- Start with simple components and gradually add complexity
- Use React DevTools to debug
- Test your components frequently
- Focus on understanding React patterns, not just solving
- Refactor code as you learn better patterns

---

**Happy coding! 💻**

