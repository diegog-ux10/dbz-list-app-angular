import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
 public heroNames: string[] = ['Spiderman', 'Hulk', 'Ironman', 'Thor', 'Capitan America'];
 public deletedHero: string | undefined = ''; 
 removeLastHero():void {
    const deletedHero = this.heroNames.pop();
    this.deletedHero = deletedHero;
  }
}
