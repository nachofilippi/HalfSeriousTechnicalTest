import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

//Services
import { PeopleService } from '../../providers/services/people.service';

// Interfaces
import { PeopleElement } from '../../interfaces/people.interface';

@Component({
  selector: 'page-people',
  templateUrl: 'people.html',
  styleUrls: ['./people.scss'],
})
export class PeoplePage implements AfterViewInit {
  peopleElements!: PeopleElement[];
  pageIndex = 1;
  characterKey = 3;
  hasPrev = null;
  hasNext = 'true';
  isLoadingResults = true;
  columns = [
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: PeopleElement) => `${element.name}`
    },
    {
      columnDef: 'mass',
      header: 'Weight (kg)',
      cell: (element: PeopleElement) => `${element.mass}`
    },
    {
      columnDef: 'height',
      header: 'Height (cm)',
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

  constructor(
    public peopleService: PeopleService,
    public router: Router,
  ) { }

  ngAfterViewInit() {
    this.getPeople(this.pageIndex);
  }

  getPeople(pageIndex: number) {
    this.peopleService.getAllPeople(pageIndex)
        .subscribe((data) => {
      console.log(data);
      this.peopleElements = data.results;
      this.hasPrev = data.previous;
      this.hasNext = data.next;
      this.isLoadingResults = false;
    });
  }

  nextPage() {
    this.isLoadingResults = true;
    this.pageIndex++;
    this.getPeople(this.pageIndex);
  }

  previousPage() {
    this.isLoadingResults = true;
    this.pageIndex--;
    this.getPeople(this.pageIndex);
  }

  openPeople(selection: any) {
    const characterId = selection.url.split('/')[5];
    this.router.navigate(['/character', characterId]);
  }
}
