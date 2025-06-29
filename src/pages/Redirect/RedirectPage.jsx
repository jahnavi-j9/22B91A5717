import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { lookupShortUrl } from '../../services/urlService';

export default function RedirectPage() {
  const { shortCode } = useParams();

  useEffect(() => {
    lookupShortUrl(shortCode)
      .then(destination => {
        window.location.href = destination;
      })
      .catch(err => {
        console.error('Redirection failed:', err);
      });
  }, [shortCode]);

  return (
    <div className="redirect-page">
      <h2>⏳ Redirecting you...</h2>
      <p>Hold tight while we take you to your destination!</p>
    </div>
  );
}
