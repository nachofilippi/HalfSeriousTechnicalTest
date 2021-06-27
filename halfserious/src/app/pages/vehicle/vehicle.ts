import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

//Services
import { SpaceshipService } from '../../providers/services/spaceship.service';
import { PeopleService } from '../../providers/services/people.service';

// Interfaces
import { StarshipElement } from '../../interfaces/spaceships.interface';

@Component({
  selector: 'page-vehicle',
  templateUrl: 'vehicle.html',
  styleUrls: ['./vehicle.scss'],
})
export class VehiclePage implements OnInit {
  vehicleId = this.route.snapshot.paramMap.get('id')!;
  vehicle!: StarshipElement;
  pilots: Array<string> = [];
  isLoadingResults = true;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    public spaceshipService: SpaceshipService,
    public peopleService: PeopleService,
  ) { }

  ngOnInit() {
    this.getCharacter();
  }

  getCharacter() {
    this.spaceshipService.getSpaceship(this.vehicleId)
        .subscribe((spaceships) => {
      this.vehicle = spaceships;
      if (this.vehicle.pilots.length != 0) {
        this.vehicle.pilots.forEach((pilot) => {
          const spaceshipId = pilot.split('/')[5];

          this.peopleService.getCharacter(spaceshipId)
              .subscribe((people) => {
            this.pilots.push(people.name);
            this.isLoadingResults = false;
          });
          console.log(this.pilots);
        })
      } else {
        this.isLoadingResults = false;
      }
    });
  }
}
