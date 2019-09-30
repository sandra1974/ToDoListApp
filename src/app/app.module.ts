import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { ListTaskComponent } from './list-task/list-task.component';
import { NgxPaginationModule } from 'ngx-pagination';  
import {FilterPipe} from './list-task/list-task.component';
import { MatTableModule } from '@angular/material/table';
import { Sort, MatSortModule } from '@angular/material/sort';
import { Ng2OrderModule } from 'ng2-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateTaskComponent,
    EditTaskComponent,
    ListTaskComponent,
	FilterPipe
  ],
  imports: [
    BrowserModule,
	BrowserAnimationsModule,
    AppRoutingModule,
	HttpClientModule,
    FormsModule,
	NgxPaginationModule,
	 MatTableModule,
    MatSortModule,
   Ng2OrderModule 
	
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
