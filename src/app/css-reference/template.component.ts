import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-template',
    templateUrl: './template.component.html',
    styleUrls: ['./template.component.scss']
})
export class TemplateComponent {
    src: SafeUrl;

    constructor(
        private router: Router,
        private domSanitizer: DomSanitizer
    ) {
        const url = router.url;
        const paths = url.split('/');
        const currentPath = paths[paths.length - 1];
        const src = '/assets/css-reference-templates/' + currentPath + '.html';
        this.src = domSanitizer.bypassSecurityTrustResourceUrl(src);
    }
}
