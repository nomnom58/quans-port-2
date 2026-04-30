import React, { ReactNode } from 'react';

interface ShowcaseMetricCardProps {
  icon: ReactNode;
  content: ReactNode;
  bgColor?: string;
  textColor?: string;
}

export const ShowcaseMetricCard: React.FC<ShowcaseMetricCardProps> = ({
  icon,
  content,
  bgColor = '#2F36CA',
  textColor = '#FFFFFF',
}) => {
  return (
    <div
      className="flex flex-col justify-between w-full h-[200px] p-[16px] rounded-[24px]"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div>
        {icon}
      </div>
      <div className="text-[16px] leading-[22px] md:text-[20px] md:leading-[26px]">
        {content}
      </div>
    </div>
  );
};
