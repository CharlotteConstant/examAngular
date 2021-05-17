import { Component, OnInit } from '@angular/core';
import { IncidentService } from '../incident.service';
import { Incident } from '../model/incident.model';

@Component({
  selector: 'app-incident-list',
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.css']
})
export class IncidentListComponent implements OnInit {

  incidents: Incident[] = [];

  constructor(private incidentService: IncidentService) { }

  ngOnInit(): void {
    this.incidentService.findAll().subscribe(data => this.incidents = data);
  }

}
