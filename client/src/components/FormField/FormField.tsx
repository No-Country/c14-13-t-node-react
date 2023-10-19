import type { UseFormRegister, FieldValues, Path, FieldErrors } from 'react-hook-form';
import { Input, TextArea } from '@/components/ui';

export type FieldList<T extends FieldValues> = Omit<
  FormFieldProps<T>,
  'register' | 'handleInputChange' | 'errors'
>[];

export interface FormFieldProps<T extends FieldValues> {
  label: string;
  id: keyof T;
  type?: 'text' | 'password';
  register: UseFormRegister<T>;
  handleInputChange: (field: keyof T) => void;
  errors: FieldErrors<T>;
  fieldType?: 'input' | 'textarea';
  placeholder?: string;
}
export const FormField = <T extends FieldValues>({
  label,
  id,
  type = 'text',
  fieldType = 'input',
  placeholder,
  register,
  handleInputChange,
  errors,
}: FormFieldProps<T>) => {
  const isError = !!errors?.[id];
  const errorMessage = String(errors?.[id]?.message);
  const FieldComponent = fieldType === 'textarea' ? TextArea : Input;
  return (
    <div className='my-2'>
      <label
        className='text-sm font-medium text-slate-900 dark:text-slate-200'
        htmlFor={String(id)}
      >
        {label}:
      </label>
      <FieldComponent
        type={type}
        placeholder={placeholder ?? label}
        id={String(id)}
        {...register(id as Path<T>)}
        onBlur={() => handleInputChange(id)}
        isError={isError}
        aria-invalid={isError}
        aria-describedby={isError ? `${String(id)}-error` : undefined}
      />
      {isError && (
        <span id={`${String(id)}-error`} className='font-bold text-red-600'>
          {errorMessage}
        </span>
      )}
    </div>
  );
};
