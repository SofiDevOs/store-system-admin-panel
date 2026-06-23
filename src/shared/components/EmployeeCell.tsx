import Image from "next/image";

const FALLBACK_AVATAR = "/gata-salvaje.jpeg";

interface EmployeeCellProps {
	/** Primer nombre del empleado. */
	name: string;
	/** Apellido — opcional para filas que solo tengan nombre completo en un campo. */
	lastname?: string;
	/** URL de la foto de perfil. Si no se provee se usa el avatar por defecto. */
	profileImage?: string;
	/** Tamaño en px del avatar. Por defecto 32. */
	size?: number;
}

/**
 * Celda de empleado reutilizable.
 *
 * Renderiza un avatar circular seguido del nombre completo del empleado.
 * Úsala dentro de cualquier `<td>` para mantener la presentación consistente
 * en todas las tablas del dashboard.
 *
 * @example
 * <td>
 *   <EmployeeCell
 *     name={row.name}
 *     lastname={row.lastname}
 *     profileImage={row.profileImage}
 *   />
 * </td>
 */
const EmployeeCell = ({
	name,
	lastname,
	profileImage,
	size = 32,
}: EmployeeCellProps) => {
	const fullName = lastname ? `${name} ${lastname}` : name;
	const src = profileImage || FALLBACK_AVATAR;

	return (
		<span className="flex items-center gap-3">
			<Image
				src={src}
				alt={fullName}
				width={size}
				height={size}
				className="rounded-full object-cover border-2 border-violet-500/60 shrink-0"
				style={{ width: size, height: size }}
			/>
			<span className="font-medium text-sm leading-tight">{fullName}</span>
		</span>
	);
};

export default EmployeeCell;
