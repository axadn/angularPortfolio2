import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';

const PROJECT_TYPES = ["Games", "Apps", "Other"];
const WORK_TYPES = [
  {id: "software", label: "Software Development"},
  {id: "art", label: "Art/Models"} , 
  {id: "music", label: "Composition/Arrangement"}
]

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatSelectModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  workTypeFilter = "all";
  projectItems: ProjectItem[] = [
    {
      title: 'placeholder',
      previewSrc: 'assets/Apple.webp',
      skills: [{id: "art", label: '3d modeling'}, {id: 'software', label: "software development"},
        {id: "music", label: "composition"}],
      id: '1'
    },
    {
      title: 'placeholder',
      previewSrc: 'assets/Apple.webp',
      skills: [{id: "art", label: '3d modeling'}, {id: 'software', label: "software development"}],
      id: '2'

    }
  ];

  getSkillsLabel(item: ProjectItem){
    return item.skills.map(skill=>skill.label).join(' | ');
  }

  shouldDisplay(item: ProjectItem){
   return this.workTypeFilter === "all" || item.skills.some(skill=>skill.id === this.workTypeFilter);
  }

  workTypes = WORK_TYPES;
  projectTypes = [];

}

interface ProjectItem{
  title: string;
  previewSrc: string;
  skills: Array<{id: string, label: string}>;
  id: string;
}