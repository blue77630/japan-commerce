import { useEffect, useState } from 'react';

export default function AnimeLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="anime-loader-bg">
      <div className="anime-loader-message">Loading...</div>
      <div className="anime-loader-bar">
        <div className="anime-loader-bar-progress"></div>
      </div>
    </div>
  );
}