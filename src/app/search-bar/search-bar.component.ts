import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() submitted  = new EventEmitter<string>();

  terms = '';

  onFormSubmit(event: any){
    event.preventDefault();
    // console.log(this.terms);
    this.submitted.emit(this.terms);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
