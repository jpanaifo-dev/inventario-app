// UI component for login form
import React, { useState } from 'react';

interface LoginFormProps {
  onSubmit: (data: { user: string; pass: string }) => void;
}

export default function LoginForm({ onSubmit }: LoginFormProps) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ user, pass });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={user} onChange={e => setUser(e.target.value)} required />
      </label>
      <label>
        Password:
        <input type="password" value={pass} onChange={e => setPass(e.target.value)} required />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}
