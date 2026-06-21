import React, { InputHTMLAttributes } from "react";

interface Props {
	placeholder: string;
	value?: string;
	readonly?: boolean;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	type?: InputHTMLAttributes<HTMLInputElement>["type"];
}

const Input = ({
	placeholder,
	value,
	readonly,
	onChange,
	type = "text",
}: Props) => {
	return (
		<input
			className=""
			type={type}
			placeholder={placeholder}
			value={value ?? ""}
			readOnly={readonly}
			onChange={onChange}
		/>
	);
};

export default Input;
