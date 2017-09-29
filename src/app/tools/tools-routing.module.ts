import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolsComponent } from './tools.component';
import { StringQuoteEncodeComponent } from './string-quote-encode.component';

const routes: Routes = [
    {
        path: 'tools',
        component: ToolsComponent,
        children: [
            { path: '', redirectTo: 'string-quote-encode', pathMatch: 'full' },
            { path: 'string-quote-encode', component: StringQuoteEncodeComponent }
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
export class ToolsRoutingModule { }
