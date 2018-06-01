declare namespace dilu {
    let errors: {
        argumentNull(parameterName: any): Error;
        elementValidateRuleNotSet(element: HTMLInputElement): Error;
        fieldElementCanntNull(fieldIndex?: number): Error;
        elementNotExists(name: string): Error;
        fieldResultExpectBooleanType(name: string): Error;
    };
}
declare namespace dilu {
    type InputElement = HTMLElement & {
        name: string;
        value: string;
    } | HTMLAreaElement;
    type ValidateField = {
        name: string;
        rules: Rule[];
        errorElement?: HTMLElement;
        depends?: ((() => Promise<boolean>) | (() => boolean))[];
        condition?: () => boolean;
    };
    class FormValidator {
        static errorClassName: string;
        private form;
        private fields;
        constructor(form: HTMLElement, ...fields: ValidateField[]);
        clearErrors(): void;
        clearElementError(name: string): void;
        private fieldElement(field);
        private fieldErrorElement(field);
        check(): Promise<boolean>;
        private checkField(field);
        checkElement(name: string): Promise<boolean>;
        static elementValue(element: InputElement): string;
        private elementName(element);
    }
}
declare namespace dilu {
    type Validate = (value) => boolean | Promise<boolean>;
    type RuleDepend = Rule | (() => boolean);
    type Rule = {
        validate: (value) => boolean | Promise<boolean>;
        error?: string;
    };
    let rules: {
        required(error?: string): Rule;
        matches: (otherElement: InputElement, error?: string) => Rule;
        email: (error?: string) => Rule;
        minLength: (length: number, error?: string) => Rule;
        maxLength: (length: number, error?: string) => Rule;
        greaterThan: (value: () => number | Date, error: string) => Rule;
        lessThan: (value: () => string | number | Date, error: string) => Rule;
        equal: (value: () => string | number | Date, error?: string) => Rule;
        ip: (error: string) => Rule;
        url: (error?: string) => Rule;
        mobile: (error?: string) => Rule;
        numeric: (error?: string) => Rule;
        custom: (validate: (value: any) => boolean | Promise<boolean>, error: string) => Rule;
    };
}
