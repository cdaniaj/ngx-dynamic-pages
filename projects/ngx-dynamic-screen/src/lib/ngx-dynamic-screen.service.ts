import { Inject, Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { IDynamicScreenConfig } from './core/interfaces/dynamic-screen-config.interface';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgxDynamicScreenService {

  private components$ = new Subject();
  private config$ = new BehaviorSubject<IDynamicScreenConfig>({} as IDynamicScreenConfig);

  constructor(
    private router: Router,
    @Inject('config') private configuration: IDynamicScreenConfig
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

  public getDynamicScreenConfig(): Observable<IDynamicScreenConfig> {
    return this.config$;
  }

  public getComponents(): Observable<any> {
    return this.components$;
  }

  private findRouteComponents(route: string): any {
    return this.configuration.jsonParameterize.find((router: any) => router.route === route);
  }
}
