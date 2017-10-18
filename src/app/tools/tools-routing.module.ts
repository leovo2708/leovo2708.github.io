import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolsComponent } from './tools.component';
import { StringEncoderComponent } from './string-encoder.component';

const routes: Routes = [
    {
        path: 'tools',
        component: ToolsComponent,
        children: [
            { path: '', redirectTo: 'string-encoder', pathMatch: 'full' },
            { path: 'string-encoder', component: StringEncoderComponent }
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
