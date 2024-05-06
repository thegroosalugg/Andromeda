export default function formatDate(isoString: string) {
  const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric'};
  const date = new Date(isoString);
  return date.toLocaleString('en-US', options);
}
