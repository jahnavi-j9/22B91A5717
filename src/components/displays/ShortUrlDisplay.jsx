import React from 'react';

export default function ShortUrlDisplay({ url }) {
  const isImage = url.match(/\.(jpeg|jpg|png|gif|webp)$/i);

  return (
    <div style={{ marginTop: '20px' }}>
      <p>🔗 Your shortened URL:</p>
      <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>

      {isImage && (
        <div style={{ marginTop: '10px' }}>
          <img src={url} alt="Preview" style={{ maxWidth: '100%' }} />
        </div>
      )}
    </div>
  );
}
