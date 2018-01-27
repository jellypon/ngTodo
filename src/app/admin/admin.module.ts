import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import {AdminRoutingModule} from './admin-routing.module';
import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule,
  MatPaginatorModule,
  MatToolbarModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {AdminService} from './admin.service';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatPaginatorModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatButtonModule,
  ],
  declarations: [AdminComponent, HomeComponent, NewsComponent],
  providers: [AdminService]
})
export class AdminModule { }
