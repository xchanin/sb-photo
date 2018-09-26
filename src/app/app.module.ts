import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeGridComponent } from './components/grids/welcome-grid/welcome-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeGridComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
