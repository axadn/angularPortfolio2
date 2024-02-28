import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { ChildrenOutletContexts } from '@angular/router';
import { transition, trigger, query, style, group, animate, animateChild } from '@angular/animations';
const projectsEnterAnimation = 
group([
  query(':enter',[
    style({
     position: 'absolute',
      top: 0
    })]),
 query('.project-preview:nth-child(even)', [
  style({
    position: 'relative',
    left: '-50vw',
    top: '200vh',
    opacity: 0
  }),
  animate('400ms ease-out', style({left: '0', top: '0', opacity: 100}))
 ]),
 query('.project-preview:nth-child(odd)', [
  style({
    position: 'relative',
    left: '50vw',
    top: '-100vh',
    opacity: 0
  }),
  animate('400ms ease-out', style({left: '0', top: '0', opacity: 100}))
 ]),
 query('.project-type-select',[
  style({
    position: 'relative',
    left: '-100vw',
    opacity: 0
  }),
  animate('300ms ease-out', style({left: '0', opacity: 100}))
], {optional: true}),
]);

const projectsExitAnimation = 
(query(':leave',[style({opacity: 100}), animate('600ms ease-out', style({opacity: 0}))]));

const detailsEnterAnimation = 
group([  query(':enter',[
   style({
    position: 'absolute',
     opacity: 0,
     top: 0
   }),
   animate('600ms ease-in', style({top: '0', opacity: 100}))
 ], {optional: true}),
  query(':enter .carousel', [
    style({
      position: 'relative',
      top: '100vh'
    }),
    animate('600ms ease-in', style({top: '0'}))

  ]),
  query(':enter .text', [
    style({
      position: 'relative',
      left: '100vw'
    }),
    animate('700ms 300ms ease-in', style({left: '0'}))

  ])
 ]);

const aboutExitAnimation =
 group([  
   query(':leave .content', [
     style({
       position: 'relative',
       left: '0',
       opacity: 100
     }),
     animate('200ms ease-in', style({left: '100vw', opacity: 20}))
 
   ])
  ]);

const aboutEnterAnimation  = group([  
  query(':enter',[
    style({
     position: 'absolute',
     top : 0,
    }),
  ], {optional: true}),
   query(':enter .content', [
     style({
       position: 'relative',
       left: '-100vw'
     }),
     animate('400ms ease-out', style({left: '0'}))
   ])
  ]);
 


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, MatToolbarModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss', 
  animations: [
    trigger('routeAnimations',
      [ 
        transition('AboutPage => ProjectsPage',
          group([aboutExitAnimation, projectsEnterAnimation])),
        transition('ProjectsPage => ProjectDetailPage', [
          group([projectsExitAnimation, detailsEnterAnimation])]),
        transition('ProjectsPage => AboutPage',[ 
          group([projectsExitAnimation, aboutEnterAnimation])]),
        transition('ProjectDetailPage => AboutPage',[ 
            group([ aboutEnterAnimation])]),
        
        ])
  ]
})
export class AppComponent {
  constructor(private outletContexts : ChildrenOutletContexts){

  }
  getRouteAnimationData(){
    return this.outletContexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
  title = 'portfolio-app';
}
