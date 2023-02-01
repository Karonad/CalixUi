import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CalixInputModule, CalixUiModule  } from 'calix-ui';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CalixUiModule,
    CalixInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
