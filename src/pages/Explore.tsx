import { CSSProperties } from 'react';

export function FallBack() {
  const styles: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
  };

  return (
    <div style={styles}>
      <h1>COMING SOON</h1>
      <img
        src='fallback.jpg'
        alt='spaceman'
        style={{ width: '400px', borderRadius: '15%', boxShadow: '20px 20px 40px #000' }}
      />
    </div>
  );
}

export default function ExplorePage() {
  return <FallBack />;
}
