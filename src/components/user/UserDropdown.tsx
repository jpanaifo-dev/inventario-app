// UserDropdown: muestra el usuario y opciones (logout, perfil, etc.)
import React from 'react';

interface UserDropdownProps {
  username: string;
}

export default function UserDropdown({ username }: UserDropdownProps) {
  return (
    <div className="user-dropdown">
      <span>{username}</span>
      <div className="dropdown-content">
        <button>Profile</button>
        <button>Logout</button>
      </div>
    </div>
  );
}
