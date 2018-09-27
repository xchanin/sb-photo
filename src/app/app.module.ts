import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeGridComponent } from './components/grids/welcome-grid/welcome-grid.component';
import { HeaderComponent } from './components/header-footer/header/header.component';
import { MondrianGridComponent } from './components/grids/mondrian-grid/mondrian-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeGridComponent,
    HeaderComponent,
    MondrianGridComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
