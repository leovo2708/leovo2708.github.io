import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CssReferenceRoutingModule } from './css-reference-routing.module';
import { CssReferenceComponent } from './css-reference.component';
import { TemplateComponent } from './template.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CssReferenceRoutingModule
    ],
    declarations: [
        CssReferenceComponent,
        TemplateComponent
    ]
})
export class CssReferenceModule { }
