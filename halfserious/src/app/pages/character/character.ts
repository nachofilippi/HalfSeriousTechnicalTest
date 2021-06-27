import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

//Services
import { PeopleService } from '../../providers/services/people.service';

// Interfaces
import { PeopleElement } from '../../interfaces/people.interface';

@Component({
  selector: 'page-character',
  templateUrl: 'character.html',
  styleUrls: ['./character.scss'],
})
export class CharacterPage implements OnInit {
  characterId = this.route.snapshot.paramMap.get('id')!;
  character!: PeopleElement;
  isLoadingResults = true;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    public peopleService: PeopleService,
  ) { }

  ngOnInit() {
    this.getCharacter();
  }

  getCharacter() {
    this.peopleService.getCharacter(this.characterId)
        .subscribe((data) => {
      this.character = data;
      this.isLoadingResults = false;
    });
  }
}
