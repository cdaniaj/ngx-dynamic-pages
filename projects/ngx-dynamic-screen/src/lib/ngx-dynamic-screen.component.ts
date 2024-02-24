import { Component, OnInit } from '@angular/core';
import { NgxDynamicScreenService } from './ngx-dynamic-screen.service';

@Component({
  selector: 'ngx-dynamic-screen',
  template: `
    <ngx-dynamic-selector [routeComponents]="routeComponents"></ngx-dynamic-selector>
  `,
  styles: []
})
export class NgxDynamicScreenComponent implements OnInit {
  routeComponents!: any[];

  constructor(private service: NgxDynamicScreenService) {
    this.service.listenRoute();
  }

  ngOnInit(): void {
    this.service.getComponents()
    .subscribe(value => {
      this.routeComponents = value.components;
    });
  }
}
