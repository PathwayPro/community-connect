export interface IFormInput {
  image?: FileList;
  bio?: string;
  behanceURL?: string;
  birthDate?: string;
  isBirthDateVisible?: boolean;
  githubURL?: string;
  goal?: string;
  fieldOfExpertise?: { value: string; }[];
  firstName: string;
  instagramURL?: string;
  lastName: string;
  linkedInURL?: string;
  provinceId?: number;
  countryId?: number;
  resume?: FileList;
  spokenLanguage?: { value: string; }[];
  twitterURL?: string;
  timeInCanada?: number;
  yearsOfExperience?: number;
  interestList?: { value: string; }[];
}
