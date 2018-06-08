import { Component, OnInit } from "@angular/core";
import { AccountService } from "./account.service";
import { Router } from "@angular/router";
import { BalanceAccount } from "../shared";

@Component({
  selector: "app-accounts",
  templateUrl: "./accounts.component.html",
  styleUrls: ["./accounts.component.css"]
})
export class AccountsComponent implements OnInit {
  accounts: BalanceAccount[];

  start: number = 0;
  paging: number = 5;

  constructor(private router: Router, private as: AccountService) {}

  ngOnInit() {
    // Convert Sharepoint Result to BalanceAccount
    this.as.getShpAccounts().then(
      data => (this.accounts = data.value.map(r => new BalanceAccount(r)))
      //data => (this.accounts = data.value)
    );
  }

  showAccount(id: number) {
    this.router.navigate(["/accounts/" + id]);
  }
}
