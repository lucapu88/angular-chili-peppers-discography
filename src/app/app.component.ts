import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'red-hot-chili-angular';
  routerUrl?: string;
  constructor(private router: Router) {}

  ngOnInit() {
    this.routerUrl = this.router.url;

    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((e: NavigationEnd) => {
        this.routerUrl = e.url;
      });
  }
}
