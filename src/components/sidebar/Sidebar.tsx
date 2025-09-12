// Sidebar genérico, puede recibir props para personalizar por rol
import React from 'react';

interface SidebarProps {
  items: Array<{ label: string; path: string }>;
}

export default function Sidebar({ items }: SidebarProps) {
  return (
    <aside>
      <ul>
        {items.map(item => (
          <li key={item.path}><a href={item.path}>{item.label}</a></li>
        ))}
      </ul>
    </aside>
  );
}
