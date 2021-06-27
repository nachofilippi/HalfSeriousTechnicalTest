import { Component, AfterViewInit, ViewChild } from '@angular/core';

//Services
import { PeopleService } from '../../providers/services/people.service';

export interface PeopleElement {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: Array<string>;
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: Array<string>;
  starships: Array<string>;
  url: string;
  vehicles: Array<string>;
}

@Component({
  selector: 'page-people',
  templateUrl: 'people.html',
  styleUrls: ['./people.scss'],
})
export class PeoplePage implements AfterViewInit {
  peopleElements!: PeopleElement[];
  pageIndex = 0;
  isLoadingResults = true;
  columns = [
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: PeopleElement) => `${element.name}`
    },
    {
      columnDef: 'mass',
      header: 'Weight',
      cell: (element: PeopleElement) => `${element.mass}`
    },
    {
      columnDef: 'height',
      header: 'Height',
      cell: (element: PeopleElement) => `${element.height}`
    },
    {
      columnDef: 'hair_color',
      header: 'Hair color',
      cell: (element: PeopleElement) => `${element.hair_color}`
    },
    {
      columnDef: 'eye_color',
      header: 'Eye color',
      cell: (element: PeopleElement) => `${element.eye_color}`
    },
    {
      columnDef: 'birth_year',
      header: 'Birth year',
      cell: (element: PeopleElement) => `${element.birth_year}`
    }

  ];
  displayedColumns = this.columns.map(c => c.columnDef);

  constructor(public peopleService: PeopleService) {
  }

  ngAfterViewInit() {
    this.getPeople();
  }

  getPeople() {
    this.peopleService.getAllPeople(this.pageIndex + 1)
        .subscribe((peopleContent) => {
      this.peopleElements = peopleContent.results;
      this.isLoadingResults = false;
    });
  }

  nextPage() {
    console.log('next');
  }

  previousPage() {
    console.log('prev');
  }
}
