import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { HeroPageComponent } from './heroes/pages/hero-page/hero-page.component';
import { LayoutPageComponent } from './heroes/pages/layout-page/layout-page.component';
import { ListPageComponent } from './heroes/pages/list-page/list-page.component';
import { NewPageComponent } from './heroes/pages/new-page/new-page.component';
import { SearchPageComponent } from './heroes/pages/search-page/search-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
