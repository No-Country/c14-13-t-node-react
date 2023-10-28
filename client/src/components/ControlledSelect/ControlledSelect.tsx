import { Controller, type FieldValues } from 'react-hook-form';
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
  Label,
} from '@/components/ui'; // Import the Select components from Shadcn
import { ControlledSelectProps } from '@/types/formTypes';

export function ControlledSelect<T extends FieldValues>({
  control,
  id,
  options,
  label,
  errors,
  placeholder = 'Seleccione una opción',
  ...props
}: ControlledSelectProps<T>) {
  const isError = !!errors?.[id];
  const errorMessage = String(errors?.[id]?.message);
  return (
    <Controller
      control={control}
      name={id}
      render={({ field }) => (
        <div className='my-2'>
          <Label id={String(id)} label={label} />
          <Select
            onValueChange={field.onChange}
            value={field.value}
            {...props}
            aria-invalid={isError}
            aria-describedby={isError ? `${String(id)}-error` : undefined}
          >
            <SelectTrigger>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options.map((option, i) => (
                <SelectItem key={i} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {isError && (
            <span id={`${String(id)}-error`} className='font-bold text-red-600'>
              {errorMessage}
            </span>
          )}
        </div>
      )}
    />
  );
}
