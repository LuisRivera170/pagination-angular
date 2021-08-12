import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { PaginationInfoComponent } from './components/pagination-info/pagination-info.component';
import { PaginationOrderComponent } from './components/pagination-order/pagination-order.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HomeContentComponent,
    PaginationComponent,
    UsersTableComponent,
    PaginationInfoComponent,
    PaginationOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
