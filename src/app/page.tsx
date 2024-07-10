import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
	return (
		<div className='grid grid-cols-1 space-y-4'>
			<Link href='/ssr' className='grid-item'>
				SSR
			</Link>
			<Link href='/ssg' className='grid-item'>
				SSG
			</Link>
			<Link href='/csr' className='grid-item'>
				CSR
			</Link>
		</div>
	);
};

export default Home;
