interface NavTooltipProps {
  label: string;
  visible: boolean;
}

export const NavTooltip= ({ label, visible }: NavTooltipProps) => {
  return (
    <div
      className={`
        absolute -bottom-9.5 left-1/2 -translate-x-1/2
        text-white bg-black text-[10px] font-medium
        px-3 py-1.5 rounded-md shadow-lg whitespace-nowrap z-50
        transition-all duration-150
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 pointer-events-none"}
      `}
    >
      {label}
      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-black rotate-45" />
    </div>
  );
}
