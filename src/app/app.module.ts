import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Import RouterModule here

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WorkBoothComponent } from './work-booth/work-booth.component';
import { MenuComponent } from './menu/menu.component';
import { CatsComponent } from './cats/cats.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkBoothComponent,
    MenuComponent,
    CatsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
