import { createSlice } from '@reduxjs/toolkit';

export const MODAL_TYPE = {
  LOGIN: 'login',
  REGISTER: 'register',
  FROGOT_PASSWORD: 'forgotPassword',
  RESET_PASSWORD: 'resetPassword',
  SEND_CONFIRMATION_EMAIL: 'sendConfirmationEmail',
  VERIFY_EMAIL: 'verifyEmail',
  FILL_USER_PROFILE: 'fillUserProfile',
  WRITE_POST: 'writePost',
  WRITE_MESSAGE: 'writeMessage',
  REPOST: 'repost',
};

type postData = {
  id: number;
  name: string;
  content: string;
  position: string;
  date: string;
  onRepostSuccess?: () => void;
};

type initialStateType = {
  content: string;
  isOpen: boolean;
  closeOnOverlayClick: boolean;
  postData?: postData;
};

type payloadType = {
  content: string;
  closeOnOverlayClick?: boolean;
  postData?: postData;
};

type actionType = {
  payload: payloadType;
  type: string;
};

const initialState: initialStateType = {
  content: '',
  isOpen: false,
  closeOnOverlayClick: true,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    closeModal: (state) => {
      state.isOpen = false;
      state.content = '';
      state.closeOnOverlayClick = initialState.closeOnOverlayClick;
    },
    showModal: (state, action: actionType) => {
      state.content = action.payload.content;
      state.isOpen = true;
      state.closeOnOverlayClick = action.payload.closeOnOverlayClick ?? initialState.closeOnOverlayClick;
      state.postData = action.payload.postData;
    },
  },
});

export const { closeModal, showModal } = modalSlice.actions;

export default modalSlice.reducer;
