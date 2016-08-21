import {Component} from '@angular/core';
import { Hero } from './hero';
import {HeroDetailComponents} from './hero-datail.component'

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
    styles: [`
      .selected {
        background-color: #CFD8DC !important;
        color: white;
      }
      .heroes {
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 15em;
      }
      .heroes li {
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: #EEE;
        margin: .5em;
        padding: .3em 0;
        height: 1.6em;
        border-radius: 4px;
      }
      .heroes li.selected:hover {
        background-color: #BBD8DC !important;
        color: white;
      }
      .heroes li:hover {
        color: #607D8B;
        background-color: #DDD;
        left: .1em;
      }
      .heroes .text {
        position: relative;
        top: -3px;
      }
      .heroes .badge {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0 0.7em;
        background-color: #607D8B;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 1.8em;
        margin-right: .8em;
        border-radius: 4px 0 0 4px;
      }
    `],


    selector: 'my-app',
    template: '<h2>My Heroes!</h2>' +
    '<ul class="heroes">' +
    '<li [class.selected]="hero === selectedHero" *ngFor="let hero of heroes" (click)="onSelect(hero)">' +
    '<span class="badge">{{hero.id}}</span> {{hero.name}}' +
    '</li>' +
    '</ul>' +
    '<my-hero-detail [hero]="selectedHero"></my-hero-detail>'
})

export class AppComponent {
    public heroes = HEROES;
    title = 'Tour of Heroes';
    hero:Hero = {
        id: 1,
        name: 'marqn'
    };

    onSelect(hero:Hero) {
        this.selectedHero = hero;
    }
}