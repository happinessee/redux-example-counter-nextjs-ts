"use client"

import Counter from './Counter';
import CounterContainer from './CounterContainer';

const page = () => {
	return (
		<div className="bg-white max-w-screen-xl flex flex-col">
			<CounterContainer />
		</div>
	);
};

export default page;