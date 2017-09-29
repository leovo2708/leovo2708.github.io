import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssReferenceComponent } from './css-reference.component';

const routes: Routes = [
    { path: 'css-reference', component: CssReferenceComponent }
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
