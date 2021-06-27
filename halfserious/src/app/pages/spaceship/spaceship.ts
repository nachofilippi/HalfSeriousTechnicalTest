import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

//Services
import { SpaceshipService } from '../../providers/services/spaceship.service';

// Interfaces
import { StarshipElement } from '../../interfaces/spaceships.interface';

@Component({
  selector: 'page-spaceship',
  templateUrl: 'spaceship.html',
  styleUrls: ['./spaceship.scss'],
})
export class SpaceshipPage implements AfterViewInit {
  spaceshipElements!: StarshipElement[];
  pageIndex = 1;
  characterKey = 3;
  hasPrev = null;
  hasNext = 'true';
  isLoadingResults = true;
  columns = [
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: StarshipElement) => `${element.name}`
    },
    {
      columnDef: 'manufacturer',
      header: 'Manufacturer',
      cell: (element: StarshipElement) => `${element.manufacturer}`
    },
    {
      columnDef: 'cost_in_credits',
      header: 'Cost in credits',
      cell: (element: StarshipElement) => `${element.cost_in_credits}`
    },
    {
      columnDef: 'max_atmosphering_speed',
      header: 'Max atmosphering speed',
      cell: (element: StarshipElement) => `${element.max_atmosphering_speed}`
    },
    {
      columnDef: 'crew',
      header: 'Crew',
      cell: (element: StarshipElement) => `${element.crew}`
    },
    {
      columnDef: 'passengers',
      header: 'Passengers',
      cell: (element: StarshipElement) => `${element.passengers}`
    },
    {
      columnDef: 'cargo_capacity',
      header: 'Cargo capacity',
      cell: (element: StarshipElement) => `${element.cargo_capacity}`
    },
    {
      columnDef: 'consumables',
      header: 'Consumables',
      cell: (element: StarshipElement) => `${element.consumables}`
    }

  ];
  displayedColumns = this.columns.map(c => c.columnDef);

  constructor(
    public spaceshipService: SpaceshipService,
    public router: Router,
  ) { }

  ngAfterViewInit() {
    this.getPeople(this.pageIndex);
  }

  getPeople(pageIndex: number) {
    this.spaceshipService.getAllSpaceships(pageIndex)
        .subscribe((data) => {
      console.log(data);
      this.spaceshipElements = data.results;
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

  openStarship(selection: any) {
    const spaceshipId = selection.url.split('/')[5];
    this.router.navigate(['/vehicle', spaceshipId]);
  }
}
