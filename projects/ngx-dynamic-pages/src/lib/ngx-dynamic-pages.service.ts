import { Inject, Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { IDynamicPagesConfig } from './core/interfaces/dynamic-pages-config.interface';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgxDynamicPagesService {

  private components$ = new Subject();
  private config$ = new BehaviorSubject<IDynamicPagesConfig>({} as IDynamicPagesConfig);

  constructor(
    private router: Router,
    @Inject('config') private configuration: IDynamicPagesConfig
  ) {
    this.config$.next(this.configuration);
  }

  public listenRoute(): void {
    this.router.events.subscribe((value: any) => {
      if (value instanceof NavigationEnd) {
        this.components$.next(this.findRouteComponents(value.url));
      }
    });
  }

  public getDynamicPagesConfig(): Observable<IDynamicPagesConfig> {
    return this.config$;
  }

  public getComponents(): Observable<any> {
    return this.components$;
  }

  private findRouteComponents(route: string): any {
    return this.configuration.jsonParameterize.find((router: any) => router.route === route);
  }
}
