import React from 'react';

interface AnswerBubbleProps {
  children: React.ReactNode;
}

export const AnswerBubble: React.FC<AnswerBubbleProps> = ({ children }) => {
  const childrenArray = React.Children.toArray(children);
  const hasToggles = childrenArray.length >= 2;
  const textContent = hasToggles ? childrenArray.slice(0, childrenArray.length - 1) : childrenArray;
  const togglesContent = hasToggles ? childrenArray[childrenArray.length - 1] : null;

  return (
    <div className="flex items-start gap-[8px] md:gap-[16px]">
      <img
        src="/showcase/echoo/echoo_favicon.png"
        alt="Echoo Favicon"
        className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] shrink-0"
      />
      <div className="flex-1 bg-[#FFFFFF] px-[12px] py-[12px] rounded-[16px] border border-[#EAEAEA] text-[16px] leading-[20px] md:text-[20px] md:leading-[24px]">
        {textContent}
        {togglesContent && (
          <>
            <div className="mt-[16px] mb-[8px] text-[14px] md:text-[16px] font-[500] text-[#AEAEAE] leading-normal">Detail information</div>
            {togglesContent}
          </>
        )}
      </div>
    </div>
  );
};
