import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CalixInputModule } from 'calix-ui';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CalixInputModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
