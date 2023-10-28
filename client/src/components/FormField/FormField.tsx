import type { FieldValues } from 'react-hook-form';
import { Input, TextArea, Label } from '@/components/ui';
import { FormFieldProps } from '@/types/formTypes';

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
      <Label id={String(id)} label={label} />
      <FieldComponent
        type={type}
        placeholder={placeholder ?? label}
        id={String(id)}
        {...register(id)}
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
