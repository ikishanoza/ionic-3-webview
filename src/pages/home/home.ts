import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  url: any;
  constructor(private sanitize: DomSanitizer) {}
  urlpaste(){
    this.url = "https://hackerrankgeek.wordpress.com/";
    return this.sanitize.bypassSecurityTrustResourceUrl(this.url);
  }
}
