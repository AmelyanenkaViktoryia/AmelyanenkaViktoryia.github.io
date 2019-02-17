import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPartComponent } from './login-part/login-part.component';
import { SourceSectionComponent } from './source-section/source-section.component';
import { NewsSectionComponent } from './news-section/news-section.component';
import { SourceNameComponent } from './source-name/source-name.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPartComponent,
    SourceSectionComponent,
    NewsSectionComponent,
    SourceNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
