import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgxDynamicScreenComponent } from './ngx-dynamic-screen.component';
import { NgxDynamicScreenService } from './ngx-dynamic-screen.service';
import { DynamicComponentDirective } from './core/directive/dynamic-component.directive';
import { GetDynamicComponentPipe } from './core/pipes/get-component.pipe';
import { IDynamicScreenConfig } from './core/interfaces/dynamic-screen-config.interface';
import { CommonModule } from '@angular/common';
import { DynamicSelectorComponent } from './core/dynamic-selector/dynamic-selector.component';



@NgModule({
  declarations: [
    NgxDynamicScreenComponent,
    DynamicComponentDirective,
    GetDynamicComponentPipe,
    DynamicSelectorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgxDynamicScreenComponent,
    DynamicSelectorComponent
  ],
  providers: [
    NgxDynamicScreenService
  ]
})
export class NgxDynamicScreenModule {
  static forRoot(configuration: IDynamicScreenConfig): ModuleWithProviders<NgxDynamicScreenModule> {
    return {
      ngModule: NgxDynamicScreenModule,
      providers: [NgxDynamicScreenService, { provide: 'config', useValue: configuration }]
    };
  }
}
