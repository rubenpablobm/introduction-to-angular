import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-housing-list',                 // tag name
  templateUrl: './housing-list.component.html', // template location
  styleUrls: ['./housing-list.component.css']   // styles location
})
export class HousingListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  searchHousingLocations(searchText: string) {
    console.log(searchText);
  }

}
