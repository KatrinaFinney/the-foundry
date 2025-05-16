'use client';

export default function Footer() {
  return (
    <footer
      style={{
        padding: '2rem',
        textAlign: 'center',
        fontSize: '1rem',
        color: '#3b2e2a',
      }}
    >
      <p>
        Need website repair?{' '}
        <a
          href="https://webtriage.pro"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#6c584c',
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'color 0.2s ease, text-decoration 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#4e4038';
            e.currentTarget.style.textDecoration = 'underline';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#6c584c';
            e.currentTarget.style.textDecoration = 'none';
          }}
        >
          Try WebTriage.pro
        </a>
      </p>
    </footer>
  );
}
