import { Component } from '@angular/core';

@Component({
    selector: 'app-tools',
    templateUrl: './tools.component.html',
    styleUrls: ['./tools.component.scss']
})
export class ToolsComponent {
    text: string;

    escape() {
        this.text = this.text.replace(/"/g, '\\"');
    }

    unescape() {

    }
}
