import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserProfileState {
  image?: FileList;
  bio?: string;
  behanceURL?: string;
  birthDate?: string;
  isBirthDateVisible?: boolean;
  githubURL?: string;
  goal?: string;
  fieldOfExpertise?: string;
  // firstName: string;
  instagramURL?: string;
  // lastName: string;
  linkedInURL?: string;
  provinceId?: number;
  countryId?: number;
  resume?: FileList;
  spokenLanguage?: string;
  twitterURL?: string;
  timeInCanada?: string;
  yearsOfExperience?: string;
}

const initialState: UserProfileState = {};

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    setUserProfile: (state, action: PayloadAction<UserProfileState>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setUserProfile } = userProfileSlice.actions;

export default userProfileSlice.reducer;
