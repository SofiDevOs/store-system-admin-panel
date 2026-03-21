import { cn } from "@/lib/utils";
interface InputProps {
	name: string;
	type?: string;
	label?: string;
	placeholder?: string;
	ClassName?: string;
}
const baseStyle =
	"p-2 rounded bg-slate-600 outline-none focus:ring-2 focus:ring-slate-500";

const Input = ({ name, type = "text", label, ClassName }: InputProps) => {
	return (
		<div className="flex flex-col gap-2">
			<label htmlFor="name">{label}</label>
			<input
				type={type}
				id={name}
				name={name}
				className={cn(baseStyle, ClassName)}
				required
				placeholder={label}
			/>
		</div>
	);
};

export default Input;
