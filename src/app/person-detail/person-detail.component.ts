import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Person } from '../person.model';
import { PersonListComponent } from '../person-list/person-list.component';


@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  id: number;
  personDetail: Person;

  constructor(private route: ActivatedRoute, private personListComponent: PersonListComponent) { 
    this.id = this.route.snapshot.params['id'];
    this.personDetail = personListComponent.persons.find(x => x.id == this.id);
  }


  ngOnInit(): void {
  }

}
