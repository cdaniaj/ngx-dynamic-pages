import { Component, OnInit } from '@angular/core';
import { NgxDynamicPagesService } from './ngx-dynamic-pages.service';

@Component({
  selector: 'ngx-dynamic-Pages',
  template: `
    <ngx-dynamic-selector [routeComponents]="routeComponents"></ngx-dynamic-selector>
  `,
  styles: []
})
export class NgxDynamicPagesComponent implements OnInit {
  routeComponents!: any[];

  constructor(private service: NgxDynamicPagesService) {
    this.service.listenRoute();
  }

  ngOnInit(): void {
    this.service.getComponents()
    .subscribe(value => {
      this.routeComponents = value.components;
    });
  }
}
