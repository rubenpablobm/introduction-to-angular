import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-list',                 // tag name
  templateUrl: './housing-list.component.html', // template location
  styleUrls: ['./housing-list.component.css']   // styles location
})
export class HousingListComponent implements OnInit {

  @Input() locationList: HousingLocation[] = [];  // array with example data
  results : HousingLocation[] = [];               // array with filtered data
  @Output() selectedLocationEvent = new EventEmitter<HousingLocation>();
  
  constructor() { }

  ngOnInit(): void {
  }

  searchHousingLocations(searchText: string) {
    // guard checks if input is empty
    if (!searchText) return;

    this.results = this.locationList
      .filter(
        location => location.city.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
        // filters locationList elements based on the city
      )
  }

  selectHousingLocation(location: HousingLocation) {
    this.selectedLocationEvent.emit(location);
  }

}
