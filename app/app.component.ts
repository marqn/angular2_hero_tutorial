import {Component} from '@angular/core';

export class Hero {
    id:number;
    name:string;
}

const HEROES:Hero[] = [
    {id: 1, name: 'marqn'},
    {id: 2, name: 'Narco'},
    {id: 3, name: 'Pokemon'},
    {id: 4, name: 'Lucy'},
    {id: 5, name: 'Henry'},
    {id: 6, name: 'Fester'},
    {id: 7, name: 'July'}
];

@Component({
    selector: 'my-app',
    template: '<h2>My Heroes</h2>' +
    '<ul class="heroes">' +
    '<li *ngFor="let hero of heroes">' +
    '<span class="badge">{{hero.id}}</span> {{hero.name}}' +
    '</li>' +
    '</ul>'
})
export class AppComponent {
    public heroes = HEROES;
    title = 'Tour of Heroes';
    hero:Hero = {
        id: 1,
        name: 'marqn'
    };
}

