import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgxDynamicPagesComponent } from './ngx-dynamic-pages.component';
import { NgxDynamicPagesService } from './ngx-dynamic-pages.service';
import { DynamicComponentDirective } from './core/directive/dynamic-component.directive';
import { GetDynamicComponentPipe } from './core/pipes/get-component.pipe';
import { CommonModule } from '@angular/common';
import { DynamicSelectorComponent } from './core/dynamic-selector/dynamic-selector.component';
import { IDynamicPagesConfig } from './core/interfaces/dynamic-pages-config.interface';



@NgModule({
  declarations: [
    NgxDynamicPagesComponent,
    DynamicComponentDirective,
    GetDynamicComponentPipe,
    DynamicSelectorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgxDynamicPagesComponent,
    DynamicSelectorComponent
  ],
  providers: [
    NgxDynamicPagesService
  ]
})
export class NgxDynamicPagesModule {
  static forRoot(configuration: IDynamicPagesConfig): ModuleWithProviders<NgxDynamicPagesModule> {
    return {
      ngModule: NgxDynamicPagesModule,
      providers: [NgxDynamicPagesService, { provide: 'config', useValue: configuration }]
    };
  }
}
