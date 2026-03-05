'use client'
import React, { useEffect, useState } from "react";

interface Props {
	start: number;
	end: number;
	time: number;
	className?: string;
}

export const IncrementalCounter = ({ start, end, time, className }: Props) => {
	const [value, setValue] = useState(start);

	useEffect(() => {
		const duration = time;

		const stepTime = 16; // maso 60fps
		const totalSteps = duration / stepTime;
		const increment = (end - start) / totalSteps;

		let current = start;

		const intervalId = setInterval(() => {
			current += increment;

			if (current >= end) {
				setValue(end);
				clearInterval(intervalId);
				return;
			}
			setValue(current);
		}, stepTime);
		return () => clearInterval(intervalId);
	}, [start, end, time]);
	return <span className={className}>{value.toFixed(2)}</span>;
};
