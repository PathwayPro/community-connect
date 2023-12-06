import {createSlice, PayloadAction} from '@reduxjs/toolkit';


interface UserProfile {
  fieldOfExpertise: string;
  experience: string;
  provinceId: number;
  birthDate: string;
  bio: string;
  spokenLanguage: string[];
  interests: string[];
  linkedInURL: string;
  instagramURL: string;
  twitterURL: string;
  githubURL: string;
  behanceURL: string;
}

interface User {
  firstName: string;
  lastName: string;
}

interface UserDataState {
  userProfile: UserProfile;
  user: User;
}

const initialState: UserDataState = {
  userProfile: {
    fieldOfExpertise: '',
    experience: '',
    provinceId: 1,
    birthDate: '',
    bio: '',
    spokenLanguage: [],
    interests: [],
    linkedInURL: '/',
    instagramURL: '',
    twitterURL: '/',
    githubURL: '/',
    behanceURL: '/',
  },
  user: {
    firstName: '',
    lastName: '',
  },
};

const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setUserData: (_state, action: PayloadAction<UserDataState>) => {
      return action.payload;
    },
  },
});

export const {setUserData} = userDataSlice.actions;

export default userDataSlice.reducer;
