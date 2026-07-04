import React from "react";

const FormDetail = ({ children }: { children: React.ReactNode }) => {
	return <form className="flex flex-col gap-4">{children}</form>;
};

export default FormDetail;

