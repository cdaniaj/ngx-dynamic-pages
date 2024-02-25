import { Component, Input } from '@angular/core';
import { IComponent } from '../interfaces/json-parameterize.interface';

@Component({
  selector: 'ngx-dynamic-selector',
  templateUrl: './dynamic-selector.component.html',
  styleUrls: ['./dynamic-selector.component.css']
})
export class DynamicSelectorComponent {

 @Input() routeComponents!: IComponent[];
}
