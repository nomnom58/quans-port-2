import React from 'react';

export interface CardSection {
  heading: string;
  content: React.ReactNode;
}

export interface ShowcaseCardProps {
  title: string;
  description?: string;
  headerBgColor?: string;
  headerTextColor?: string;
  sections: CardSection[];
  className?: string;
}

export const ShowcaseCard: React.FC<ShowcaseCardProps> = ({
  title,
  description,
  headerBgColor = '#EAEAEA',
  headerTextColor = '#212121',
  sections,
  className = '',
}) => {
  return (
    <div className={`rounded-[16px] overflow-hidden flex flex-col border border-[#EAEAEA] ${className}`}>
      {/* Header Block */}
      <div 
        className="px-[12px] py-[16px]" 
        style={{ backgroundColor: headerBgColor, color: headerTextColor }}
      >
        <h4 className="text-[14px] md:text-[16px] font-[500] leading-snug">
          {title}
        </h4>
        {description && (
          <p className="mt-[8px] text-[14px] md:text-[16px] font-[600] leading-snug">
            {description}
          </p>
        )}
      </div>

      {/* Body Block */}
      <div className="bg-white px-[12px] py-[16px] flex-1">
        {sections.map((section, index) => (
          <div 
            key={index} 
            className={index !== sections.length - 1 ? "mb-[16px]" : ""}
          >
            <h5 className="text-[14px] md:text-[16px] font-[500] text-[#212121] mb-[4px] leading-snug">
              {section.heading}
            </h5>
            <div className="text-[14px] md:text-[16px] font-[400] text-[#575757] leading-[1.5]">
              {section.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
