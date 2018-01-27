import { Component, OnInit } from '@angular/core';
import {NewsVO} from '../../../domain/news.vo';
import {AdminService} from '../../admin.service';
import {ResultVO} from '../../../domain/result.vo';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.scss']
})
export class WriteComponent implements OnInit {
  news = new NewsVO();

  constructor(private adminService: AdminService, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {
  }

  addNews() {
    this.adminService.addNews(this.news)
      .subscribe((body: ResultVO) => {
        console.log(body);
        if (body.result === 0) {
          this.snackBar.open('글쓰기 성공', null, {duration: 2000});
          this.router.navigateByUrl('/admin/news');
        } else {
          this.snackBar.open(body.value, null, {duration: 2000});
        }
      });
  }
}
