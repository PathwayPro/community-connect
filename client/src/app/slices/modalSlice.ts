import { createSlice } from '@reduxjs/toolkit';

export const MODAL_TYPE = {
  LOGIN: 'login',
  REGISTER: 'register',
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
    },
    openModal: (state) => {
      state.isOpen = true;
    },
    showModal: (state, action) => {
      state.content = action.payload.content;
      state.isOpen = true;
    },
  },
});

export const { closeModal, openModal, showModal } = modalSlice.actions;

export default modalSlice;
