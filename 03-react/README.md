# ⚛️ React Ecosystem

Master React and the modern React ecosystem for building scalable frontend applications.

## 📚 Table of Contents

1. [React Fundamentals](#react-fundamentals)
2. [Hooks](#hooks)
3. [State Management](#state-management)
4. [Performance Optimization](#performance-optimization)
5. [Routing](#routing)
6. [Testing](#testing)
7. [Best Practices](#best-practices)

---

## React Fundamentals

### What is React?

React is a JavaScript library for building user interfaces. Key concepts:
- **Component-based**: Build reusable UI components
- **Virtual DOM**: Efficient updates
- **Declarative**: Describe UI state
- **Unidirectional data flow**: Predictable state management

### JSX (JavaScript XML)

```jsx
// JSX syntax
const element = <h1>Hello, React!</h1>;

// JSX with JavaScript expressions
const name = "John";
const element = <h1>Hello, {name}!</h1>;

// JSX with attributes
const element = <img src={imageUrl} alt="Description" />;

// JSX must have one parent element
const element = (
  <div>
    <h1>Title</h1>
    <p>Content</p>
  </div>
);
```

### Components

**Functional Components (Recommended):**
```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Arrow function
const Welcome = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};
```

**Class Components:**
```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```

### Props

```jsx
// Passing props
function App() {
  return <Welcome name="John" age={30} />;
}

// Receiving props
function Welcome({ name, age }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
    </div>
  );
}

// Props with default values
function Welcome({ name = "Guest", age = 0 }) {
  return <h1>Hello, {name}!</h1>;
}
```

### Event Handling

```jsx
function Button() {
  const handleClick = () => {
    console.log('Button clicked!');
  };
  
  return <button onClick={handleClick}>Click me</button>;
}

// With event object
function Input() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  
  return <input onChange={handleChange} />;
}

// Preventing default
function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

## Hooks

### useState

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>
    </div>
  );
}
```

### useEffect

```jsx
import { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  
  // Run on mount
  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(data => setData(data));
  }, []); // Empty dependency array
  
  // Run on dependency change
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]); // Runs when count changes
  
  // Cleanup
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Tick');
    }, 1000);
    
    return () => clearInterval(timer); // Cleanup on unmount
  }, []);
  
  return <div>{data && <p>{data.message}</p>}</div>;
}
```

### useContext

```jsx
import { createContext, useContext } from 'react';

const ThemeContext = createContext();

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Header />
    </ThemeContext.Provider>
  );
}

function Header() {
  const theme = useContext(ThemeContext);
  return <header className={theme}>Header</header>;
}
```

### useReducer

```jsx
import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}
```

### Custom Hooks

```jsx
// Custom hook
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);
  
  return { count, increment, decrement, reset };
}

// Using custom hook
function Counter() {
  const { count, increment, decrement, reset } = useCounter(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```

### useCallback and useMemo

```jsx
import { useCallback, useMemo, useState } from 'react';

function ExpensiveComponent({ items, onItemClick }) {
  // Memoize expensive calculation
  const expensiveValue = useMemo(() => {
    return items.reduce((sum, item) => sum + item.value, 0);
  }, [items]);
  
  // Memoize callback
  const handleClick = useCallback((id) => {
    onItemClick(id);
  }, [onItemClick]);
  
  return (
    <div>
      <p>Total: {expensiveValue}</p>
      {items.map(item => (
        <button key={item.id} onClick={() => handleClick(item.id)}>
          {item.name}
        </button>
      ))}
    </div>
  );
}
```

---

## State Management

### Local State vs Global State

**Local State (useState):**
- Component-specific
- Pass down via props
- Use for UI state (forms, toggles)

**Global State:**
- Shared across components
- Use Context API or Redux
- Use for app-wide data (user, theme, cart)

### Context API

```jsx
import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
}
```

### Redux Toolkit

```jsx
// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;

// Component
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
```

---

## Performance Optimization

### React.memo

```jsx
import { memo } from 'react';

const ExpensiveComponent = memo(({ data }) => {
  // Only re-renders if props change
  return <div>{data.name}</div>;
});

// Custom comparison
const ExpensiveComponent = memo(
  ({ data }) => <div>{data.name}</div>,
  (prevProps, nextProps) => prevProps.data.id === nextProps.data.id
);
```

### Code Splitting

```jsx
import { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
```

### Virtualization

For long lists, use react-window or react-virtualized:

```jsx
import { FixedSizeList } from 'react-window';

function VirtualizedList({ items }) {
  return (
    <FixedSizeList
      height={600}
      itemCount={items.length}
      itemSize={50}
      width="100%"
    >
      {({ index, style }) => (
        <div style={style}>
          {items[index].name}
        </div>
      )}
    </FixedSizeList>
  );
}
```

---

## Routing

### React Router

```jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users/:id" element={<UserProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

// Accessing route parameters
function UserProfile() {
  const { id } = useParams();
  return <div>User ID: {id}</div>;
}

// Navigation
function Navigation() {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/about');
  };
  
  return <button onClick={handleClick}>Go to About</button>;
}
```

---

## Best Practices

### Component Structure

```jsx
// 1. Imports
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// 2. Component
function Component({ prop1, prop2 }) {
  // 3. Hooks
  const [state, setState] = useState(null);
  
  useEffect(() => {
    // Side effects
  }, []);
  
  // 4. Event handlers
  const handleClick = () => {
    // Handler logic
  };
  
  // 5. Render
  return <div>{/* JSX */}</div>;
}

// 6. PropTypes
Component.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.number,
};
```

### Naming Conventions

- Components: PascalCase (`UserProfile`)
- Functions: camelCase (`handleSubmit`)
- Constants: UPPER_SNAKE_CASE (`API_URL`)
- Hooks: Start with `use` (`useFetch`)

### File Organization

```
src/
├── components/
│   ├── Button/
│   │   ├── Button.jsx
│   │   ├── Button.test.js
│   │   └── Button.module.css
│   └── Header/
├── hooks/
│   └── useFetch.js
├── utils/
│   └── helpers.js
├── store/
│   └── index.js
└── pages/
    └── Home.jsx
```

---

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Patterns](https://reactpatterns.com/)

---

**Next**: [Performance Optimization](../07-performance/README.md)

