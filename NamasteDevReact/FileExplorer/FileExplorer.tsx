import React, { useState } from 'react';
import './FileExplorer.css';

// Types
interface FileNode {
  id: string;
  name: string;
  type: 'file' | 'folder';
  children?: FileNode[];
}

interface FileExplorerProps {
  initialData?: FileNode[];
}

// File Explorer Component
const FileExplorer: React.FC<FileExplorerProps> = ({ initialData = [] }) => {
  const [fileSystem, setFileSystem] = useState<FileNode[]>(initialData);
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set());
  const [newItemName, setNewItemName] = useState('');
  const [showAddMenu, setShowAddMenu] = useState<string | null>(null);

  // Generate unique ID
  const generateId = (): string => {
    return `item-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  };

  // Toggle folder expansion
  const toggleFolder = (id: string) => {
    setExpandedFolders((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  // Add file or folder
  const addItem = (parentId: string | null, type: 'file' | 'folder') => {
    const name = newItemName.trim();
    if (!name) {
      alert('Please enter a name');
      return;
    }

    const newItem: FileNode = {
      id: generateId(),
      name,
      type,
      ...(type === 'folder' && { children: [] }),
    };

    setFileSystem((prev) => {
      if (parentId === null) {
        return [...prev, newItem];
      }

      const addToNode = (nodes: FileNode[]): FileNode[] => {
        return nodes.map((node) => {
          if (node.id === parentId) {
            if (node.type === 'folder') {
              return {
                ...node,
                children: [...(node.children || []), newItem],
              };
            }
          }
          if (node.children) {
            return {
              ...node,
              children: addToNode(node.children),
            };
          }
          return node;
        });
      };

      return addToNode(prev);
    });

    setNewItemName('');
    setShowAddMenu(null);
    if (type === 'folder' && parentId) {
      setExpandedFolders((prev) => new Set(prev).add(parentId));
    }
  };

  // Delete file or folder
  const deleteItem = (id: string) => {
    if (!window.confirm('Are you sure you want to delete this item?')) {
      return;
    }

    setFileSystem((prev) => {
      const removeFromNodes = (nodes: FileNode[]): FileNode[] => {
        return nodes.filter((node) => {
          if (node.id === id) {
            return false;
          }
          if (node.children) {
            node.children = removeFromNodes(node.children);
          }
          return true;
        });
      };

      return removeFromNodes(prev);
    });

    setExpandedFolders((prev) => {
      const newSet = new Set(prev);
      newSet.delete(id);
      return newSet;
    });
  };

  // Render file/folder item
  const renderItem = (item: FileNode, level: number = 0): React.ReactNode => {
    const isExpanded = expandedFolders.has(item.id);
    const isFolder = item.type === 'folder';
    const showMenu = showAddMenu === item.id;

    return (
      <div key={item.id} className="file-item">
        <div
          className={`item-row ${isFolder ? 'folder' : 'file'}`}
          style={{ paddingLeft: `${level * 20}px` }}
        >
          <div className="item-content">
            {isFolder && (
              <span
                className="expand-icon"
                onClick={() => toggleFolder(item.id)}
              >
                {isExpanded ? '📂' : '📁'}
              </span>
            )}
            {!isFolder && <span className="file-icon">📄</span>}
            <span className="item-name">{item.name}</span>
          </div>

          <div className="item-actions">
            {isFolder && (
              <>
                <button
                  className="action-btn add-btn"
                  onClick={() => {
                    setShowAddMenu(showMenu ? null : item.id);
                  }}
                  title="Add item"
                >
                  +
                </button>
              </>
            )}
            <button
              className="action-btn delete-btn"
              onClick={() => deleteItem(item.id)}
              title="Delete"
            >
              🗑️
            </button>
          </div>
        </div>

        {showMenu && isFolder && (
          <div
            className="add-menu"
            style={{ paddingLeft: `${(level + 1) * 20}px` }}
          >
            <input
              type="text"
              className="name-input"
              placeholder="Enter name"
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Escape') {
                  setShowAddMenu(null);
                  setNewItemName('');
                }
              }}
              autoFocus
            />
            <div className="add-buttons">
              <button
                className="add-type-btn"
                onClick={() => addItem(item.id, 'file')}
              >
                Add File
              </button>
              <button
                className="add-type-btn"
                onClick={() => addItem(item.id, 'folder')}
              >
                Add Folder
              </button>
              <button
                className="cancel-btn"
                onClick={() => {
                  setShowAddMenu(null);
                  setNewItemName('');
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {isFolder && isExpanded && item.children && (
          <div className="children-container">
            {item.children.map((child) => renderItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="file-explorer">
      <div className="file-explorer-header">
        <h2>File Explorer</h2>
        <button
          className="add-root-btn"
          onClick={() => {
            setShowAddMenu('root');
          }}
        >
          + Add Item
        </button>
      </div>

      {showAddMenu === 'root' && (
        <div className="add-menu root-menu">
          <input
            type="text"
            className="name-input"
            placeholder="Enter name"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                setShowAddMenu(null);
                setNewItemName('');
              }
            }}
            autoFocus
          />
          <div className="add-buttons">
            <button
              className="add-type-btn"
              onClick={() => addItem(null, 'file')}
            >
              Add File
            </button>
            <button
              className="add-type-btn"
              onClick={() => addItem(null, 'folder')}
            >
              Add Folder
            </button>
            <button
              className="cancel-btn"
              onClick={() => {
                setShowAddMenu(null);
                setNewItemName('');
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="file-tree">
        {fileSystem.length === 0 ? (
          <div className="empty-state">
            <p>No files or folders. Click "Add Item" to get started!</p>
          </div>
        ) : (
          fileSystem.map((item) => renderItem(item, 0))
        )}
      </div>
    </div>
  );
};

export default FileExplorer;
