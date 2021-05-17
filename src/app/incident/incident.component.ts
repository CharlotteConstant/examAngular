import { Component, Input, OnInit } from '@angular/core';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
import { IncidentService } from '../incident.service';
import { Incident } from '../model/incident.model';

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.css']
})
export class IncidentComponent implements OnInit {
@Input() incident = new Incident(1,"a","b","c","d","e",50,"f","g",true);
open!: boolean;

  constructor(private incidentService: IncidentService, config: NgbProgressbarConfig) {
    config.max = 100;
    config.striped = true;
    config.animated = true;
    config.type = 'success';
    config.height = '20px';
  }

  ngOnInit(): void {
    this.open = this.incident.open;
  }

}
