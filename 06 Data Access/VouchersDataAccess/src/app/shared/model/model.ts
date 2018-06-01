import { BOOL_TYPE } from '@angular/compiler/src/output/output_ast';
import { Guid } from 'guid-typescript';

export class VoucherDetail {
    ID: number;
    VoucherID: number;
    AccountID: number;
    Account: BalanceAccount;
    Text: string;
    Amount: number;
    Comment: string;
    deleted: boolean;
}

export class BalanceAccount {
    ID: number;
    Name: string;
    Expense: boolean;
    VoucherDetails: VoucherDetail[];
}

export class Voucher {
    ID: number;
    Text: string;
    Date: string;
    Amount: number;
    Paid: boolean;
    Expense: boolean;
    Remark?: boolean;
    Readonly?: boolean;
    Details?: VoucherDetail[];
}    
