import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CssReferenceModule } from './css-reference';
import { ToolsModule } from './tools';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CssReferenceModule,
    ToolsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
