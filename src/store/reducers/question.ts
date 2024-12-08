/* eslint-disable no-console */
import { createAction, createAsyncThunk, createReducer, PayloadAction } from '@reduxjs/toolkit';
import { axiosInstance } from '../../utils/axios';
import { createAppAsyncThunk } from '../../utils/redux';


interface QuestionState {
  data: {
    question: string;
    answers: {
      yes: string;
      no: string;
    };
  };
  loading: boolean;
}

const initialState: QuestionState = {
  data: {
    question: '',
    answers: {
      yes: '',
      no: '',
    },
  },
  loading: false,
};



export const getQuestion = createAppAsyncThunk('question/GET_QUESSTION',
  async () => {
    try {
      const response = await axiosInstance.get('/data.json');

      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  });

const QuestionReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getQuestion.pending, (state) => {
      state.loading = true; 
    })
    .addCase(getQuestion.fulfilled, (state, action:any) => {
      state.data = action.payload;
      state.loading = false;
    })
    .addCase(getQuestion.rejected, (state) => {
      state.loading = false; 
    });
});


export default QuestionReducer;
