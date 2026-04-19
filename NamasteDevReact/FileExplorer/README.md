# File Explorer Component

A fully functional file explorer component built with React and TypeScript, featuring capabilities to add files, add folders, delete files, and delete folders.

## Features

- ✅ Add files to any folder or root
- ✅ Add folders to any folder or root
- ✅ Delete files
- ✅ Delete folders (recursively)
- ✅ Expandable/collapsible folder structure
- ✅ Modern, clean UI with hover effects
- ✅ Interactive tree structure visualization

## Usage

```tsx
import FileExplorer from './FileExplorer';

// With initial data
const initialData = [
  {
    id: '1',
    name: 'Documents',
    type: 'folder',
    children: [
      {
        id: '2',
        name: 'resume.pdf',
        type: 'file',
      },
      {
        id: '3',
        name: 'Projects',
        type: 'folder',
        children: [],
      },
    ],
  },
  {
    id: '4',
    name: 'README.md',
    type: 'file',
  },
];

function App() {
  return (
    <div>
      <FileExplorer initialData={initialData} />
    </div>
  );
}

// Or start with empty explorer
function App() {
  return (
    <div>
      <FileExplorer />
    </div>
  );
}
```

## Component API

### Props

- `initialData` (optional): Array of `FileNode` objects representing the initial file structure

### FileNode Type

```typescript
interface FileNode {
  id: string;
  name: string;
  type: 'file' | 'folder';
  children?: FileNode[]; // Only for folders
}
```

## How to Use

1. **Add Item**: Click the "+" button next to a folder or the "Add Item" button in the header
2. **Add File/Folder**: Enter a name in the input field and click "Add File" or "Add Folder"
3. **Delete Item**: Click the 🗑️ icon next to any file or folder
4. **Expand/Collapse**: Click the folder icon (📁/📂) to expand or collapse folders

## Installation Requirements

Make sure you have React and TypeScript installed:

```bash
npm install react react-dom
npm install --save-dev typescript @types/react @types/react-dom
```
