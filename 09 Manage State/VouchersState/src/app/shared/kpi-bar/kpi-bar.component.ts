import { Component, OnInit } from "@angular/core";
import { Voucher } from "..";
import { DataStoreService } from "../data-store/data-store-service";
import { List } from "linqts";

@Component({
  selector: "app-kpi-bar",
  templateUrl: "./kpi-bar.component.html",
  styleUrls: ["./kpi-bar.component.scss"]
})
export class KpiBarComponent implements OnInit {
  log: boolean = false;
  vouchers: Voucher[];
  expenses: number = 0;
  income: number = 0;

  constructor(private dataStore: DataStoreService) {}

  ngOnInit() {
    this.dataStore.Vouchers.subscribe((vouchers: Voucher[]) => {
      const vl = new List<Voucher>(vouchers);
      this.expenses = vl.Where(v => v.Expense).Sum(v => v.Amount);
      this.income = vl.Where(v => !v.Expense).Sum(v => v.Amount);
    });
  }
}
