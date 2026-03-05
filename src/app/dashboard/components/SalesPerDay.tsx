import { IncrementalCounter } from "@/shared/components/IncrementalCounter";

const SalesPerDay = () => {
	return (
		<div>
			<span className="text-4xl mr-2 ">$</span>
			<IncrementalCounter
				className="text-center text-4xl font-bold"
				start={0}
				end={2000.0}
				time={1000}
			/>
		</div>
	);
};

export default SalesPerDay;
