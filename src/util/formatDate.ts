export default function formatDate(isoString: string, year?: boolean) {
  const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric'};
  year && (options.year = 'numeric')
  const date = new Date(isoString);
  return date.toLocaleString('en-US', options);
}
