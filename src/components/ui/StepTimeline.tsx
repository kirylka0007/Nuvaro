import React from 'react';

interface Step {
  number: string;
  title: string;
  description: string;
}

interface StepTimelineProps {
  steps: Step[];
}

export default function StepTimeline({ steps }: StepTimelineProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-start gap-0">
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;

        return (
          <React.Fragment key={index}>
            {/* Step */}
            <div className="flex md:flex-col items-center md:items-center gap-4 md:gap-3 flex-1 min-w-0">
              {/* Number circle */}
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                style={{ background: 'linear-gradient(135deg, #1E7FD8, #00D4FF)' }}
              >
                {step.number}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-1 md:text-center min-w-0">
                <span className="text-sm font-semibold text-text-primary leading-snug">
                  {step.title}
                </span>
                <span className="text-xs text-text-muted leading-relaxed">
                  {step.description}
                </span>
              </div>
            </div>

            {/* Connector line — hidden after last step */}
            {!isLast && (
              <>
                {/* Horizontal line (md+) */}
                <div className="hidden md:block flex-shrink-0 w-8 h-px bg-navy-700 self-start mt-5" />

                {/* Vertical line (mobile) */}
                <div className="md:hidden self-start ml-5 w-px h-6 bg-navy-700" />
              </>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
