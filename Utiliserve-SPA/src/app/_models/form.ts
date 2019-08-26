import {FormField} from './formfield';

export interface Form {
    id: number;
    formname: string;
    created: Date;
    formfields?: FormField[];
}
