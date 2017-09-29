import { Component } from '@angular/core';

@Component({
    selector: 'app-string-quote-encode',
    templateUrl: './string-quote-encode.component.html'
})
export class StringQuoteEncodeComponent {
    text: string;

    encode() {
        this.text = this.text.replace(/"/g, '\\"');
    }
}
