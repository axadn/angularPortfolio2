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
    'soundShroud' : {
      title: "SoundShroud",
      
      slides: [
        {type: 'html', html : this.sanitizer.bypassSecurityTrustHtml('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/FpGcsOTRMFo?si=7OsdMy7IwBX_xmQ3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        ), description: ``}
          ],
      summary: `
      <h2>Project description</h2>
      SoundShroud is a music sharing application similiar to the popular site SoundCloud.
      
      The backend API is built using Ruby on Rails with a PostgreSQL database.
      Amazon web services S3 service is used for blob file storage.
      The frontend is built using of React and Redux.

      <br>
      <br>

      It makes use of a job queue to handle audio conversion tasks by means of another job server implemented in Node.js . This makes the architecture highly scalable.
      <br>
      <br>
      
       <h3>Features: </h3>
       <ul>
        <li> User authentication </li>
        <li>  User uploaded content </li>
        <li>  Continuous playback of music while navigating </li>
        <li>  Time domain waveforms while playing music </li>
        <li>  Auto-generated playlists </li>
        <li>  Users can comments on tracks </li>
        <li>  Full-text-search for tracks by title and description, users by username and display name </li>
        <li>  Job Queue: Audio is converted to mp3 for decreased storage need and faster streaming (at the cost of upload processing time) </li>
      </ul>
      <br>
      <br>
      <a href='https://github.com/axadn/SoundShroud'> Application Github Repo</a>
      <br>
      <br>
      <a href='https://github.com/axadn/SoundShroud_background'> Audio Job Server Repo</a>
      `,
      skills : ['Full Stack Development', 'AWS', 'Responsive Design', 'React/Redux', 'Node.js', 'Ruby on Rails',
      'AJAX', 'PostgreSQL', 'Job Queue', 'Signal Processing']

    },
    'providence' : {
      title: "Project 1",
      slides: [{
        type: 'html',
          html: this.sanitizer.bypassSecurityTrustHtml('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/OoEqi-muDGU?si=ENEdLv_OU38oI71i" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'), 
        description: "Trailer for the game. I composed this trailer music."}, 
        {type: 'html',
          html: this.sanitizer.bypassSecurityTrustHtml('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/AFQ8x1VonLw?si=3aarrwAZFdAJSoFX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'), 
        description: "The complete soundtrack"}], 

      summary: this.sanitizer.bypassSecurityTrustHtml(`Gate of Providence is an RPG that was created by Studio Xehryn.
         I composed 12 original soundtracks for their game.
         <ul>
          <li><a href="https://xehryn.itch.io/gate-of-providence">Project Page</a></li>
         </ul>`),
      skills : ['musical composition']

    },
    'missingNote' : {
      title: "Missing Note",
      slides: [{type: 'html', html: this.sanitizer.bypassSecurityTrustHtml('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/9R2U5_a6aYQ?si=NuLg1pQVJYXRpg7l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'),
       description: 'Gameplay example'}],
      summary: `I developed this piano game for a client.
       <br> <br> 
       It is optimized for mobile devices, but it also runs in the browser.
       <br> <br>
       Three songs are chosen at random, and players try to press the correct keys as tiles (snowballs) fall toward the keyboard.
       <br> <br>
       I handled every aspect of this project myself (Except for the background image. It\'s public domain). I created the art/sprites, programmed the midi wavetable synthesis, gameplay, arranged 12 classic Christmas songs for the piano, etc. <br> <br> The most interesting part of this project was probably programming the midi synthesizer. There weren\'t any satisfactory solutions out there that allowed using arbitrary soundfonts and preserving the velocity layers, so I cooked up my own.`,
      skills : ['musical composition', 'programming', '2d art', 'typeScript', 'sound synthesis']

    },
    'downhill' : {
      title: "DownHill Hazard",
      slides: [{type: 'html', html: this.sanitizer.bypassSecurityTrustHtml('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/V_lSptQEBQY?si=rAdCOSqzPn59_YZC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'),
       description: 'Gameplay example'}],
      summary: this.sanitizer.bypassSecurityTrustHtml(`
        Downhill Hazard is a 3D snowboarding game with physics built from scratch using JavaScript.
         <br> 
         <br>
         I originally created this game as a project for a coding bootcamp, but I've come back periodically to add
         enhancements.
         <br>
         <br>
         <ul> 
            <li><a href="https://axadn.github.io/downhill-hazard/public/">Live Demo</a></li>
            <li><a href="https://github.com/axadn/downhill-hazard">Github</a></li>
         </ul>  `),
      skills : [ 'programming', '3d art', '2d art', 'javaScript', 'webGL']

    }
    ,
    'clubdzign' : {
      title: "Club Dzign",
      
      slides: [
        {type: 'html', html : this.sanitizer.bypassSecurityTrustHtml('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/0PvbEdisvc4?si=Jk0rSvpw-LTF-Cdd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        ), description: 'Wolf charm model'},
          {type: 'html', html: this.sanitizer.bypassSecurityTrustHtml('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/g4P3iZbTUMQ?si=dJWLo0B7KtHst8gN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'),
          description: 'Club Dzign promotional video'},
        {type: 'html', html : this.sanitizer.bypassSecurityTrustHtml('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/jrWlRYZqHLQ?si=8Flz40dVYtQ02v00" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        ), description: 'Skull charm model'},
        {type: 'html',
         html: this.sanitizer.bypassSecurityTrustHtml('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/0_FCu8Y5ej8?si=1PILdyB-0ecWK55X" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'),
          description: 'Ball charm model'},
          {type: 'html', html: this.sanitizer.bypassSecurityTrustHtml('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/M5W6rUDLL4o?si=6rUlGPzQzO32h8Ep" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'),
          description: 'I am proud of this this green tiger\'s eye texture I created from scratch.'},
        {type: 'html',
        html: this.sanitizer.bypassSecurityTrustHtml('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/wEiNd5-hYLo?si=MLFf-lD4NrKDapvt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'),
          description: 'Turquoise stone'},
        {type: 'html',
        html: this.sanitizer.bypassSecurityTrustHtml('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/0gs5bA85oU8?si=iMa5BJVXfEoU1JTY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'),
          description: 'Eagle eye stone'}],
      summary: `I created a total of 15 charms and 27 stone models for Club Dzign\'s "3D Bracelet Maker App".
      
      <br> <br>
      The models are all optimized for mobile devices. They are lo-poly but make use of normal maps baked down from hi-poly versions of the assets to preserve finer detail.`,
      skills : ['3d models']

    },

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