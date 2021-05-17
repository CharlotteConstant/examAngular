import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
import { IncidentService } from '../incident.service';
import { Incident } from '../model/incident.model';

@Component({
  selector: 'app-incident-detail',
  templateUrl: './incident-detail.component.html',
  styleUrls: ['./incident-detail.component.css']
})
export class IncidentDetailComponent implements OnInit {
incident !: Incident;
divDisplay = false;
  constructor(config: NgbProgressbarConfig, private incidentService: IncidentService, private route: ActivatedRoute, private router: Router) {
    config.max = 100;
    config.striped = true;
    config.animated = true;
    config.type = 'success';
    config.height = '20px';

   }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.incidentService.findById(+id).subscribe(i => this.incident = i);
    }
  }

deleteIncident(): void {
  this.incidentService.delete(this.incident.id).subscribe(i => this.router.navigate(['/incident']))
}

deleteConfirm (){
  this.divDisplay = true;
}

}
