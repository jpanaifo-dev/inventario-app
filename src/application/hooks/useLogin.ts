'use login'
// Hook for login logic
import { useState } from 'react';

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (data: { user: string; pass: string }) => {
    setLoading(true);
    setError(null);
    // Simulate authentication logic
    await new Promise(res => setTimeout(res, 1000));
    if (data.user === 'admin' && data.pass === 'admin') {
      // Success: redirect or set user context
    } else {
      setError('Invalid credentials');
    }
    setLoading(false);
  };

  return { login, loading, error };
}
