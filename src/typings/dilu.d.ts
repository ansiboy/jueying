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
        private fieldElement;
        private fieldErrorElement;
        /**
         * 验证字段
         */
        check(): boolean;
        /**
         * 异步验证字段
         */
        checkAsync(): Promise<boolean>;
        private checkField;
        private checkFieldAsync;
        private showElement;
        /**
         * 异步验证 HTML 元素
         * @param name HTML 元素名称
         */
        checkElementAsync(name: string): Promise<boolean>;
        /**
         * 异步验证 HTML 元素
         * @param name HTML 元素名称
         */
        checkElement(name: string): boolean;
        static elementValue(element: InputElement): string;
        private elementName;
    }
}
declare namespace dilu {
    type Validate = (value: any) => boolean | Promise<boolean>;
    type RuleDepend = Rule | (() => boolean);
    type Rule = {
        validate: (value: any) => boolean | Promise<boolean>;
        error?: string;
    };
    let rules: {
        /**
         * 验证必填字段
         * @param error 错误提示文字
         */
        required(error?: string): Rule;
        /**
         * 验证两个字段值是否相等
         * @param otherElement 另外一个字段
         * @param error 错误提示文字
         */
        matches: (otherElement: InputElement, error?: string) => Rule;
        /**
         * 验证邮箱
         * @param error 错误提示文字
         */
        email: (error?: string) => Rule;
        /**
         * 验证字段最小长度
         * @param length 最小长度
         * @param error 错误提示文字
         */
        minLength: (length: number, error?: string) => Rule;
        /**
         * 验证字段的最大长度
         * @param length 最大长度
         * @param error 错误提示文字
         */
        maxLength: (length: number, error?: string) => Rule;
        /**
         * 验证字段大于或等于指定的值
         * @param value 指定的值
         * @param error 错误提示文字
         */
        greaterThan: (value: () => number | Date, error: string) => Rule;
        /**
         * 验证字段小于或等于指定的值
         * @param value 指定的值
         * @param error 错误提示文字
         */
        lessThan: (value: () => string | number | Date, error: string) => Rule;
        /**
         * 验证字段等于指定的值
         * @param value 指定的值
         * @param error 错误提示文字
         */
        equal: (value: () => string | number | Date, error?: string) => Rule;
        /**
         * 验证字段为 IP
         * @param error 错误提示文字
         */
        ip: (error: string) => Rule;
        /**
         * 验证字段为 URL
         * @param error 错误提示文字
         */
        url: (error?: string) => Rule;
        /**
         * 验证字段为手机号码
         * @param error 错误提示文字
         */
        mobile: (error?: string) => Rule;
        /**
         * 验证字段为数字
         * @param error 错误提示文字
         */
        numeric: (error?: string) => Rule;
        /**
         * 自定义验证
         * @param validate 自定义验证的方法
         * @param error 错误提示文字
         */
        custom: (validate: (value: any) => boolean | Promise<boolean>, error: string) => Rule;
    };
}
