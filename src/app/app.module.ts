import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CssReferenceComponent } from './css-reference';
import { ToolsComponent } from './tools';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    CssReferenceComponent,
    ToolsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
