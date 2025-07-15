import { Control, FieldPath, FieldValues } from 'react-hook-form'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Checkbox } from '../ui/checkbox'
import { Textarea } from '../ui/textarea'

interface BaseFormFieldProps<T extends FieldValues> {
  control: Control<T>
  name: FieldPath<T>
  label?: string
  description?: string
  placeholder?: string
  className?: string
  required?: boolean
  disabled?: boolean
}

interface TextFieldProps<T extends FieldValues> extends BaseFormFieldProps<T> {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'
}

interface TextareaFieldProps<T extends FieldValues> extends BaseFormFieldProps<T> {
  rows?: number
}

interface SelectFieldProps<T extends FieldValues> extends BaseFormFieldProps<T> {
  options: Array<{ value: string; label: string }>
  placeholder?: string
}

interface CheckboxFieldProps<T extends FieldValues> extends BaseFormFieldProps<T> {
  checkboxLabel?: string
}


export function FormItemInput<T extends FieldValues>({
  control,
  name,
  label,
  description,
  placeholder,
  className,
  required,
  disabled,
  type = 'text',
  ...props
}: TextFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          {label && (
            <FormLabel className={cn(required && "after:content-['*'] after:ml-0.5 after:text-red-500")}>
              {label}
            </FormLabel>
          )}
          <FormControl>
            <Input
              type={type}
              placeholder={placeholder}
              disabled={disabled}
              {...field}
              value={field.value || ''}
            />
          </FormControl>
          {description && (
            <FormDescription>{description}</FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}


// Componente para Textarea
export function TextareaFormField<T extends FieldValues>({
  control,
  name,
  label,
  description,
  placeholder,
  className,
  required,
  disabled,
  rows = 4,
}: TextareaFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          {label && (
            <FormLabel className={cn(required && "after:content-['*'] after:ml-0.5 after:text-red-500")}>
              {label}
            </FormLabel>
          )}
          <FormControl>
            <Textarea
              placeholder={placeholder}
              disabled={disabled}
              rows={rows}
              {...field}
              value={field.value || ''}
            />
          </FormControl>
          {description && (
            <FormDescription>{description}</FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

// Componente para Select
export function SelectFormField<T extends FieldValues>({
  control,
  name,
  label,
  description,
  placeholder = "Selecciona una opción",
  className,
  required,
  disabled,
  options,
}: SelectFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          {label && (
            <FormLabel className={cn(required && "after:content-['*'] after:ml-0.5 after:text-red-500")}>
              {label}
            </FormLabel>
          )}
          <Select
            onValueChange={field.onChange}
            defaultValue={field.value}
            disabled={disabled}
          >
            <FormControl>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {description && (
            <FormDescription>{description}</FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

// Componente para Checkbox
export function CheckboxFormField<T extends FieldValues>({
  control,
  name,
  label,
  description,
  className,
  disabled,
  checkboxLabel,
}: CheckboxFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("flex flex-row items-start space-x-3 space-y-0", className)}>
          <FormControl>
            <Checkbox
              checked={field.value}
              onCheckedChange={field.onChange}
              disabled={disabled}
            />
          </FormControl>
          <div className="space-y-1 leading-none">
            {(label || checkboxLabel) && (
              <FormLabel>{label || checkboxLabel}</FormLabel>
            )}
            {description && (
              <FormDescription>{description}</FormDescription>
            )}
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}