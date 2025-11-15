/**
 * React Components and Props Examples
 * To run: Create a React app and use these components
 */

import React from 'react';

// 1. Functional Component
function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// 2. Arrow Function Component
const WelcomeArrow = ({ name, age }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
    </div>
  );
};

// 3. Component with Default Props
function Greeting({ name = 'Guest', greeting = 'Hello' }) {
  return (
    <div>
      <p>{greeting}, {name}!</p>
    </div>
  );
}

// 4. Component with Children
function Card({ title, children }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

// Usage:
// <Card title="User Profile">
//   <p>Card content here</p>
// </Card>

// 5. Conditional Rendering
function UserStatus({ isLoggedIn, username }) {
  return (
    <div>
      {isLoggedIn ? (
        <p>Welcome back, {username}!</p>
      ) : (
        <p>Please log in.</p>
      )}
    </div>
  );
}

// 6. Component with PropTypes (for type checking)
import PropTypes from 'prop-types';

function Button({ label, onClick, variant = 'primary', disabled = false }) {
  return (
    <button
      className={`btn btn-${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  disabled: PropTypes.bool
};

// 7. List Rendering
function UserList({ users }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  );
}

// 8. Fragment Usage
function ListItems() {
  return (
    <>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </>
  );
}

// Or using Fragment explicitly
function ListItemsWithFragment() {
  return (
    <React.Fragment>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </React.Fragment>
  );
}

// 9. Composition Pattern
function Page({ header, sidebar, content, footer }) {
  return (
    <div className="page">
      {header && <header>{header}</header>}
      <div className="page-body">
        {sidebar && <aside>{sidebar}</aside>}
        <main>{content}</main>
      </div>
      {footer && <footer>{footer}</footer>}
    </div>
  );
}

// Usage:
// <Page
//   header={<Header />}
//   sidebar={<Sidebar />}
//   content={<MainContent />}
//   footer={<Footer />}
// />

// 10. Render Props Pattern
function MouseTracker({ render }) {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return render(position);
}

// Usage:
// <MouseTracker
//   render={({ x, y }) => (
//     <p>Mouse position: {x}, {y}</p>
//   )}
// />

export {
  Welcome,
  WelcomeArrow,
  Greeting,
  Card,
  UserStatus,
  Button,
  UserList,
  ListItems,
  Page,
  MouseTracker
};

