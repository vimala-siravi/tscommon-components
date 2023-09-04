import React from 'react';

declare const Button: (props: any) => React.JSX.Element;

declare function FormControl(props: any): React.JSX.Element;

declare function InputLabel(props: any): React.JSX.Element;

declare function MenuItem(props: any): React.JSX.Element;

declare function Select(props: any): React.JSX.Element;

declare function convertToLowerCase(sentence: String): string;

declare const themes: {
    light: string;
    dark: string;
    blue: string;
};

export { Button, FormControl, InputLabel, MenuItem, Select, convertToLowerCase, themes };
