"use client";

import { cn } from "@/lib/utils";

interface FormProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export function FormProgressIndicator({ currentStep, totalSteps }: FormProgressIndicatorProps) {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex items-center gap-0">
        {Array.from({ length: totalSteps }, (_, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === currentStep;
          const isCompleted = stepNumber < currentStep;
          
          return (
            <div key={stepNumber} className="flex items-center">
              <div
                className={cn(
                  "w-5 h-5 rounded-full transition-all duration-300",
                  isActive && "bg-black",
                  isCompleted && "bg-black",
                  !isActive && !isCompleted && "bg-black/20"
                )}
              />
              {index < totalSteps - 1 && (
                <div
                  className={cn(
                    "h-1 w-12 transition-all duration-300",
                    isCompleted ? "bg-black" : "bg-black/20"
                  )}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}