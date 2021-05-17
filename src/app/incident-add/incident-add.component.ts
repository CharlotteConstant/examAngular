import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IncidentService } from '../incident.service';

@Component({
  selector: 'app-incident-add',
  templateUrl: './incident-add.component.html',
  styleUrls: ['./incident-add.component.css']
})
export class IncidentAddComponent implements OnInit {
incidentform !: FormGroup;
formSubmitted = false;
  constructor(private fb: FormBuilder, private incidentService: IncidentService, private router: Router, ) { }

  ngOnInit(): void {
    this.incidentform = this.fb.group({
      id: [''],
      titre: ['', Validators.required],
      email: ['', Validators.required],
      description: ['', Validators.required],
      level: ['', Validators.required],
      type: ['', Validators.required],
      progress: ['', Validators.required],
      dateCreation: [''],
      dateModification: [''],
      open: ['true', Validators.required],
    })
  };

  addIncident(): void {
    this.formSubmitted = true;
    const incident = this.incidentform.value;
    if(this.incidentform.valid){
      this.incidentService.add(this.incidentform.value).subscribe(i => {this.router.navigate(['/incident'])})
    }
  }
}
