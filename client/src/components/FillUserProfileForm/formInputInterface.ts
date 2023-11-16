export interface IFormInput {
  image?: FileList;
  bio?: string;
  behanceURL?: string;
  birthDate?: string;
  isBirthDateVisible?: boolean;
  githubURL?: string;
  goal?: string;
  fieldOfExpertise?: string;
  firstName: string;
  instagramURL?: string;
  lastName: string;
  linkedInURL?: string;
  provinceId?: string;
  countryId?: string;
  resume?: FileList;
  spokenLanguage?: { value: string; }[];
  twitterURL?: string;
  timeInCanada?: number;
  yearsOfExperience?: number;
}
