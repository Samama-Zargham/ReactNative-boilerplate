/* eslint-disable prettier/prettier */
import * as yup from 'yup';

export const OnlyEmail = yup.object().shape({
    email: yup
        .string()
        .trim()
        .email('Please enter a valid Email')
        .required('This field is required.'),
});

export const SignInValidationSchema = yup.object().shape({
    email: yup
        .string()
        .trim()
        .email('email-not-valid')
        .required('email-required'),
    password: yup
        .string()
        .matches(/\w*[a-z]\w*/, "Password must have a small letter")
        .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
        .matches(/\d/, "Password must have a number")
        .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
        .min(6, ({ min }) => `Password must be at least ${min} characters`)
        .required('This field is required.'),
});
export const SignUpValidationSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .min(3, ({ min }) => 'name-min')
        .max(18, ({ max }) => 'name-max')
        .required('name-required'),
    email: yup
        .string()
        .trim()
        .email('email-not-valid')
        .required('email-required'),
    password: yup
        .string()
        .matches(/\w*[a-z]\w*/, "Password must have a small letter")
        .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
        .matches(/\d/, "Password must have a number")
        .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
        .min(6, ({ min }) => `Password must be at least ${min} characters`)
        .required('This field is required.'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'password-not-match')
        .required('confirm-password-required'),
});
export const ChangePasswordValidationSchema = yup.object().shape({
    newPassword: yup
        .string()
        .matches(/\w*[a-z]\w*/, "Password must have a small letter")
        .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
        .matches(/\d/, "Password must have a number")
        .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
        .min(6, ({ min }) => `Password must be at least ${min} characters`)
        .required('This field is required.'),
    confirmNewPassword: yup
        .string()
        .oneOf([yup.ref('newPassword')], `Password doesn't match`)
        .required('This field is required'),
});
export const OnlyNumber = yup.object().shape({
    number: yup
        .string()
        .trim()
        .min(11, ({ min }) => 'number-min')
        .max(18, ({ max }) => 'number-max')
        .required('number-required'),
});