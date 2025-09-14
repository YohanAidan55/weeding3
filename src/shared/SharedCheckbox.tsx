import React from 'react';
import { Checkbox, FormControlLabel, FormHelperText, type CheckboxProps } from '@mui/material';
import { Controller, type Control, type FieldValues } from 'react-hook-form';

interface SharedCheckboxProps<TFieldValues extends FieldValues = FieldValues> {
    name: any;
    control: Control<TFieldValues>;
    label: React.ReactNode;
    rules?: any;
    onChange?: CheckboxProps['onChange'];
    // Allow passing any other MUI Checkbox props
    disabled?: boolean;
    indeterminate?: boolean;
}

const SharedCheckbox = <TFieldValues extends FieldValues = FieldValues>({ name, control, label, rules, onChange, ...props }: SharedCheckboxProps<TFieldValues>) => (
    <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState: { error } }) => (
            <>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={!!field.value}
                            onChange={(event, checked) => {
                                // Update RHF value with the boolean checked state
                                field.onChange(checked);
                                // Call external onChange if provided (preserve consumer logic)
                                onChange?.(event, checked);
                            }}
                            onBlur={field.onBlur}
                            inputRef={field.ref}
                            name={field.name}
                            {...props}
                        />
                    }
                    label={label}
                />
                <FormHelperText error={!!error}>
                    {error ? error.message : null}
                </FormHelperText>
            </>
        )}
    />
);

export default SharedCheckbox;
