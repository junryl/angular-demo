import { Component, OnInit } from '@angular/core';
import { Person } from '../person.model';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  public persons: Person[] = [
    new Person(1, 'Optimus Prime','Commander','Optimus Prime is the strongest and most courageous of all Autobots, he is also their leader','https://as2.ftcdn.net/jpg/02/98/65/09/500_F_298650938_9AY29m0CVYa3z3Fz0G2NY0ijRwGZXJcX.jpg'),
    new Person(2,'Megatron', 'Villain', 'Megatron combines brute strength, military cunning, ruthlessness and terror.','https://as2.ftcdn.net/jpg/02/98/65/61/500_F_298656189_tygCxUuUffqaSaM7H1pga2zxTau3ctSL.jpg'),
    new Person(3,'Bumblebee','Side Kick','Bumblebee is one of Optimus Prime\'s most trusted lieutenants','https://as2.ftcdn.net/jpg/03/30/38/95/500_F_330389566_T69bsEL5rdBVy59IKCtTNswIpYS8i8P1.jpg')
  ];

  constructor() {}

  ngOnInit(): void {
  }

}
