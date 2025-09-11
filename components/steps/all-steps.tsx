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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import {
  AdmissionFormData,
  STATE_OPTIONS,
  EDUCATION_LEVEL_OPTIONS,
  HOUSING_PLAN_OPTIONS,
  CITIZENSHIP_OPTIONS,
  GENDER_OPTIONS,
  ETHNICITY_OPTIONS,
} from "@/types/admission-form";

interface StepProps {
  data: Partial<AdmissionFormData>;
  onNext: (data: Partial<AdmissionFormData>) => void;
  onBack?: () => void;
}

// Step 2: Personal Information
const step2Schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  middleName: z.string().optional(),
});

export function Step2PersonalInfo({ data, onNext, onBack }: StepProps) {
  const form = useForm({
    resolver: zodResolver(step2Schema),
    defaultValues: {
      firstName: data.firstName || "",
      lastName: data.lastName || "",
      middleName: data.middleName || "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onNext)} className="space-y-10">
        <h2 className="text-2xl font-bold text-[#212121]">
          Provide your personal information
        </h2>

        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="uppercase text-[#666666] text-base font-semibold">
                FIRST NAME *
              </FormLabel>
              <FormControl>
                <Input placeholder="First name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="uppercase text-[#666666] text-base font-semibold">
                LAST NAME *
              </FormLabel>
              <FormControl>
                <Input placeholder="Last name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="middleName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="uppercase text-[#666666] text-base font-semibold">
                MIDDLE NAME
              </FormLabel>
              <FormControl>
                <Input placeholder="Middle" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-center gap-4 pt-10">
          <Button 
            type="button"
            onClick={onBack}
            variant="outline"
            className="uppercase font-bold text-xl px-8 py-6 rounded-lg"
          >
            BACK
          </Button>
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

// Step 3: Address
const step3Schema = z.object({
  zip: z.string().min(5, "ZIP code is required"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
});

export function Step3Address({ data, onNext, onBack }: StepProps) {
  const form = useForm({
    resolver: zodResolver(step3Schema),
    defaultValues: {
      zip: data.zip || "",
      address: data.address || "",
      city: data.city || "",
      state: data.state || "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onNext)} className="space-y-10">
        <h2 className="text-2xl font-bold text-[#212121]">
          Provide your address
        </h2>

        <FormField
          control={form.control}
          name="zip"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="uppercase text-[#666666] text-base font-semibold">
                ZIP *
              </FormLabel>
              <FormControl>
                <Input placeholder="First name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="uppercase text-[#666666] text-base font-semibold">
                ADDRESS *
              </FormLabel>
              <FormControl>
                <Input placeholder="Type your full adress" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="uppercase text-[#666666] text-base font-semibold">
                CITY *
              </FormLabel>
              <FormControl>
                <Input placeholder="City name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="uppercase text-[#666666] text-base font-semibold">
                STATE *
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="h-12 bg-white border-2 border-neutral-200 text-lg">
                    <SelectValue placeholder="State" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {STATE_OPTIONS.map((option) => (
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

        <div className="flex justify-center gap-4 pt-10">
          <Button 
            type="button"
            onClick={onBack}
            variant="outline"
            className="uppercase font-bold text-xl px-8 py-6 rounded-lg"
          >
            BACK
          </Button>
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

// Step 4: Personal Details
const step4Schema = z.object({
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  socialSecurityNumber: z.string().min(1, "SSN is required"),
});

export function Step4PersonalDetails({ data, onNext, onBack }: StepProps) {
  const form = useForm({
    resolver: zodResolver(step4Schema),
    defaultValues: {
      dateOfBirth: data.dateOfBirth || "",
      socialSecurityNumber: data.socialSecurityNumber || "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onNext)} className="space-y-10">
        <h2 className="text-2xl font-bold text-[#212121]">
          Provide your personal information
        </h2>

        <FormField
          control={form.control}
          name="dateOfBirth"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="uppercase text-[#666666] text-base font-semibold">
                DATE OF BIRTH *
              </FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="socialSecurityNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="uppercase text-[#666666] text-base font-semibold">
                SOCIAL SECURITY NUMBER *
              </FormLabel>
              <FormControl>
                <Input placeholder="Type your SSN" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-center gap-4 pt-10">
          <Button 
            type="button"
            onClick={onBack}
            variant="outline"
            className="uppercase font-bold text-xl px-8 py-6 rounded-lg"
          >
            BACK
          </Button>
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

// Step 5: Contact Information
const step5Schema = z.object({
  cellPhone: z.string().min(1, "Cell phone is required"),
  alternatePhone: z.string().optional(),
  email: z.string().email("Invalid email address"),
});

export function Step5ContactInfo({ data, onNext, onBack }: StepProps) {
  const form = useForm({
    resolver: zodResolver(step5Schema),
    defaultValues: {
      cellPhone: data.cellPhone || "",
      alternatePhone: data.alternatePhone || "",
      email: data.email || "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onNext)} className="space-y-10">
        <h2 className="text-2xl font-bold text-[#212121]">
          Provide your contact information
        </h2>

        <FormField
          control={form.control}
          name="cellPhone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="uppercase text-[#666666] text-base font-semibold">
                CELL PHONE *
              </FormLabel>
              <FormControl>
                <Input placeholder="Enter phone number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="alternatePhone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="uppercase text-[#666666] text-base font-semibold">
                ALTERNATE PHONE
              </FormLabel>
              <FormControl>
                <Input placeholder="Enter your home phone number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="uppercase text-[#666666] text-base font-semibold">
                EMAIL *
              </FormLabel>
              <FormControl>
                <Input type="email" placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-center gap-4 pt-10">
          <Button 
            type="button"
            onClick={onBack}
            variant="outline"
            className="uppercase font-bold text-xl px-8 py-6 rounded-lg"
          >
            BACK
          </Button>
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

// Step 6: Education
const step6Schema = z.object({
  currentEducationLevel: z.string().min(1, "Education level is required"),
  housingPlan: z.string().min(1, "Housing plan is required"),
});

export function Step6Education({ data, onNext, onBack }: StepProps) {
  const form = useForm({
    resolver: zodResolver(step6Schema),
    defaultValues: {
      currentEducationLevel: data.currentEducationLevel || "",
      housingPlan: data.housingPlan || "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onNext)} className="space-y-10">
        <h2 className="text-2xl font-bold text-[#212121]">Education</h2>

        <FormField
          control={form.control}
          name="currentEducationLevel"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="uppercase text-[#666666] text-base font-semibold">
                CURRENT EDUCATION LEVEL* (SELECT ONE)
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="h-12 bg-white border-2 border-neutral-200 text-lg">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {EDUCATION_LEVEL_OPTIONS.map((option) => (
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
          name="housingPlan"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="uppercase text-[#666666] text-base font-semibold">
                HOUSING PLAN* (SELECT ONE)
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="h-12 bg-white border-2 border-neutral-200 text-lg">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {HOUSING_PLAN_OPTIONS.map((option) => (
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

        <div className="flex justify-center gap-4 pt-10">
          <Button 
            type="button"
            onClick={onBack}
            variant="outline"
            className="uppercase font-bold text-xl px-8 py-6 rounded-lg"
          >
            BACK
          </Button>
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

// Step 7: Citizenship & Gender
const step7Schema = z.object({
  citizenshipStatus: z.string().min(1, "Citizenship status is required"),
  gender: z.string().min(1, "Gender is required"),
});

export function Step7CitizenshipGender({ data, onNext, onBack }: StepProps) {
  const form = useForm({
    resolver: zodResolver(step7Schema),
    defaultValues: {
      citizenshipStatus: data.citizenshipStatus || "",
      gender: data.gender || "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onNext)} className="space-y-10">
        <h2 className="text-2xl font-bold text-[#212121]">Citizenship & Gender</h2>

        <FormField
          control={form.control}
          name="citizenshipStatus"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="uppercase text-[#666666] text-base font-semibold">
                CITIZENSHIP/RESIDENCE STATUS* (SELECT ONE)
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="h-12 bg-white border-2 border-neutral-200 text-lg">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {CITIZENSHIP_OPTIONS.map((option) => (
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
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="uppercase text-[#666666] text-base font-semibold">
                GENDER* (SELECT ONE)
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="h-12 bg-white border-2 border-neutral-200 text-lg">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {GENDER_OPTIONS.map((option) => (
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

        <div className="flex justify-center gap-4 pt-10">
          <Button 
            type="button"
            onClick={onBack}
            variant="outline"
            className="uppercase font-bold text-xl px-8 py-6 rounded-lg"
          >
            BACK
          </Button>
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

// Step 8: Race & Ethnicity
const step8Schema = z.object({
  hispanicOrLatino: z.string().min(1, "Please select an option"),
  ethnicity: z.string().min(1, "Ethnicity is required"),
});

export function Step8RaceEthnicity({ data, onNext, onBack }: StepProps) {
  const form = useForm({
    resolver: zodResolver(step8Schema),
    defaultValues: {
      hispanicOrLatino: data.hispanicOrLatino || "",
      ethnicity: data.ethnicity || "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onNext)} className="space-y-10">
        <h2 className="text-2xl font-bold text-[#212121]">Race & Ethnicity</h2>

        <FormField
          control={form.control}
          name="hispanicOrLatino"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel className="uppercase text-[#666666] text-base font-semibold">
                ARE YOU HISPANIC OR LATINO?*
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-row gap-8"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="hispanic-yes" />
                    <label htmlFor="hispanic-yes" className="text-lg font-normal">
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="hispanic-no" />
                    <label htmlFor="hispanic-no" className="text-lg font-normal">
                      No
                    </label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="ethnicity"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="uppercase text-[#666666] text-base font-semibold">
                ETHNICITY* (SELECT ONE)
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="h-12 bg-white border-2 border-neutral-200 text-lg">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {ETHNICITY_OPTIONS.map((option) => (
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

        <div className="flex justify-center gap-4 pt-10">
          <Button 
            type="button"
            onClick={onBack}
            variant="outline"
            className="uppercase font-bold text-xl px-8 py-6 rounded-lg"
          >
            BACK
          </Button>
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

// Step 9: Prior Transfer Credits
const step9Schema = z.object({
  hasTransferCredits: z.string().min(1, "Please select an option"),
});

export function Step9TransferCredits({ data, onNext, onBack }: StepProps) {
  const form = useForm({
    resolver: zodResolver(step9Schema),
    defaultValues: {
      hasTransferCredits: data.hasTransferCredits || "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onNext)} className="space-y-10">
        <h2 className="text-2xl font-bold text-[#212121]">Prior transfer credits</h2>

        <div className="text-lg text-gray-700 leading-relaxed">
          HAVE YOU COMPLETED ANY COURSEWORK AT A COSMETOLOGY OR BARBERING PROGRAM 
          AT ANOTHER SCHOOL IN THE U.S. (INCLUDING ANOTHER PAUL MITCHELL SCHOOL) THAT YOU 
          WOULD LIKE US TO EVALUATE FOR POTENTIAL TRANSFER CREDIT?*
        </div>

        <FormField
          control={form.control}
          name="hasTransferCredits"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-row gap-8"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="transfer-yes" />
                    <label htmlFor="transfer-yes" className="text-lg font-normal">
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="transfer-no" />
                    <label htmlFor="transfer-no" className="text-lg font-normal">
                      No
                    </label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-center gap-4 pt-10">
          <Button 
            type="button"
            onClick={onBack}
            variant="outline"
            className="uppercase font-bold text-xl px-8 py-6 rounded-lg"
          >
            BACK
          </Button>
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

// Step 10: Disciplinary History
const step10Schema = z.object({
  hasDisciplinaryHistory: z.string().min(1, "Please select an option"),
  schoolName: z.string().optional(),
  incidentDate: z.string().optional(),
  policyViolationDescription: z.string().optional(),
  disciplinaryActionDescription: z.string().optional(),
});

export function Step10DisciplinaryHistory({ data, onNext, onBack }: StepProps) {
  const form = useForm({
    resolver: zodResolver(step10Schema),
    defaultValues: {
      hasDisciplinaryHistory: data.hasDisciplinaryHistory || "",
      schoolName: data.schoolName || "",
      incidentDate: data.incidentDate || "",
      policyViolationDescription: data.policyViolationDescription || "",
      disciplinaryActionDescription: data.disciplinaryActionDescription || "",
    },
  });

  const hasDisciplinaryHistory = form.watch("hasDisciplinaryHistory");

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onNext)} className="space-y-10">
        <h2 className="text-2xl font-bold text-[#212121]">Disciplinary history</h2>

        <div className="text-lg text-gray-700 leading-relaxed">
          HAVE YOU EVER BEEN SUSPENDED OR EXPELLED FROM ANY SCHOOL (INCLUDES HIGH 
          SCHOOL, TECHNICAL SCHOOL, COSMETOLOGY SCHOOL, AND COLLEGE)?*
        </div>

        <FormField
          control={form.control}
          name="hasDisciplinaryHistory"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-row gap-8"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="discipline-yes" />
                    <label htmlFor="discipline-yes" className="text-lg font-normal">
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="discipline-no" />
                    <label htmlFor="discipline-no" className="text-lg font-normal">
                      No
                    </label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {hasDisciplinaryHistory === "yes" && (
          <>
            <div className="text-base text-gray-600">
              IF YES, YOU MUST PROVIDE THE FOLLOWING INFORMATION:
            </div>

            <FormField
              control={form.control}
              name="schoolName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-[#666666] text-base font-semibold">
                    NAME OF THE SCHOOL
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Enter phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="incidentDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-[#666666] text-base font-semibold">
                    APPROXIMATE DATE OF THE INCIDENT
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="h-12 bg-white border-2 border-neutral-200 text-lg">
                        <SelectValue placeholder="dd.mm.yyyy" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="2024">2024</SelectItem>
                      <SelectItem value="2023">2023</SelectItem>
                      <SelectItem value="2022">2022</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="policyViolationDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-[#666666] text-base font-semibold">
                    DESCRIPTION OF THE POLICY VIOLATION
                  </FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="disciplinaryActionDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-[#666666] text-base font-semibold">
                    DESCRIPTION OF THE DISCIPLINARY ACTION
                  </FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

        <div className="flex justify-center gap-4 pt-10">
          <Button 
            type="button"
            onClick={onBack}
            variant="outline"
            className="uppercase font-bold text-xl px-8 py-6 rounded-lg"
          >
            BACK
          </Button>
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

// Step 11: Acknowledgment
const step11Schema = z.object({
  acknowledgeTerms: z.boolean().refine((val) => val === true, {
    message: "You must acknowledge the terms to continue",
  }),
});

export function Step11Acknowledgment({ data, onNext, onBack }: StepProps) {
  const form = useForm({
    resolver: zodResolver(step11Schema),
    defaultValues: {
      acknowledgeTerms: data.acknowledgeTerms || false,
    },
  });

  const acknowledgmentText = `WE ENCOURAGE YOU TO REVIEW THE CATALOG IN DETAIL AND ALL CONSUMER 
INFORMATION DISCLOSURES ON OUR WEBSITE AT: HTTPS://PAULMITCHELL.EDU/BOISE/
CONSUMER-INFORMATION

IN COMPLIANCE WITH APPLICABLE LAWS AND IN FURTHERANCE OF ITS COMMITMENT TO 
FOSTERING AN ENVIRONMENT THAT WELCOMES AND EMBRACES DIVERSITY, THE SCHOOL 
DOES NOT DISCRIMINATE ON THE BASIS OF RACE, COLOR, CREED, RELIGION, NATIONAL 
ORIGIN, ETHNIC ORIGIN, SEX (INCLUDING PREGNANCY AND PARENTING STATUS), DISABILITY, 
AGE, VETERAN STATUS, SEXUAL ORIENTATION, GENDER IDENTITY OR EXPRESSION, MARITAL 
STATUS OR GENETIC INFORMATION IN ITS PROGRAMS OR ACTIVITIES, INCLUDING 
EMPLOYMENT, ADMISSIONS, AND EDUCATIONAL PROGRAMS. WE ENCOURAGE PEOPLE OF ALL 
BACKGROUNDS TO APPLY TO BE A STUDENT.

WE ARE COMMITTED TO PROVIDING QUALIFIED STUDENTS WITH A DOCUMENTED DISABILITY 
AN EQUAL OPPORTUNITY TO ACCESS THE BENEFITS, RIGHTS, AND PRIVILEGES OF SCHOOL 
PROGRAMS IN THE MOST INTEGRATED SETTING APPROPRIATE TO THE STUDENT'S NEEDS. IN 
COMPLIANCE WITH THE ADA SECTION 504 OF THE REHABILITATION ACT OF 1973 AND 
CONSISTENT WITH ALL FEDERAL AND STATE LAWS, WE ENCOURAGE YOU TO REACH OUT TO 
THE ADA COORDINATOR AT THE SCHOOL TO COMPLETE AN APPLICATION FOR 
ACCOMMODATIONS, TO IDENTIFY REASONABLE AND APPROPRIATE ACCOMMODATIONS 
PRIOR TO ENROLLMENT.

I UNDERSTAND THAT I CANNOT BE CONSIDERED FOR ADMISSION TO THE SCHOOL UNTIL I 
COMPLETE ALL REQUIRED COMPONENTS OF THE ADMISSION PROCESS.

I UNDERSTAND THAT A CRIMINAL CONVICTION AT ANY TIME PRIOR, DURING OR AFTER MY 
PROGRAM OF STUDY MAY LEAD TO A LICENSE DENIAL BY THE LICENSING AUTHORITY IN ANY 
JURISDICTION. IN SUCH CASES, IT WILL BE UP TO THE LICENSING AUTHORITY TO DETERMINE 
MY ELIGIBILITY.

I UNDERSTAND THAT COMPLETION OF THIS APPLICATION DOES NOT GUARANTEE THAT I WILL 
BE ADMITTED TO THE SCHOOL.

I UNDERSTAND THAT ONCE ACCEPTED, I WILL NOT BECOME AN ENROLLED STUDENT AT THE 
SCHOOL UNTIL I COMPLETE AND ENTER INTO AN ENROLLMENT AGREEMENT WITH THE 
SCHOOL AND MEET ALL OTHER REQUIREMENTS FOR ENROLLMENT.

I CERTIFY THE INFORMATION I HAVE PROVIDED ON MY APPLICATION FOR ADMISSION TO PAUL 
MITCHELL THE SCHOOL BOISE IS TRUE AND ACCURATE.`;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onNext)} className="space-y-10">
        <h2 className="text-2xl font-bold text-[#212121]">Acknowledge</h2>

        <div className="bg-gray-50 p-6 rounded-lg max-h-96 overflow-y-auto">
          <pre className="whitespace-pre-wrap text-sm font-mono leading-relaxed">
            {acknowledgmentText}
          </pre>
        </div>

        <FormField
          control={form.control}
          name="acknowledgeTerms"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-base font-normal">
                  I acknowledge that I have read and understood all the terms and conditions above
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <div className="flex justify-center gap-4 pt-10">
          <Button 
            type="button"
            onClick={onBack}
            variant="outline"
            className="uppercase font-bold text-xl px-8 py-6 rounded-lg"
          >
            BACK
          </Button>
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

// Step 12: Signature & Submit
const step12Schema = z.object({
  signature: z.string().min(1, "Signature is required"),
});

export function Step12Signature({ data, onNext, onBack }: StepProps) {
  const form = useForm({
    resolver: zodResolver(step12Schema),
    defaultValues: {
      signature: data.signature || "",
    },
  });

  const nextSteps = [
    "1. SUBMIT THIS APPLICATION FOR ADMISSIONS WITH THE FOLLOWING DOCUMENTATION:",
    "   1. PROOF OF COMPLETION OF SECONDARY EDUCATION (OR EQUIVALENT) SUCH AS A HIGH SCHOOL DIPLOMA, G.E.D. OR HOMESCHOOLING DOCUMENTS",
    "2. SUBMIT A COPY OF A GOVERNMENT ISSUED IDENTIFICATION SUCH AS A DRIVER'S LICENSE",
    "3. IF YOU WOULD LIKE TO BE EVALUATED FOR TRANSFER CREDIT FROM ANOTHER COSMETOLOGY PROGRAM, SUBMIT OFFICIAL TRANSCRIPTS FROM THE SCHOOL",
    "4. STUDENT ENROLLING IN THE 900 HOUR STUDENT INSTRUCTOR PROGRAM MUST HAVE 1 YEAR OF EXPERIENCE, IN A SALON SERVICING GUEST, AS A LICENSED COSMETOLOGIST, BARBER, BARBER STYLIST, ESTHETICIAN, OR NAIL TECHNICIAN. PROSPECTIVE STUDENT INSTRUCTOR STUDENTS WITH LESS THAN ONE YEAR AS A LICENSED PROFESSIONAL MUST OBTAIN PERMISSION FROM THE SCHOOL DIRECTOR TO ENROLL. STUDENTS MUST ALSO PROVIDE A COPY OF A VALID AND CURRENT IDAHO COSMETOLOGY, NAIL TECHNOLOGIST, ESTHETICIAN, BARBER OR BARBER-STYLIST LICENSE.",
    "5. STUDENT ENROLLING IN THE 600 HOUR (WITH 2 YEARS OR MORE OF COSMETOLOGY EXPERIENCE) MUST PROVIDE A COPY OF A VALID AND CURRENT IDAHO COSMETOLOGY, NAIL TECHNOLOGIST, ESTHETICIAN, BARBER OR BARBER-STYLIST LICENSE."
  ];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onNext)} className="space-y-10">
        <h2 className="text-2xl font-bold text-[#212121]">Application signature</h2>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="font-semibold mb-4">NEXT STEPS</h3>
          <div className="space-y-2 text-sm">
            {nextSteps.map((step, index) => (
              <p key={index} className="leading-relaxed">{step}</p>
            ))}
          </div>
        </div>

        <FormField
          control={form.control}
          name="signature"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">
                Please sign below to submit your application
              </FormLabel>
              <FormControl>
                <div className="border-2 border-neutral-200 rounded-lg p-8 bg-white">
                  <Button 
                    type="button"
                    className="bg-black text-white uppercase font-bold px-6 py-3 rounded-lg hover:bg-black/90"
                    onClick={() => field.onChange("Signed")}
                  >
                    SIGN
                  </Button>
                  {field.value && (
                    <p className="mt-4 text-gray-600">Signed electronically</p>
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-center gap-4 pt-10">
          <Button 
            type="button"
            onClick={onBack}
            variant="outline"
            className="uppercase font-bold text-xl px-8 py-6 rounded-lg"
          >
            BACK
          </Button>
          <Button 
            type="submit" 
            className="bg-black text-white uppercase font-bold text-xl px-8 py-6 rounded-lg hover:bg-black/90"
          >
            SUBMIT
          </Button>
        </div>
      </form>
    </Form>
  );
}