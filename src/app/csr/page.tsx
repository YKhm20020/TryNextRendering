'use client'

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

async function fetchCurrentTime() {
  try {
    const res = await fetch('http://localhost:3000/time_records');
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await res.json();
    return data.current_time;
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
}

const CSRPage = () => {
  const [currentTime, setCurrentTime] = useState<string | null>(null);

  useEffect(() => {
    fetchCurrentTime().then(setCurrentTime);
  }, []);

  const handleFetchLatestTime = async () => {
    const latestTime = await fetchCurrentTime();
    setCurrentTime(latestTime);
  };

  return (
    <div className='space-y-4'>
      <h1 className="text-2xl font-bold">Client-Side Rendered Page</h1>
      <p>Current Time: {currentTime ?? 'Loading...'}</p>
      <button
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        onClick={handleFetchLatestTime}>Fetch Latest Time</button>
    </div>
  );
};

export default dynamic(() => Promise.resolve(CSRPage), {
  ssr: false
});

