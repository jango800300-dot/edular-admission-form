"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { 
  CAMPUS_OPTIONS, 
  PROGRAM_OPTIONS, 
  SCHEDULE_OPTIONS,
  AdmissionFormData 
} from "@/types/admission-form";

const stepSchema = z.object({
  campus: z.string().min(1, "Please select a campus"),
  programOfInterest: z.string().min(1, "Please select a program"),
  schedule: z.string().min(1, "Please select a schedule"),
});

type StepFormData = z.infer<typeof stepSchema>;

interface StepProgramSelectionProps {
  data: Partial<AdmissionFormData>;
  onNext: (data: Partial<AdmissionFormData>) => void;
}

export function StepProgramSelection({ data, onNext }: StepProgramSelectionProps) {
  const form = useForm<StepFormData>({
    resolver: zodResolver(stepSchema),
    defaultValues: {
      campus: data.campus || "",
      programOfInterest: data.programOfInterest || "",
      schedule: data.schedule || "",
    },
  });

  const onSubmit = (formData: StepFormData) => {
    // Basic validation logic - enhance as needed
    if (formData.programOfInterest === "medicine" && formData.schedule !== "full-time") {
      form.setError("schedule", {
        message: "Medicine program requires full-time enrollment"
      });
      return;
    }
    
    onNext(formData);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
        <h2 className="text-2xl font-bold text-[#212121]">
          What program are you interested in?
        </h2>

        <FormField
          control={form.control}
          name="campus"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="uppercase text-[#666666] text-base font-semibold">
                SELECT CAMPUS *
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="h-12 bg-white border-2 border-neutral-200 text-lg">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {CAMPUS_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="programOfInterest"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="uppercase text-[#666666] text-base font-semibold">
                WHAT IS YOUR PROGRAM OF INTEREST *
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="h-12 bg-white border-2 border-neutral-200 text-lg">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {PROGRAM_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="schedule"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="uppercase text-[#666666] text-base font-semibold">
                SELECT SCHEDULE *
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="h-12 bg-white border-2 border-neutral-200 text-lg">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {SCHEDULE_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-center pt-10">
          <Button 
            type="submit" 
            className="bg-black text-white uppercase font-bold text-xl px-8 py-6 rounded-lg hover:bg-black/90"
          >
            NEXT
          </Button>
        </div>
      </form>
    </Form>
  );
}