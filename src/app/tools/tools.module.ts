import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToolsRoutingModule } from './tools-routing.module';
import { StringQuoteEncodeComponent } from './string-quote-encode.component';
import { ToolsComponent } from './tools.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ToolsRoutingModule
    ],
    declarations: [
        ToolsComponent,
        StringQuoteEncodeComponent
    ]
})
export class ToolsModule { }
