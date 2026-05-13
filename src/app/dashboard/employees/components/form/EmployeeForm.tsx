"use client";
import { useState } from "react";
import Image from "next/image";
import Form from "next/form";
import Input from "./Input";
import StepIndicator, { STEPS } from "./StepIndicator";
import { useCreateEmployee } from "@/hooks/useCreateEmployee";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TOTAL_STEPS = STEPS.length;

const ROLES = [
	{ label: "Empleado", value: "EMPLOYEE" },
	{ label: "Gerente", value: "MANAGER" },
	{ label: "Administrador", value: "ADMIN" },
] as const;

function EmployeeForm() {
	const { register, isLoading, error } = useCreateEmployee();
	const [currentStep, setCurrentStep] = useState(1);
	const [preview, setPreview] = useState<string | null>(null);

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			const url = URL.createObjectURL(file);
			setPreview((prev) => {
				if (prev) URL.revokeObjectURL(prev);
				return url;
			});
		} else {
			setPreview((prev) => {
				if (prev) URL.revokeObjectURL(prev);
				return null;
			});
		}
	};

	const goNext = () => setCurrentStep((s) => Math.min(s + 1, TOTAL_STEPS));
	const goBack = () => setCurrentStep((s) => Math.max(s - 1, 1));

	return (
		<Form
			action={register}
			className="flex flex-col self-center px-6 py-3 rounded-xl  w-full  border-box gap-2"
		>
			<StepIndicator currentStep={currentStep} steps={STEPS} />

			{/* Step 1 – Datos personales */}
			<div
				className={currentStep === 1 ? "flex flex-col gap-3" : "hidden"}
			>
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
						className="text-sm font-medium text-slate-700 dark:text-slate-300 tracking-wide"
					>
						Fecha de nacimiento
						{currentStep === 1 && (
							<span className="text-blue-500 dark:text-blue-400 ml-0.5">
								*
							</span>
						)}
					</label>
					<input
						type="date"
						name="birthdate"
						id="birthdate"
						required={currentStep === 1}
						className="w-full px-3 py-2.5 rounded-lg bg-slate-100 border border-slate-300 text-slate-900 outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/60 hover:border-slate-400 dark:bg-slate-800/60 dark:border-slate-600/50 dark:text-white/90 dark:hover:border-slate-500"
					/>
				</div>
				<div className="flex items-end gap-4">
					<div className="flex flex-col gap-1.5">
						<label
							htmlFor="profileImage"
							className="text-sm font-medium text-slate-700 dark:text-slate-300 tracking-wide"
						>
							Foto de perfil
						</label>
						<input
							type="file"
							id="profileImage"
							name="profileImage"
							accept="image/*"
							onChange={handleImageChange}
							className="w-fit px-3 py-1 rounded-lg bg-slate-100 border border-slate-300 text-slate-900 outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/60 hover:border-slate-400 dark:bg-slate-800/60 dark:border-slate-600/50 dark:text-white/90 dark:hover:border-slate-500 file:mr-3 file:px-3 file:py-1.5 file:rounded-md file:border-0 file:bg-slate-200 file:text-sm file:font-medium file:text-slate-700 file:cursor-pointer hover:file:bg-slate-300 dark:file:bg-slate-600 dark:file:text-slate-300 dark:hover:file:bg-slate-500"
						/>
					</div>
					{preview && (
						<Image
							src={preview}
							alt="Vista previa"
							width={64}
							height={64}
							className="rounded-lg object-cover border border-slate-600/50"
						/>
					)}
				</div>
			</div>

			{/* Step 2 – Datos de empresa */}
			<div
				className={currentStep === 2 ? "flex flex-col gap-4" : "hidden"}
			>
				<h3 className="text-lg font-semibold text-slate-900 dark:text-white/90">
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
				<div className="flex flex-col gap-1.5">
					<label
						htmlFor="role"
						className="text-sm font-medium text-slate-700 dark:text-slate-300 tracking-wide"
					>
						Rol
						{currentStep === 2 && (
							<span className="text-blue-500 dark:text-blue-400 ml-0.5">
								*
							</span>
						)}
					</label>
					<select
						id="role"
						name="role"
						required={currentStep === 2}
						defaultValue=""
						className="w-full px-3 py-2.5 rounded-lg bg-slate-100 border border-slate-300 text-slate-900 outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/60 hover:border-slate-400 dark:bg-slate-800/60 dark:border-slate-600/50 dark:text-white/90 dark:hover:border-slate-500"
					>
						<option value="" disabled>
							Selecciona un rol
						</option>
						{ROLES.map((r) => (
							<option key={r.value} value={r.value}>
								{r.label}
							</option>
						))}
					</select>
				</div>
			</div>

			{/* Navegación */}
			<div className="flex justify-between items-center pt-2">
				{currentStep > 1 ? (
					<button
						type="button"
						onClick={goBack}
						className="flex items-center gap-1 px-4 py-2 rounded bg-slate-200 hover:bg-slate-300 text-slate-700 dark:bg-slate-600 dark:hover:bg-slate-500 dark:text-white/80 font-medium transition-colors"
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
						className="flex items-center gap-1 px-4 py-2 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-medium transition-colors"
					>
						Siguiente
						<ChevronRight size={18} />
					</button>
				) : (
					<button
						type="submit"
						disabled={isLoading}
						className="px-4 py-2 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-colors disabled:opacity-50"
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
