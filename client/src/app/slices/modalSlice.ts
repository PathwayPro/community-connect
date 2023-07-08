import { createSlice } from '@reduxjs/toolkit';

export const MODAL_TYPE = {
  LOGIN: 'login',
  REGISTER: 'register',
  FROGOT_PASSWORD: 'forgotPassword',
  RESET_PASSWORD: 'resetPassword',
  CONFIRM_EMAIL: 'confirmEmail',
};

type initialStateType = {
  content: string;
  isOpen: boolean;
};

const initialState: initialStateType = {
  content: '',
  isOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    closeModal: (state) => {
      state.isOpen = false;
      state.content = '';
    },
    showModal: (state, action) => {
      state.content = action.payload.content;
      state.isOpen = true;
    },
  },
});

export const { closeModal, showModal } = modalSlice.actions;

export default modalSlice;
