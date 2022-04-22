import { Component, Injectable } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Injectable({ providedIn: 'root' })

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages = [];

  constructor(private wikipedia: WikipediaService){ }

  onTerms(terms: string){
    // const result = this.wikipedia.search(terms);
    // console.log(result);
    // console.log("my card color is " + this.card.color);

    this.wikipedia.search(terms).subscribe((response: any) => {
      this.pages = response.query.search;
      console.log(response);
    });
  }
}
