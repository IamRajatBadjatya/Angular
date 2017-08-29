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
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';

import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './user/user.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    BetterDirectiveDirective,
    StructuralDirectiveDirective,
    ShortenPipe,
    HomeComponent,
    UserListComponent,
    UserComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
