"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { FormProgressIndicator } from "@/components/form-progress-indicator";
import { StepProgramSelection } from "@/components/steps/step-program-selection";
import {
  Step2PersonalInfo,
  Step3Address,
  Step4PersonalDetails,
  Step5ContactInfo,
  Step6Education,
  Step7CitizenshipGender,
  Step8RaceEthnicity,
  Step9TransferCredits,
  Step10DisciplinaryHistory,
  Step11Acknowledgment,
  Step12Signature,
} from "@/components/steps/all-steps";
import { AdmissionFormData, FORM_STEPS } from "@/types/admission-form";

export function AdmissionFormContainer() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Partial<AdmissionFormData>>({});

  const handleNext = (stepData: Partial<AdmissionFormData>) => {
    setFormData((prev) => ({ ...prev, ...stepData }));
    setCurrentStep((prev) => Math.min(prev + 1, FORM_STEPS.length));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="min-h-screen bg-[#666666] p-8 flex items-center justify-center">
      <Card className="w-full max-w-[1520px] bg-white shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 p-10">
          <div className="flex items-center justify-between gap-20">
            {/* Title */}
            <div className="flex-shrink-0 w-[264px]">
              <h1 className="text-[32px] font-extrabold text-[#212121] uppercase leading-tight">
                Application
                <br />
                for Admission
              </h1>
            </div>

            {/* Progress Indicator */}
            <div className="flex-1">
              <FormProgressIndicator 
                currentStep={currentStep} 
                totalSteps={FORM_STEPS.length} 
              />
            </div>

            {/* Logo */}
            <div className="flex-shrink-0 w-[264px] flex justify-end">
              <div className="relative w-[200px] h-[102px]">
                <Image
                  src="/logo-placeholder.png"
                  alt="Paul Mitchell Schools"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-[#f7f7f7] min-h-[800px] px-[400px] py-20">
          {currentStep === 1 && (
            <StepProgramSelection 
              data={formData} 
              onNext={handleNext}
            />
          )}
          
          {currentStep === 2 && (
            <Step2PersonalInfo 
              data={formData} 
              onNext={handleNext}
              onBack={handleBack}
            />
          )}
          
          {currentStep === 3 && (
            <Step3Address 
              data={formData} 
              onNext={handleNext}
              onBack={handleBack}
            />
          )}
          
          {currentStep === 4 && (
            <Step4PersonalDetails 
              data={formData} 
              onNext={handleNext}
              onBack={handleBack}
            />
          )}
          
          {currentStep === 5 && (
            <Step5ContactInfo 
              data={formData} 
              onNext={handleNext}
              onBack={handleBack}
            />
          )}
          
          {currentStep === 6 && (
            <Step6Education 
              data={formData} 
              onNext={handleNext}
              onBack={handleBack}
            />
          )}
          
          {currentStep === 7 && (
            <Step7CitizenshipGender 
              data={formData} 
              onNext={handleNext}
              onBack={handleBack}
            />
          )}
          
          {currentStep === 8 && (
            <Step8RaceEthnicity 
              data={formData} 
              onNext={handleNext}
              onBack={handleBack}
            />
          )}
          
          {currentStep === 9 && (
            <Step9TransferCredits 
              data={formData} 
              onNext={handleNext}
              onBack={handleBack}
            />
          )}
          
          {currentStep === 10 && (
            <Step10DisciplinaryHistory 
              data={formData} 
              onNext={handleNext}
              onBack={handleBack}
            />
          )}
          
          {currentStep === 11 && (
            <Step11Acknowledgment 
              data={formData} 
              onNext={handleNext}
              onBack={handleBack}
            />
          )}
          
          {currentStep === 12 && (
            <Step12Signature 
              data={formData} 
              onNext={(data) => {
                setFormData((prev) => ({ ...prev, ...data }));
                alert("Application submitted successfully!");
                console.log("Final form data:", { ...formData, ...data });
              }}
              onBack={handleBack}
            />
          )}
        </div>
      </Card>
    </div>
  );
}