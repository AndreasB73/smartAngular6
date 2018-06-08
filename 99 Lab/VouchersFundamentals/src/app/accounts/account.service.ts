import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BalanceAccount } from "../shared";
import { Observable } from "rxjs";
import { headersToString } from "selenium-webdriver/http";

@Injectable({
  providedIn: "root"
})
export class AccountService {
  constructor(private http: HttpClient) {}

  url =
    "http://localhost:8080/_api/web/lists/getByTitle%28%27BalanceAccounts%27%29/Items";
  accounts = null;

  getShpAccounts(): Promise<any> {
    let headers = new HttpHeaders();
    headers = headers.append("Accept", "application/json;odata=verbose");

    return this.http
      .get<any[]>(this.url, {
        headers: headers
      })
      .toPromise();
  }

  getAccounts(): Promise<BalanceAccount[]> {
    return this.http.get<BalanceAccount[]>("/assets/accounts.json").toPromise();
  }

  getAccount(id: number): Promise<BalanceAccount> {
    return new Promise<BalanceAccount>((resolve, reject) => {
      this.http
        .get("/assets/accounts.json")
        .toPromise()
        .then((data: BalanceAccount[]) => {
          var v = data.find(item => item.ID == id);
          resolve(v);
        })
        .catch(err => reject(err));
    });
  }
}
