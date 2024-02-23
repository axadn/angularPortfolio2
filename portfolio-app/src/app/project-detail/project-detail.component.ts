import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { Observable,of, map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../carousel/carousel.component';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';


@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, CarouselComponent],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent implements OnInit{
  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {}

  details: {[key: string] : ProjectDetails}  ={
    'providence' : {
      title: "Project 1",
      slides: [{type: 'html',
      html: this.sanitizer.bypassSecurityTrustHtml('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/AFQ8x1VonLw?si=3aarrwAZFdAJSoFX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'), 
      description: "The complete soundtrack"}], 
      summary: 'Gate of Providence is an RPG that was created by Studio Xehryn. I composed 12 original soundtracks for this game.',
      skills : ['fooling around', 'programming']

    },
    'missingNote' : {
      title: "Missing Note",
      slides: [{type: 'html', html: this.sanitizer.bypassSecurityTrustHtml('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/9R2U5_a6aYQ?si=NuLg1pQVJYXRpg7l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'),
       description: 'Gameplay example'}],
      summary: 'I developed this game for a client. It is optimized for mobile devices, but it also runs in the browser. Players try to press the correct keys as tiles (snowballs) fall toward the keyboard. I handled every aspect of this project. The art/sprites, gameplay programming, arrangement of 12 classic Christams songs for the piano, etc.',
      skills : ['fooling around', 'programming']

    }
  };
  details$: Observable<ProjectDetails> = of(blankProject);

  ngOnInit() {
    this.details$ = this.route.paramMap.pipe(
      map(params => {
        return this.details[params.get('id') ?? ''];
      })
    );
  }
}

const blankProject = {title: '',slides: [], summary: '', skills: []};

export interface Slide {
  type: 'image' | 'video' | 'html';
  src? : string;
  html?: SafeHtml;
  description: string;
}

interface ProjectDetails  {
  title: string;
  slides: Slide[];
  summary: SafeHtml;
  skills: string [];
}