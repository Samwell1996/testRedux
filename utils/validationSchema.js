import * as Yup from 'yup';

export const email = Yup.string()
  .email('Please, enter valid email.')
  .max(100, 'Please, enter valid email.')
  .required('Please, enter valid email.');
export const password = Yup.string()
  .min(6, 'Password must contain 6-20 characters.')
  .max(20, 'Password must contain 6-20 characters.')
  .required('Passwords don’t match.');
export const fullName = Yup.string()
  .min(4, 'Please, enter valid name.')
  .max(100, 'Must be shorter than 100')
  .required('Please, enter valid name.');

export const shape = (args) => Yup.object().shape(args);
