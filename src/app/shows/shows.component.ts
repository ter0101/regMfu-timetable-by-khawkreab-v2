import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-shows",
  templateUrl: "./shows.component.html",
  styleUrls: ["./shows.component.css"]
})
export class ShowsComponent implements OnInit {
  private result: Array<any>;
  constructor(private dataService: DataService, private router: Router) {
    this.onload();
  }
  onload() {
    this.dataService.getTeacher().subscribe(
      res => {
        this.result = res;
      },
      err => {
        this.router.navigate(["error"]);
      }
    );
  }
  ngOnInit() {}
}
