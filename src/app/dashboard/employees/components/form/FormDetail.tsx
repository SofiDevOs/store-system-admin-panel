import React from "react";

const FormDetail = ({
	children,
	onSubmit,
}: {
	children: React.ReactNode;
	onSubmit?: React.FormEventHandler<HTMLFormElement>;
}) => {
	return (
		<form className="flex flex-col gap-4" onSubmit={onSubmit}>
			{children}
		</form>
	);
};

export default FormDetail;
