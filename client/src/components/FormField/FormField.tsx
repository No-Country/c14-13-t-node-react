import type { UseFormRegister, FieldValues, Path, FieldErrors } from 'react-hook-form';
import { Input } from '@/components/ui';

export type FieldList<T extends FieldValues> = Omit<
  FormFieldProps<T>,
  'register' | 'handleInputChange' | 'errors'
>[];

export interface FormFieldProps<T extends FieldValues> {
  label: string;
  id: keyof T;
  type: 'text' | 'password';
  register: UseFormRegister<T>;
  handleInputChange: (field: keyof T) => void;
  errors: FieldErrors<T>;
}
export const FormField = <T extends FieldValues>({
  label,
  id,
  type,
  register,
  handleInputChange,
  errors,
}: FormFieldProps<T>) => {
  const isError = !!errors?.[id];
  const errorMessage = String(errors?.[id]?.message);
  return (
    <div className='my-2'>
      <label className='font-semibold text-slate-900 dark:text-slate-200' htmlFor={String(id)}>
        {label}
      </label>
      <Input
        type={type}
        placeholder={label}
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
