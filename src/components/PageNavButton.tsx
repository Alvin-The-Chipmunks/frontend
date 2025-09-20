export default function PageNavButton({
  onClick,
  children,
  className,
  disabled,
}: {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}) {
  return (
    <button
onClick={onClick}
disabled={disabled}
className={`m-4 bg-[var(--primary)] text-white rounded-full px-4 py-2 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 cursor-pointer hover:bg-primary/80 ${className}`}
>
{children}
</button>
  );
}