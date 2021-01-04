import React from 'react';
import { Button } from '@material-ui/core';

export interface ButtonLoginProps {
    variant: string
    color: string
    label: string
}

export const ButtonLogin = ({variant, color, label}: ButtonLoginProps) => {
    return <Button variant={variant} color={color}>{label}</Button>
}