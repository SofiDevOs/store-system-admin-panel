import React from "react";
interface Props {
  status: "PENDING" | "APROVED" | "REJECT";
}

const TagStatus = ({ status }: Props) => {
  const COLOR_STATUS = {
    PENDING: "#ebc015",
    APROVED: "#24ed1d",
    REJECT: "#ed1d1d",
  }[status];
  const tagStyles = {
    backgroundColor: `color-mix(in srgb, rgb(0 0 0 / 30%) 90%, ${COLOR_STATUS} 10%)`,
    borderColor: `color-mix(in srgb, rgb(255 255 255 / 30%) 80%, ${COLOR_STATUS} 40%)`,
    color: `${COLOR_STATUS}`,
    saturate: "2",
    fontWeight: "600",
  };
  const label = ["Pendiente", "Aprobada", "Rechazada"][
    ["PENDING", "APROVED", "REJECT"].indexOf(status)
  ];
  return (
    <span
      className="flex w-20 text-xs saturate-200  rounded-lg border  items-center justify-center py-1 px-4  "
      style={tagStyles}
    >
      {label}
    </span>
  );
};

export default TagStatus;
