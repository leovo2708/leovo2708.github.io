import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssReferenceComponent } from './css-reference';
import { ToolsComponent } from './tools';

const routes: Routes = [
    { path: '', redirectTo: '/css-reference', pathMatch: 'full' },
    { path: 'css-reference', component: CssReferenceComponent },
    { path: 'tools', component: ToolsComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
