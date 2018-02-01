import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AdminService} from "../../admin.service";
import {NewsVO} from "../../../domain/news.vo";
import {MatDialog} from "@angular/material";
import {ViewDialogComponent} from "./view.dialog.component";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  news: NewsVO;

  constructor(private route: ActivatedRoute, private adminService: AdminService, private dialog: MatDialog) {
    console.log('constructor');
  }

  ngOnInit() {
    this.route.params.subscribe(param => {
      console.log(param);
      this.adminService.findOneNews(+param['news_id'])
        .subscribe((body: NewsVO) => this.news = body);
    });
  }

  confirmRemove() {
    const dialogRef = this.dialog.open(ViewDialogComponent,
      {data: {content: '삭제하시겠습니까?'}}
      );
    dialogRef.afterClosed()
      .subscribe(data => {
        console.log(data);
      });
  }

}
