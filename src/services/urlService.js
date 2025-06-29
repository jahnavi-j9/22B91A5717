export async function shortenUrl(longUrl) {
  const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl)}`);
  if (!response.ok) {
    throw new Error('Shorten failed');
  }
  const shortUrl = await response.text();
  return { shortUrl };
}
