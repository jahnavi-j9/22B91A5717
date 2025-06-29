import React, { useState } from 'react';
import UrlForm from '../../components/forms/UrlForm';
import ShortUrlDisplay from '../../components/displays/ShortUrlDisplay';
import { shortenUrl } from '../../services/urlService';
import './ShortenerPage.css';

export default function ShortenerPage() {
  const [shortUrl, setShortUrl] = useState(null);

  const handleShorten = async (longUrl) => {
    try {
      const result = await shortenUrl(longUrl);
      setShortUrl(result.shortUrl);
    } catch (error) {
      console.error('Error shortening URL:', error.message);
      alert('❌ Failed to shorten URL.');
    }
  };

  return (
    <div className="shortener-page">
      <h1>🔗 URL Shortener</h1>
      <UrlForm onShorten={handleShorten} />
      {shortUrl && <ShortUrlDisplay url={shortUrl} />}
    </div>
  );
}
