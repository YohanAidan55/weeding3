import React from 'react';
import { TextField, type TextFieldProps } from '@mui/material';
import { Controller, type Control, type FieldValues } from 'react-hook-form';

interface SharedTextFieldProps<TFieldValues extends FieldValues = FieldValues> extends Omit<TextFieldProps, 'name' | 'defaultValue'> {
    name: any;
    control: Control<TFieldValues>;
    label: React.ReactNode;
    rules?: any;
}

const SharedTextField = <TFieldValues extends FieldValues = FieldValues>({ name, control, label, rules, placeholder, ...props }: SharedTextFieldProps<TFieldValues>) => (
    <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState: { error } }) => (
            <TextField
                {...field}
                label={label}
                placeholder={placeholder}
                fullWidth
                margin="normal"
                variant="outlined"
                error={!!error}
                helperText={error ? error.message : null}
                {...props}
            />
        )}
    />
);

export default SharedTextField;
