import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { Routes, RouterModule, RouterOutlet} from "@angular/router";
import { Assistant } from './assistant/assistant';

const routes : Routes = [
  {path: '', redirectTo: '/assistant', pathMatch: 'full'},
  {path: 'assistant', component: Assistant},
];

@NgModule({
  declarations: [
    AppComponent,
    Assistant,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: Assistant},//HERE
    ], {scrollPositionRestoration: 'enabled'}),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
