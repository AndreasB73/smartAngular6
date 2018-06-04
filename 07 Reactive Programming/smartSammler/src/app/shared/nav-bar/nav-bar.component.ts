import { Component, OnInit } from "@angular/core";
import { environment } from "../../../environments/environment";
import { MarkerService } from "../../markers/marker.service";
import { ConnectionService } from "../connection/connection.service";
import { OFFLINE, ONLINE } from "../consts";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"]
})
export class NavBarComponent implements OnInit {
  constructor(private ms: MarkerService, private cs: ConnectionService) {}

  appName = environment.appName;
  links = [{ Title: "Marker List", Link: "markers" }];
  onlineState: string;

  ngOnInit() {
    this.cs.isOnline.subscribe(online => {
      this.onlineState = online ? ONLINE : OFFLINE;
    });
  }

  getStateCol(): string {
    return "warning";
  }
}
