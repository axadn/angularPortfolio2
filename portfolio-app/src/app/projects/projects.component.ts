import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projectItems: ProjectItem[] = [{
    title: 'placeholder',
    previewSrc: 'assets/Apple.webp',
    skills: ['3d modeling', 'software development'],
    id: '1'
  },
  {
    title: 'placeholder',
    previewSrc: 'assets/Apple.webp',
    skills: ['stuff', 'skill'],
    id: '2'

  }
];

}

interface ProjectItem{
  title: string;
  previewSrc: string;
  skills: string[];
  id: string;
}