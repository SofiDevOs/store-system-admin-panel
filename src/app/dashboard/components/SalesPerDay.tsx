import { IncrementalCounter } from "@/shared/components/IncrementalCounter";
import Link  from "next/link";
const SalesPerDay = () => {
	return (
		<div className="flex flex-col gap-4">
			<div>
				<span className="text-4xl mr-2  ">$</span>
				<IncrementalCounter
					className="text-center text-4xl font-bold"
					start={0}
					end={2000.0}
					time={1000}
				/>
			</div>
			<Link href="/sales" className="flex items-center justify-center py-1 px-2 bg-slate-600 rounded-lg text-white hover:bg-stone-800">
				Detalle
			</Link>
		</div>
	);
};

export default SalesPerDay;
