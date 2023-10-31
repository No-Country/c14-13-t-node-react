import type {
  Control,
  FieldValues,
  Path,
  FieldErrors,
  UseFormRegister,
} from 'react-hook-form';

export type BaseFormProps<T extends FieldValues> = {
  id: Path<T>;
  label: string;
  errors: FieldErrors<T>;
  fieldType?: 'input' | 'textarea' | 'select';
  placeholder?: string;
};

export interface ControlledSelectProps<T extends FieldValues> extends BaseFormProps<T> {
  control: Control<T>;
  options: string[];
}

export interface FormFieldProps<T extends FieldValues> extends BaseFormProps<T> {
  type?: 'text' | 'password' | 'number';
  register: UseFormRegister<T>;
  handleInputChange: (field: keyof T) => void;
}

export type TextFieldItem<T extends FieldValues> = Omit<
  FormFieldProps<T>,
  'register' | 'handleInputChange' | 'errors'
>;

export type SelectFieldItem<T extends FieldValues> = Omit<
  ControlledSelectProps<T>,
  'control' | 'errors'
>;

/**
 * Incluye tanto los input de texto como los Select
 */
export type FormItems<T extends FieldValues> = Array<
  | (TextFieldItem<T> & { fieldType?: Exclude<'input' | 'textarea' | 'select', 'select'> })
  | (SelectFieldItem<T> & { fieldType: 'select' })
>;
