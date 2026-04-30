import React from 'react';

interface QuestionBubbleProps {
  text: string;
}

export const QuestionBubble: React.FC<QuestionBubbleProps> = ({ text }) => {
  return (
    <div className="flex items-start gap-[8px] md:gap-[16px] mb-[16px]">
      <img src="/showcase/echoo/header.png" alt="Question Icon" className="w-8 h-8 shrink-0" />
      <div className="bg-[#0083FF] px-[12px] py-[10px] rounded-[12px] md:rounded-[16px] w-fit">
        <p className="text-[16px] md:text-[20px] leading-[22px] md:leading-[26px] text-[#FFFFFF] font-medium m-0">
          {text}
        </p>
      </div>
    </div>
  );
};
