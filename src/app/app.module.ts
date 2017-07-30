import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { BetterDirectiveDirective } from './directives/better-directive/better-directive.directive';
import { StructuralDirectiveDirective } from './directives/structural-directive/structural-directive.directive';
import { ShortenPipe } from './pipes/shorten/shorten.pipe';
import { UsersService } from './services/users/users.service';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    BetterDirectiveDirective,
    StructuralDirectiveDirective,
    ShortenPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
