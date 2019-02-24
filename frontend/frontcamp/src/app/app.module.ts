import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPartComponent } from './login-part/login-part.component';
import { SourceSectionComponent } from './source-section/source-section.component';
import { NewsSectionComponent } from './news-section/news-section.component';
import { SourceNameComponent } from './source-name/source-name.component';
import { RouterModule, Routes } from '@angular/router';
import { AddArticleComponent } from './add-article/add-article.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleService } from './article.service';
import { NewsTitlePipe } from './news-title.pipe';
import { ArticleFilterPipe } from './article-filter.pipe';
import { ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const AppRoutes: Routes = [  
  {path: '', component: MainComponent},
  {path: 'add', component: AddArticleComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPartComponent,
    SourceSectionComponent,
    NewsSectionComponent,
    SourceNameComponent,
    AddArticleComponent,
    MainComponent,
    FooterComponent,
    NewsTitlePipe,
    ArticleFilterPipe
  ],
  imports: [    
    RouterModule.forRoot(AppRoutes),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }  
