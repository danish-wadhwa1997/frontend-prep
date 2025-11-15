# 🎨 CSS & HTML Mastery

Master modern CSS and HTML for building beautiful, responsive web applications.

## 📚 Table of Contents

1. [HTML5 Fundamentals](#html5-fundamentals)
2. [CSS Basics](#css-basics)
3. [Layout Systems](#layout-systems)
4. [Responsive Design](#responsive-design)
5. [Modern CSS Features](#modern-css-features)
6. [CSS Preprocessors](#css-preprocessors)
7. [Best Practices](#best-practices)

---

## HTML5 Fundamentals

### Semantic HTML

```html
<!-- Semantic elements -->
<header>Header content</header>
<nav>Navigation links</nav>
<main>
  <article>
    <section>
      <h1>Article Title</h1>
      <p>Article content</p>
    </section>
  </article>
  <aside>Sidebar content</aside>
</main>
<footer>Footer content</footer>
```

### Form Elements

```html
<form action="/submit" method="POST">
  <label for="email">Email:</label>
  <input 
    type="email" 
    id="email" 
    name="email" 
    required 
    placeholder="Enter your email"
  />
  
  <label for="password">Password:</label>
  <input 
    type="password" 
    id="password" 
    name="password" 
    minlength="8"
    required
  />
  
  <label for="age">Age:</label>
  <input type="number" id="age" name="age" min="18" max="100" />
  
  <label for="country">Country:</label>
  <select id="country" name="country">
    <option value="">Select a country</option>
    <option value="us">United States</option>
    <option value="uk">United Kingdom</option>
  </select>
  
  <label>
    <input type="checkbox" name="subscribe" />
    Subscribe to newsletter
  </label>
  
  <button type="submit">Submit</button>
</form>
```

### Accessibility (a11y)

```html
<!-- Use alt text for images -->
<img src="logo.png" alt="Company logo" />

<!-- Proper heading hierarchy -->
<h1>Main Title</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>

<!-- ARIA labels -->
<button aria-label="Close dialog">×</button>

<!-- Skip links -->
<a href="#main-content" class="skip-link">Skip to main content</a>
```

---

## CSS Basics

### CSS Selectors

```css
/* Element selector */
div { }

/* Class selector */
.class-name { }

/* ID selector */
#id-name { }

/* Attribute selector */
input[type="text"] { }

/* Descendant selector */
nav ul li { }

/* Child selector */
nav > ul { }

/* Adjacent sibling */
h1 + p { }

/* General sibling */
h1 ~ p { }

/* Pseudo-classes */
a:hover { }
input:focus { }
li:first-child { }
li:last-child { }
li:nth-child(2n) { }

/* Pseudo-elements */
p::before { content: "→ "; }
p::after { content: "."; }
p::first-line { }
```

### CSS Box Model

```css
.box {
  width: 200px;
  height: 100px;
  padding: 20px;        /* Inside space */
  border: 5px solid black;  /* Border */
  margin: 10px;         /* Outside space */
  
  /* Total width without box-sizing: 200 + 40 + 10 + 20 = 270px */
  
  box-sizing: border-box; /* Includes padding and border in width */
  /* Total width with box-sizing: 200px */
}
```

### Display Property

```css
/* Block - Full width, new line */
div { display: block; }

/* Inline - Width of content, no new line */
span { display: inline; }

/* Inline-block - Width of content, respects width/height */
button { display: inline-block; }

/* Flex - Flexbox container */
.container { display: flex; }

/* Grid - CSS Grid container */
.container { display: grid; }

/* None - Hidden */
.hidden { display: none; }

/* Hidden but maintains space */
.invisible { visibility: hidden; }
```

---

## Layout Systems

### Flexbox

```css
.container {
  display: flex;
  flex-direction: row;        /* row | column | row-reverse | column-reverse */
  justify-content: center;    /* Main axis alignment */
  align-items: center;        /* Cross axis alignment */
  flex-wrap: wrap;            /* wrap | nowrap */
  gap: 20px;                  /* Space between items */
}

.item {
  flex: 1;                    /* Grow, shrink, basis */
  flex-grow: 1;               /* Can grow */
  flex-shrink: 1;             /* Can shrink */
  flex-basis: 200px;          /* Base size */
  align-self: flex-start;     /* Individual alignment */
}

/* Common patterns */
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

### CSS Grid

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);  /* 3 equal columns */
  grid-template-rows: auto;                /* Auto rows */
  gap: 20px;                               /* Space between items */
  
  /* Named grid lines */
  grid-template-columns: [start] 1fr [middle] 1fr [end];
  
  /* Grid areas */
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
}

.item {
  grid-column: 1 / 3;         /* Span columns */
  grid-row: 1 / 2;            /* Span rows */
  grid-area: header;          /* Named area */
  
  /* Positioning */
  justify-self: center;       /* Horizontal alignment */
  align-self: center;         /* Vertical alignment */
}

/* Responsive grid */
.grid-auto-fit {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}
```

### Grid vs Flexbox

**Use Flexbox for:**
- One-dimensional layouts (row OR column)
- Aligning items within a container
- Distributing space between items

**Use Grid for:**
- Two-dimensional layouts (rows AND columns)
- Complex layouts with multiple areas
- Precise positioning

---

## Responsive Design

### Media Queries

```css
/* Mobile first approach */
.container {
  padding: 10px;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    padding: 20px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    padding: 40px;
  }
}

/* Specific breakpoints */
@media (min-width: 768px) and (max-width: 1023px) {
  /* Tablet only */
}

/* Orientation */
@media (orientation: landscape) {
  /* Landscape mode */
}

/* Print styles */
@media print {
  body {
    font-size: 12pt;
  }
}
```

### Mobile-First Approach

```css
/* Start with mobile styles */
.container {
  width: 100%;
  padding: 10px;
}

/* Then enhance for larger screens */
@media (min-width: 768px) {
  .container {
    max-width: 750px;
    margin: 0 auto;
    padding: 20px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
    padding: 40px;
  }
}
```

### Responsive Images

```html
<!-- srcset for different resolutions -->
<img 
  src="image-small.jpg"
  srcset="image-small.jpg 480w, image-medium.jpg 768w, image-large.jpg 1024w"
  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
  alt="Description"
/>

<!-- Picture element for art direction -->
<picture>
  <source media="(min-width: 768px)" srcset="desktop.jpg" />
  <source media="(max-width: 767px)" srcset="mobile.jpg" />
  <img src="fallback.jpg" alt="Description" />
</picture>
```

---

## Modern CSS Features

### CSS Variables (Custom Properties)

```css
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --font-size-base: 16px;
  --spacing-unit: 8px;
}

.button {
  background-color: var(--primary-color);
  font-size: var(--font-size-base);
  padding: calc(var(--spacing-unit) * 2);
}

/* Scoped variables */
.component {
  --component-spacing: 20px;
  padding: var(--component-spacing);
}

/* With fallback */
.color {
  color: var(--primary-color, #000);
}
```

### Container Queries (New!)

```css
.card-container {
  container-type: inline-size;
}

.card {
  display: grid;
  grid-template-columns: 1fr;
}

@container (min-width: 400px) {
  .card {
    grid-template-columns: 1fr 1fr;
  }
}
```

### CSS Animations

```css
/* Keyframes */
@keyframes slideIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.element {
  animation: slideIn 0.5s ease-out;
}

/* Transitions */
.button {
  background-color: blue;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: darkblue;
}
```

### Modern Selectors

```css
/* :is() - Selector list */
:is(h1, h2, h3) {
  color: blue;
}

/* :has() - Parent selector */
.card:has(.active) {
  border: 2px solid blue;
}

/* :where() - Lower specificity */
:where(header, footer) a {
  color: blue;
}

/* Logical properties */
.element {
  margin-inline: 20px;  /* Left and right */
  margin-block: 10px;   /* Top and bottom */
}
```

---

## CSS Preprocessors

### SASS/SCSS

```scss
// Variables
$primary-color: #3498db;
$font-size-base: 16px;

// Nesting
.nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  li {
    display: inline-block;
  }
  
  a {
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
}

// Mixins
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  @include flex-center;
}

// Functions
@function rem($pixels) {
  @return $pixels / 16 * 1rem;
}

.element {
  font-size: rem(24);
}

// Partials and imports
@import 'variables';
@import 'mixins';
```

---

## Best Practices

### BEM Methodology

```css
/* Block */
.card { }

/* Element */
.card__header { }
.card__body { }
.card__footer { }

/* Modifier */
.card--highlighted { }
.card__button--primary { }
```

### Organization

```css
/* 1. Reset/Normalize */
/* 2. Variables */
:root { }

/* 3. Base styles */
body { }

/* 4. Typography */
h1, h2, h3 { }

/* 5. Layout */
.container { }

/* 6. Components */
.button { }

/* 7. Utilities */
.text-center { }
.mt-20 { }
```

### Performance Tips

1. **Minimize CSS** - Remove unused styles
2. **Use efficient selectors** - Avoid deep nesting
3. **Avoid inline styles** - Use classes
4. **Optimize images** - Use modern formats (WebP, AVIF)
5. **Critical CSS** - Inline above-the-fold CSS
6. **Use transform/opacity** - For animations (GPU accelerated)

---

## 📚 Additional Resources

- [MDN CSS Guide](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS-Tricks](https://css-tricks.com/)
- [A List Apart](https://alistapart.com/topic/css)
- [Can I Use](https://caniuse.com/) - Browser compatibility

---

**Next**: [Browser APIs](../06-browser-apis/README.md)

