// src/app/ssg/page.tsx

import React from 'react';

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

export const revalidate = 60; // 60秒ごとに再生成

export default async function SSGPage() {
	const initialTime = await fetchCurrentTime();

	return (
		<div>
			<h1>Static Site Generated Page</h1>
			<p>Build Time: {initialTime}</p>
		</div>
	);
}
