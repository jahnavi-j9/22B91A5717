import React, { useState } from 'react';

export default function UrlForm({ onShorten }) {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof onShorten === 'function') {
      onShorten(url);
      setUrl('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Paste your long URL"
        required
      />
      <button type="submit">Shorten</button>
    </form>
  );
}
