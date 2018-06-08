export class VoucherDetail {
  ID: number;
  VoucherID: number;
  AccountID: number;
  Account: BalanceAccount;
  Text: string;
  Amount: number;
  Comment: string;
}

export class BalanceAccount {
  ID: number;
  Name: string;
  Expense: boolean;
  VoucherDetails: VoucherDetail[];

  constructor(item: any) {
    this.ID = item.ID;
    this.Name = item.Name;
    this.Expense = item.Expense;
    this.VoucherDetails = null;
  }
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
