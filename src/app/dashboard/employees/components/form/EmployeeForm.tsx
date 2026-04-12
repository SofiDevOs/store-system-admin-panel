"use client";
import { useState } from "react";
import Form from "next/form";
import Input from "./Input";
import StepIndicator, { STEPS } from "./StepIndicator";
import { useCreateEmployee } from "@/hooks/useCreateEmployee";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TOTAL_STEPS = STEPS.length;

function EmployeeForm() {
	const { register, isLoading, error } = useCreateEmployee();
	const [currentStep, setCurrentStep] = useState(1);

	const goNext = () => setCurrentStep((s) => Math.min(s + 1, TOTAL_STEPS));
	const goBack = () => setCurrentStep((s) => Math.max(s - 1, 1));

	return (
		<Form
			action={register}
			className="flex flex-col self-center px-6 py-3 rounded-xl bg-slate-700 w-full  border-box *:text-white/80 gap-2"
		>
			<StepIndicator currentStep={currentStep} steps={STEPS} />

			{/* Step 1 – Datos personales */}
			<div
				className={currentStep === 1 ? "flex flex-col gap-3" : "hidden"}
			>
				<h3 className="text-lg font-semibold text-white/90">
					Datos personales
				</h3>
				<div className="grid grid-cols-2 gap-4">
					<Input
						name="name"
						label="Nombre"
						placeholder="El nombre del empleado"
						required={currentStep === 1}
					/>
					<Input
						name="lastname"
						label="Apellido"
						placeholder="El apellido del Empleado"
						required={currentStep === 1}
					/>
				</div>
				<div className="grid grid-cols-2 gap-4">
					<Input
						name="email"
						label="Correo electrónico"
						required={currentStep === 1}
					/>
					<Input
						name="phone"
						label="Número de teléfono"
						required={currentStep === 1}
					/>
				</div>
				<div className="grid grid-cols-2 gap-4">
					<Input
						name="nss"
						label="Número de seguro social"
						required={currentStep === 1}
					/>
					<Input
						name="rfc"
						label="RFC"
						required={currentStep === 1}
					/>
				</div>
				<Input
					name="address"
					label="Dirección"
					required={currentStep === 1}
				/>
				<div className="flex flex-col gap-1.5">
					<label
						htmlFor="birthdate"
						className="text-sm font-medium text-slate-300 tracking-wide"
					>
						Fecha de nacimiento
						{currentStep === 1 && (
							<span className="text-blue-400 ml-0.5">*</span>
						)}
					</label>
					<input
						type="date"
						name="birthdate"
						id="birthdate"
						required={currentStep === 1}
						className="w-full px-3 py-2.5 rounded-lg bg-slate-800/60 border border-slate-600/50 text-white/90 outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/60 hover:border-slate-500"
					/>
				</div>
				<Input
					name="profilePicture"
					label="Foto de perfil"
					type="file"
					accept="image/*"
					required={false}
				/>
			</div>

			{/* Step 2 – Datos de empresa */}
			<div
				className={currentStep === 2 ? "flex flex-col gap-4" : "hidden"}
			>
				<h3 className="text-lg font-semibold text-white/90">
					Datos de empresa
				</h3>
				<Input
					name="position"
					label="Puesto"
					required={currentStep === 2}
				/>
				<Input
					name="department"
					label="Departamento"
					required={currentStep === 2}
				/>
				<Input
					name="salary"
					label="Salario"
					required={currentStep === 2}
				/>
			</div>

			{/* Navegación */}
			<div className="flex justify-between items-center pt-2">
				{currentStep > 1 ? (
					<button
						type="button"
						onClick={goBack}
						className="flex items-center gap-1 px-4 py-2 rounded bg-slate-600 hover:bg-slate-500 text-white/80 font-medium transition-colors"
					>
						<ChevronLeft size={18} />
						Anterior
					</button>
				) : (
					<span />
				)}

				{currentStep < TOTAL_STEPS ? (
					<button
						type="button"
						onClick={goNext}
						className="flex items-center gap-1 px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
					>
						Siguiente
						<ChevronRight size={18} />
					</button>
				) : (
					<button
						type="submit"
						disabled={isLoading}
						className="px-4 py-2 rounded bg-green-600 hover:bg-green-700 text-white font-bold transition-colors disabled:opacity-50"
					>
						{isLoading ? "Registrando..." : "Registrar Empleado"}
					</button>
				)}
			</div>

			{error && <p className="text-red-500 mt-1 text-xs">{error}</p>}
		</Form>
	);
}

export default EmployeeForm;
