import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { SectionComponent } from './section/section.component';
import { helloComponent } from './section/hello.component';
import { RouterModule } from '@angular/router';
import { UserfrmComponent } from './userfrm/userfrm.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    SectionComponent,helloComponent, UserfrmComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot([
      {
      path:'section',
      component:SectionComponent
    },
    {
      path:'To-Do',
      component:TodoComponent
    }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
