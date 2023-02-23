import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCompComponent } from './my-comp/my-comp.component';
import { SingleEventComponent } from './my-comp/single-event/single-event.component';
import { AddEventComponent } from './my-comp/add-event/add-event.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCompComponent,
    SingleEventComponent,
    AddEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
