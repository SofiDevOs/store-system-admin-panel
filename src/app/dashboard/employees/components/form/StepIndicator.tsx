import { Check, User, Building2 } from "lucide-react";

interface Step {
	label: string;
	icon: React.ReactNode;
}

interface StepIndicatorProps {
	currentStep: number;
	steps: Step[];
}

const STEPS: Step[] = [
	{ label: "Datos personales", icon: <User size={15} /> },
	{ label: "Datos de empresa", icon: <Building2 size={15} /> },
];

function StepIndicator({ currentStep }: StepIndicatorProps) {
	return (
		<div className="flex items-center justify-center gap-2 w-full mb-2">
			{STEPS.map((step, index) => {
				const stepNumber = index + 1;
				const isCompleted = currentStep > stepNumber;
				const isActive = currentStep === stepNumber;

				return (
					<div key={step.label} className="flex items-center gap-2">
						<div className="flex items-center gap-2">
							<div
								className={`flex items-center justify-center w-8 h-8 rounded-full border-2 transition-colors ${
									isCompleted
										? "bg-green-500 border-green-500 text-white"
										: isActive
											? "border-blue-500 bg-blue-500/20 text-blue-600 dark:text-blue-400"
											: "border-slate-300 text-slate-400 dark:border-slate-500 dark:text-slate-500"
								}`}
							>
								{isCompleted ? <Check size={16} /> : step.icon}
							</div>
							<span
								className={`text-sm font-medium transition-colors ${
									isActive
										? "text-blue-600 dark:text-blue-400"
										: isCompleted
											? "text-green-600 dark:text-green-400"
											: "text-slate-400 dark:text-slate-500"
								}`}
							>
								{step.label}
							</span>
						</div>
						{index < STEPS.length - 1 && (
							<div
								className={`w-12 h-0.5 mx-1 transition-colors ${
									isCompleted ? "bg-green-500" : "bg-slate-300 dark:bg-slate-600"
								}`}
							/>
						)}
					</div>
				);
			})}
		</div>
	);
}

export { STEPS };
export default StepIndicator;
