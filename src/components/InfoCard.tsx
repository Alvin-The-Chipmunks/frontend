export type InfoCardProps = {
  title: string;
  description: string;
  icon?: string;
  category?: string;
  accentColor?: 'blue' | 'green' | 'purple' | 'orange' | 'red';
  className?: string;
};

export default function InfoCard({
  title,
  description,
  category,
  accentColor = 'blue',
  className,
}: InfoCardProps) {
  const colorVariants = {
    blue: {
      iconBg: 'from-blue-50 to-blue-100',
      titleHover: 'group-hover:text-blue-600',
      accent: 'border-l-blue-400',
    },
    green: {
      iconBg: 'from-green-50 to-green-100',
      titleHover: 'group-hover:text-green-600',
      accent: 'border-l-green-400',
    },
    purple: {
      iconBg: 'from-purple-50 to-purple-100',
      titleHover: 'group-hover:text-purple-600',
      accent: 'border-l-purple-400',
    },
    orange: {
      iconBg: 'from-orange-50 to-orange-100',
      titleHover: 'group-hover:text-orange-600',
      accent: 'border-l-orange-400',
    },
    red: {
      iconBg: 'from-red-50 to-red-100',
      titleHover: 'group-hover:text-red-600',
      accent: 'border-l-red-400',
    },
  };

  const colors = colorVariants[accentColor];

  return (
    <div className={`bg-white rounded-xl shadow-sm border border-gray-100 border-l-4 ${colors.accent} p-6 hover:shadow-lg hover:border-gray-200 transition-all duration-300 group ${className}`}>

      {/* Header */}
      <div className="flex items-start gap-1 mb-2">
        <div className="flex-1">
          <h3 className={`text-md font-semibold text-gray-900 ${colors.titleHover} transition-colors duration-200 mb-2`}>
            {title}
          </h3>
          {category && (
            <span className="inline-block bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">
              {category}
            </span>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-xs leading-relaxed">
        {description}
      </p>
    </div>
  );
}
