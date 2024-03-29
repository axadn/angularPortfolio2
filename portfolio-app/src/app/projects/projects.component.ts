import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { Router, RouterModule, Params } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

const PROJECT_TYPES = ["Games", "Apps", "Other"];
const WORK_TYPES = [
  {id: "software", label: "Software Development"},
  {id: "art", label: "Art/Models"} , 
  {id: "music", label: "Composition/Arrangement"}
]

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatSelectModule, MatChipsModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  workTypeFilter = "all";
  
  projectItems: ProjectItem[] = [
    {
      title: '',
      previewSrc: 'assets/dzignclub/screen2.png',
      skills: [{id: "art", label: '3d modeling'}],
      id: 'clubdzign'
    },
    {
      title: '',
      previewSrc: 'assets/providence/g.png',
      skills: [{id: 'music', label: "musical composition"}],
      id: 'providence'
    },
    {
      title: '',
      previewSrc: 'assets/missingNote/preview.png',
      skills: [ {id: "art", label: '2d Art'},
       {id: 'software', label: "programming"},
       {id: 'music', label: "musical composition"},
      {id: 'software', label: 'sound synthesis'}],
      id: 'missingNote'
    },
    {
      title: '',
      previewSrc: 'assets/downhill/screenshot1.png',
      skills: [{id: "art", label: '3d modeling'},
       {id: 'software', label: 'programming'}],
      id: 'downhill'
    },
    {
      title: '',
      previewSrc: 'assets/soundShroud/icon2.jpg',
      skills: [{id: 'software', label: 'software development'},
      {id: 'software', label: 'deployment'},
      {id: 'software', label: 'signal processing'}],
      id: "soundShroud"
    }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((params : Params)=>{
      this.workTypeFilter = params['filter'] ?? 'all';
    });
  }

  onFilterChanged(filter: string){
    this.router.navigate([], {queryParams: {filter}});
  }

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