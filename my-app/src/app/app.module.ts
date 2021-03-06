import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WarningComponent } from './warning/warning.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { UsertestComponent } from './usertest/usertest.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningComponent,
    InstructionsComponent,
    UsertestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
