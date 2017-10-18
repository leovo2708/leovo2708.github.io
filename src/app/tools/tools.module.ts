import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToolsRoutingModule } from './tools-routing.module';
import { StringEncoderComponent } from './string-encoder.component';
import { ToolsComponent } from './tools.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ToolsRoutingModule
    ],
    declarations: [
        ToolsComponent,
        StringEncoderComponent
    ]
})
export class ToolsModule { }
