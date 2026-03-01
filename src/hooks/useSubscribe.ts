import { useState } from 'react';

export const useSubscribe = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      // Owner notification mock
      console.log(`[Owner Notification] New subscriber added to the gaggle: ${email}`);

      // Reset status after a few seconds
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return { email, setEmail, status, handleSubmit };
};
