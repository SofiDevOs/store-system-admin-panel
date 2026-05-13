import { cn } from "@/lib/utils";
interface InputProps {
	name: string;
	type?: string;
	label?: string;
	placeholder?: string;
	ClassName?: string;
	accept?: string;
	required?: boolean;
}
const baseStyle =
	"w-full px-3 py-1 rounded-lg bg-slate-100 border border-slate-300 text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/60 hover:border-slate-400 dark:bg-slate-800/60 dark:border-slate-600/50 dark:text-white/90 dark:placeholder:text-slate-500 dark:hover:border-slate-500";

const Input = ({ name, type = "text", label, ClassName, accept, required = true }: InputProps) => {
	return (
		<div className="flex flex-col gap-1.5">
			{label && (
				<label
					htmlFor={name}
					className="text-sm font-medium text-slate-700 tracking-wide dark:text-slate-300"
				>
					{label}
					{required && <span className="text-blue-500 dark:text-blue-400 ml-0.5">*</span>}
				</label>
			)}
			<input
				type={type}
				id={name}
				{...(type === "file" && accept ? { accept } : {})}
				name={name}
				className={cn(
					baseStyle,
					type === "file" && "file:mr-3 file:px-3 file:py-1.5 file:rounded-md file:border-0 file:bg-slate-200 file:text-sm file:font-medium file:text-slate-700 file:cursor-pointer hover:file:bg-slate-300 dark:file:bg-slate-600 dark:file:text-slate-300 dark:hover:file:bg-slate-500",
					ClassName,
				)}
				required={required}
				placeholder={label}
			/>
		</div>
	);
};

export default Input;
