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
       I handled every aspect of this project myself (Except for the background image. It\'s public domain). I created the art/sprites, programmed the midi wavetable synthesis, gameplay, arranged 12 classic Christmas songs for the piano, etc. <br> <br> The most interesting part of this project was probably programming the midi synthesizer. There weren\'t any satisfactory solutions out there that allowed using arbitrary soundfonts and preserving the velocity layers, so I cooked up my own.
       
       <br> <br> <br>
       <h2> Midi Synthesizer </h2>
       
       I elected to use the MIDI standard for sample playback for the flexibility of changing playback parameters in realtime.
       I had a particular soundfont in mind but no way to accurately reproduce it's sound output for web-based playback.

       <br> <br>
       I implemented a <a href="https://github.com/axadn/sf2converter" >Node package</a>  to convert .sf2 (soundfont) files into a json-based format better suited for this. (It also downsamples the audio samples for faster loading times)
       As part of the game I implemented a basic <a href="">sample-based</a> <a href="">wavetable synthesizer<a> to play back MIDI using these files.
       `,
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
         </ul>  
         
         <h3 id="features-and-overview">Features and Overview</h3>
<p>Users control a character in 3rd person to navigate down a slope on a snowboard.</p>
<p>The slope is procedurally generated. Each time a player progresses forward a segment,
a new segment is added to the front of the path as one is removed.</p>
<p>Collision detection is implemented for the edges of the path, the trees, and balloons.</p>
<h4 id="object-pooling">Object Pooling</h4>
<p>In earlier stages of development, there were momentary slowdowns that became more frequent after playing for a little while. This seemed like an issue I&#39;ve seen before with memory allocation. Because the slope deletes and instantiates lots of trees, the garbage collector becomes very taxed. We don&#39;t have direct control over how memory is used in JavaScript. We can, however, make the garbage collector&#39;s job a lot easier by re-using objects instead of instantiating new ones. The implementation of an Object Pool is very simple, but very effective :</p>
<pre><code class="lang-javascript"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">TreePool</span></span>{
    <span class="hljs-keyword">constructor</span>(mesh){
        <span class="hljs-keyword">this</span>.treeMesh = mesh;
        <span class="hljs-keyword">this</span>.pool = [];
    }
    pullTree(id, transformation = MathUtils.identityMatrix4){
        let tree;
        <span class="hljs-keyword">if</span>(<span class="hljs-keyword">this</span>.pool.length == <span class="hljs-number">0</span>){
            tree = new GameObject(<span class="hljs-keyword">this</span>.treeMesh, transformation, <span class="hljs-literal">true</span>);
        }<span class="hljs-keyword">else</span>{
            tree = <span class="hljs-keyword">this</span>.pool[<span class="hljs-keyword">this</span>.pool.length - <span class="hljs-number">1</span>];
            tree.setTransformationMatrix(transformation);
            <span class="hljs-keyword">this</span>.pool.pop();
        }
        tree.id = \`treeObstacle\${id}\`;
        <span class="hljs-keyword">return</span> tree;
    }
    releaseTree(tree){
        <span class="hljs-keyword">this</span>.pool.push(tree);
    }
}
</code></pre>
<h4 id="animation-mixing">Animation Mixing</h4>
<p>Eventually, when I began to add animations to the character, I ran into the problem of needing to smoothly interpolate between different animations. It is also extremely common to have multiple bones to affect the final position of a vertex. This is a bit of a problem because the exporter I am using exports the bone&#39;s animations as transformation matrices. Transformation matrices can not be directly interpolated because of how they represent transformations. This would produce garbage.</p>
<p>One solution is to extract the rotation and position and individualy interpolate these. This is inconvenient, however, because one needs to break down all the matrices, interpolate them, and then recombine them back into a transformation matrix.</p>
<p>A great solution to this problem that has seen use lately is dual quaternions. Dual quaternions by nature are very simple to interpolate (you can just treat each quaternion as 4D vector). One can write a shader that takes bone transformations formatted as dual quaternions. This allows us to easily interpolate the different animations and bone influences without converting back and forth between different formats. Dual quaternions also take less space than transformation matrices. Instead of 16 components, there are 8.</p>
<p>My eventual solution was to convert the transformation matrices into dual quaternions, and then use these for all the mixing and the shaders.</p>
<p>More about dual quaternions: </p>
<p><a href="https://www.cs.utah.edu/~ladislav/kavan07skinning/kavan07skinning.pdf">https://www.cs.utah.edu/~ladislav/kavan07skinning/kavan07skinning.pdf</a>
<a href="https://cs.gmu.edu/~jmlien/teaching/cs451/uploads/Main/dual-quaternion.pdf">https://cs.gmu.edu/~jmlien/teaching/cs451/uploads/Main/dual-quaternion.pdf</a>
<a href="http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.434.4796&amp;rep=rep1&amp;type=pdf">http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.434.4796&amp;rep=rep1&amp;type=pdf</a></p>
<h4 id="collision-detection">Collision Detection</h4>
<p>Because of the way I have the slope procedurally generated (segment by segment) we only need to check the character&#39;s collider against colliders in the current segment, the previous segment, and the next segment. This saves a lot of calculations. We only need to check for collision against a few balloons and trees each frame. This is similar to the quadtree method used to divide space and detect likely colisions used in a lot of games.</p>
<h4 id="debugging">Debugging</h4>
<p>To assist with debugging, I&#39;ve added a couple methods to the rasterizer class. 
These allow you to draw lines and circles between points in 3D space from the console or source code. This is useful for checking that the results of transformations and math operations are what you expect.</p>
<pre><code class="lang-javascript">  debugLine(start, <span class="hljs-built_in">end</span>, style = <span class="hljs-string">"black"</span>){
    start = MathUtils.multiplyVec4ByMatrix4(<span class="hljs-keyword">this</span>.viewMatrix, start.concat(<span class="hljs-number">1</span>));
    start = MathUtils.scaleVector(start, <span class="hljs-number">1</span>/start[<span class="hljs-number">3</span>]);
    start = <span class="hljs-keyword">this</span>.clipSpaceToFlatCanvasCoords(start[<span class="hljs-number">0</span>],start[<span class="hljs-number">1</span>]);
    <span class="hljs-built_in">end</span> = MathUtils.multiplyVec4ByMatrix4(<span class="hljs-keyword">this</span>.viewMatrix, <span class="hljs-built_in">end</span>.concat(<span class="hljs-number">1</span>));
    <span class="hljs-built_in">end</span> = MathUtils.scaleVector(<span class="hljs-built_in">end</span>, <span class="hljs-number">1</span>/<span class="hljs-built_in">end</span>[<span class="hljs-number">3</span>]);
    <span class="hljs-built_in">end</span> = <span class="hljs-keyword">this</span>.clipSpaceToFlatCanvasCoords(<span class="hljs-built_in">end</span>[<span class="hljs-number">0</span>], <span class="hljs-built_in">end</span>[<span class="hljs-number">1</span>]);
    <span class="hljs-keyword">this</span>.ctx.beginPath();
    <span class="hljs-keyword">this</span>.ctx.moveTo(start[<span class="hljs-number">0</span>],start[<span class="hljs-number">1</span>]);
    <span class="hljs-keyword">this</span>.ctx.lineTo(<span class="hljs-built_in">end</span>[<span class="hljs-number">0</span>],<span class="hljs-built_in">end</span>[<span class="hljs-number">1</span>]);
    <span class="hljs-keyword">this</span>.ctx.strokeStyle = style;
    <span class="hljs-keyword">this</span>.ctx.<span class="hljs-built_in">stroke</span>();
  }

  debugCircle(pos, radius){
    pos = MathUtils.multiplyVec4ByMatrix4(<span class="hljs-keyword">this</span>.viewMatrix, pos.concat(<span class="hljs-number">0</span>));
    <span class="hljs-keyword">this</span>.ctx.arc(pos[<span class="hljs-number">0</span>], pos[<span class="hljs-number">1</span>], radius, <span class="hljs-number">0</span>, Math.PI * <span class="hljs-number">2</span>);
    <span class="hljs-keyword">this</span>.ctx.<span class="hljs-built_in">stroke</span>();
  }
</code></pre>

         
         `),
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