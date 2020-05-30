import { Types } from '../Types';

export const getDataRequest = () => ({
  type: Types.GET_DATA_REQUEST,
});

export const getDataSuccess = ({ data }) => ({
  type: Types.GET_DATA_SUCCESS,
  payload: data,
});
