import { Component } from '@angular/core';
import { BulletListService } from './service/bullet-list.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private bulletListService: BulletListService) {

  }

  toggleSearch() {
    this.bulletListService.toggleSearch();
    console.log(this.bulletListService.showSearch);
  }
}
