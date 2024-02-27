import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { Observable,of, map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../carousel/carousel.component';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, CarouselComponent, MatChipsModule],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent implements OnInit{
  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {}

  details: {[key: string] : ProjectDetails}  ={
    'providence' : {
      title: "Project 1",
      slides: [{
        type: 'html',
          html: this.sanitizer.bypassSecurityTrustHtml('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/OoEqi-muDGU?si=ENEdLv_OU38oI71i" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'), 
        description: "Trailer for the game. I composed this trailer music."}, 
        {type: 'html',
          html: this.sanitizer.bypassSecurityTrustHtml('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/AFQ8x1VonLw?si=3aarrwAZFdAJSoFX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'), 
        description: "The complete soundtrack"}], 

      summary: 'Gate of Providence is an RPG that was created by Studio Xehryn. I composed 12 original soundtracks for this game.',
      skills : ['Musical Composition']

    },
    'missingNote' : {
      title: "Missing Note",
      slides: [{type: 'html', html: this.sanitizer.bypassSecurityTrustHtml('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/9R2U5_a6aYQ?si=NuLg1pQVJYXRpg7l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'),
       description: 'Gameplay example'}],
      summary: 'I developed this game for a client. It is optimized for mobile devices, but it also runs in the browser. Three songs are chosen at random, and players try to press the correct keys as tiles (snowballs) fall toward the keyboard. I handled every aspect of this project myself (Except for the background image. It\'s public domain). I created the art/sprites, programmed the midi wavetable synthesis, gameplay, arranged 12 classic Christmas songs for the piano, etc. <br> <br> The most interesting part of this project was probably programming the midi synthesizer. There weren\'t any satisfactory solutions at there that allowed using arbitrary soundfonts and preserving the velocity layers, so I cooked up my own.',
      skills : ['Musical composition', 'programming', '3d/2d art']

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