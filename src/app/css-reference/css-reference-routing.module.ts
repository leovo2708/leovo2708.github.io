import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssReferenceComponent } from './css-reference.component';
import { TemplateComponent } from './template.component';

const routes: Routes = [
    {
        path: 'css-reference',
        component: CssReferenceComponent,
        children: [
            { path: 'box-sizing', component: TemplateComponent },
            { path: 'content', component: TemplateComponent },
            { path: 'display', component: TemplateComponent },
            { path: 'float', component: TemplateComponent },
            { path: 'line-height', component: TemplateComponent },
            { path: 'outline', component: TemplateComponent },
            { path: 'position', component: TemplateComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class CssReferenceRoutingModule { }
