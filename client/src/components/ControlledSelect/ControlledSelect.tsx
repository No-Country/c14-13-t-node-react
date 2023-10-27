'use client';
import { Controller, type Control, type FieldValues, type Path } from 'react-hook-form';
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '@/components/ui'; // Import the Select components from Shadcn

interface ControlledSelectProps<T extends FieldValues = FieldValues> {
  control: Control<T>;
  name: Path<T>;
  options: string[];
}

export function ControlledSelect<T extends FieldValues>({
  control,
  name,
  options,
  ...props
}: ControlledSelectProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Select onValueChange={field.onChange} value={field.value} {...props}>
          <SelectTrigger>
            <SelectValue placeholder='Seleccione numero de puertas' />
          </SelectTrigger>
          <SelectContent>
            {options.map((option, i) => (
              <SelectItem key={i} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    />
  );
}
