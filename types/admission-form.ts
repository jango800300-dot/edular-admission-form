export interface AdmissionFormData {
  // Step 1: Program Information
  campus: string;
  programOfInterest: string;
  schedule: string;
  
  // Step 2: Personal Information
  firstName: string;
  lastName: string;
  middleName?: string;
  
  // Step 3: Address Information
  zip: string;
  address: string;
  city: string;
  state: string;
  
  // Step 4: Personal Details
  dateOfBirth: string;
  socialSecurityNumber: string;
  
  // Step 5: Contact Information
  cellPhone: string;
  alternatePhone?: string;
  email: string;
  
  // Step 6: Education Background
  currentEducationLevel: string;
  housingPlan: string;
  
  // Step 7: Citizenship & Gender
  citizenshipStatus: string;
  gender: string;
  
  // Step 8: Race & Ethnicity
  hispanicOrLatino: string;
  ethnicity: string;
  
  // Step 9: Prior Transfer Credits
  hasTransferCredits: string;
  
  // Step 10: Disciplinary History
  hasDisciplinaryHistory: string;
  schoolName?: string;
  incidentDate?: string;
  policyViolationDescription?: string;
  disciplinaryActionDescription?: string;
  
  // Step 11: Acknowledgment
  acknowledgeTerms: boolean;
  
  // Step 12: Signature
  signature: string;
}

export interface FormStep {
  id: number;
  title: string;
  description?: string;
  fields: string[];
}

export const FORM_STEPS: FormStep[] = [
  {
    id: 1,
    title: "Program Selection",
    description: "What program are you interested in?",
    fields: ["campus", "programOfInterest", "schedule"]
  },
  {
    id: 2,
    title: "Personal Information",
    description: "Provide your personal information",
    fields: ["firstName", "lastName", "middleName"]
  },
  {
    id: 3,
    title: "Address",
    description: "Provide your address",
    fields: ["zip", "address", "city", "state"]
  },
  {
    id: 4,
    title: "Personal Details",
    description: "Provide your personal information",
    fields: ["dateOfBirth", "socialSecurityNumber"]
  },
  {
    id: 5,
    title: "Contact Information",
    description: "Provide your contact information",
    fields: ["cellPhone", "alternatePhone", "email"]
  },
  {
    id: 6,
    title: "Education",
    description: "Education",
    fields: ["currentEducationLevel", "housingPlan"]
  },
  {
    id: 7,
    title: "Citizenship & Gender",
    description: "Citizenship & Gender",
    fields: ["citizenshipStatus", "gender"]
  },
  {
    id: 8,
    title: "Race & Ethnicity",
    description: "Race & Ethnicity",
    fields: ["hispanicOrLatino", "ethnicity"]
  },
  {
    id: 9,
    title: "Prior Transfer Credits",
    description: "Prior transfer credits",
    fields: ["hasTransferCredits"]
  },
  {
    id: 10,
    title: "Disciplinary History",
    description: "Disciplinary history",
    fields: ["hasDisciplinaryHistory", "schoolName", "incidentDate", "policyViolationDescription", "disciplinaryActionDescription"]
  },
  {
    id: 11,
    title: "Acknowledgment",
    description: "Acknowledge",
    fields: ["acknowledgeTerms"]
  },
  {
    id: 12,
    title: "Signature",
    description: "Application signature",
    fields: ["signature"]
  }
];

// Options for dropdowns
export const CAMPUS_OPTIONS = [
  { value: "north", label: "North Campus" },
  { value: "south", label: "South Campus" },
  { value: "east", label: "East Campus" },
  { value: "west", label: "West Campus" },
];

export const PROGRAM_OPTIONS = [
  { value: "computer-science", label: "Computer Science" },
  { value: "business-admin", label: "Business Administration" },
  { value: "engineering", label: "Engineering" },
  { value: "medicine", label: "Medicine" },
  { value: "law", label: "Law" },
];

export const SCHEDULE_OPTIONS = [
  { value: "full-time", label: "Full-time" },
  { value: "part-time", label: "Part-time" },
  { value: "evening", label: "Evening Classes" },
  { value: "weekend", label: "Weekend Classes" },
];

export const EDUCATION_LEVEL_OPTIONS = [
  { value: "high-school", label: "High School" },
  { value: "some-college", label: "Some College" },
  { value: "associates", label: "Associate's Degree" },
  { value: "bachelors", label: "Bachelor's Degree" },
  { value: "masters", label: "Master's Degree" },
  { value: "doctorate", label: "Doctorate" },
];

export const HOUSING_PLAN_OPTIONS = [
  { value: "on-campus", label: "On Campus" },
  { value: "off-campus", label: "Off Campus" },
  { value: "commuter", label: "Commuter" },
];

export const CITIZENSHIP_OPTIONS = [
  { value: "us-citizen", label: "US Citizen" },
  { value: "permanent-resident", label: "Permanent Resident" },
  { value: "international", label: "International Student" },
];

export const GENDER_OPTIONS = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "non-binary", label: "Non-binary" },
  { value: "prefer-not-to-say", label: "Prefer not to say" },
];

export const ETHNICITY_OPTIONS = [
  { value: "white", label: "White" },
  { value: "black", label: "Black or African American" },
  { value: "asian", label: "Asian" },
  { value: "native-american", label: "Native American" },
  { value: "pacific-islander", label: "Pacific Islander" },
  { value: "mixed", label: "Two or More Races" },
  { value: "other", label: "Other" },
];

export const STATE_OPTIONS = [
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AZ", label: "Arizona" },
  { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DE", label: "Delaware" },
  { value: "FL", label: "Florida" },
  { value: "GA", label: "Georgia" },
  // Add more states as needed
];