import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('works');
  }

}
