import {
  Component,
  OnInit
} from '@angular/core';
import {
  PeopleService
} from '../../providers/services/people.service';

export interface DialogData {
  sport: string;
}

@Component({
  selector: 'page-people',
  templateUrl: 'people.html',
  styleUrls: ['./people.scss'],
})
export class PeoplePage implements OnInit {

  constructor(
    public peopleService: PeopleService,
  ) {
  }

  ngOnInit(): void {
    console.log('works');
    this.getUsername();
  }

  getUsername() {
    // let userDat = JSON.parse(localStorage.getItem('user'));
    this.peopleService.getAllPeople().subscribe(
      (peopleContent) => {
        console.log(peopleContent);
      });
  }
}
