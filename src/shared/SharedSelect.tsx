import React from 'react';
import { Select, MenuItem, FormControl, InputLabel, FormHelperText, type SelectProps } from '@mui/material';
import {Controller, type FieldValues,} from 'react-hook-form';

interface Option {
    value: string | number;
    label: React.ReactNode;
}

interface SharedSelectProps<TFieldValues extends FieldValues = FieldValues> extends Omit<SelectProps, 'name' | 'defaultValue' | 'value' | 'onChange'> {
    name: keyof TFieldValues & string;
    control: any;
    label: React.ReactNode;
    rules?: any;
    options: Option[];
}

const SharedSelect = <TFieldValues extends FieldValues = FieldValues>({ name, control, label, rules, options, ...props }: SharedSelectProps<TFieldValues>) => (
    <FormControl fullWidth margin="normal" variant="outlined">
        <InputLabel>{label}</InputLabel>
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field, fieldState: { error } }) => (
                <>
                    <Select
                        label={label}
                        value={field.value ?? ''}
                        onChange={(e) => field.onChange(e.target.value)}
                        onBlur={field.onBlur}
                        inputRef={field.ref}
                        name={field.name}
                        displayEmpty
                        {...props}
                    >
                        {options.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </Select>
                    <FormHelperText error={!!error}>
                        {error ? error.message : null}
                    </FormHelperText>
                </>
            )}
        />
    </FormControl>
);

export default SharedSelect;
