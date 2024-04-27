import type { ValidationRule, FieldError } from 'react-hook-form';

export const generateRequiredRule = (fieldName: string): { required: string } => ({
  required: `(${fieldName}) field is required`,
});

export const generateMinLengthRule = (fieldName: string, minLength: number): {
  minLength: ValidationRule<number>,
} => ({
  minLength: {
    value: minLength,
    message: `(${fieldName}) must be at least ${minLength} characters long`,
  },
});

export const generateMaxLengthRule = (fieldName: string, maxLength: number): {
  maxLength: ValidationRule<number>,
} => ({
  maxLength: {
    value: maxLength,
    message: `(${fieldName}) must be at most ${maxLength} characters long`,
  },
});

export const generateEmailRule = (): {
  pattern: ValidationRule<RegExp>,
} => ({
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: 'Invalid email address',
  },
});

export const generateTextfieldErrorProps = (errorField: FieldError | undefined): {
  error: boolean,
  helperText: React.ReactNode,
} => ({
  error: !!errorField,
  helperText: errorField ? errorField.message : undefined,
});
