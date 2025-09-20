export default function Button({
  onClick,
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 bg-white text-gray-700 rounded-lg px-2 py-3 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 hover:bg-gray-50 font-medium ${className}`}
    >
      {children}
    </button>
  );
}
