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
      title: '',
      previewSrc: 'assets/providence/g.png',
      skills: [{id: 'music', label: "Musical Compisition"}],
      id: 'providence'
    },
    {
      title: 'Missing Note',
      previewSrc: 'assets/missingNote/preview.png',
      skills: [{id: "art", label: '3d Models'}, {id: "art", label: '2d Art'},
       {id: 'software', label: "Programming/Development"},
       {id: 'music', label: "Music"}],
      id: 'missingNote'
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