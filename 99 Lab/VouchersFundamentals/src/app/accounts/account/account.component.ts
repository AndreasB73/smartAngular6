import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { BalanceAccount } from "../../shared";
import { AccountService } from "../account.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"]
})
export class AccountComponent implements OnInit {
  account: BalanceAccount;

  constructor(private as: AccountService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.as.getAccount(this.route.snapshot.params["id"]).then(data => {
      this.account = data;
    });
  }

  saveAccount() {
    console.log("Account wird mal gespeichert.");
  }
}
