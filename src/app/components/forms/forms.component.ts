import { Location } from './../../types/location.interface';
import { GetUnitsService } from './../../services/get-units.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  results: Location [] = [];
  filteredResults: Location[]= [];
  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder, private unitService: GetUnitsService){}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: true
    })
    this.unitService.getAllUnits().subscribe(data => {
      this.results = data.locations as unknown as Location[];
      this.filteredResults = data.locations as unknown as Location[];
    })
  }

  onSubmit(): void{
    console.log(this.formGroup.value)
    if(!this.formGroup.value.showClosed){
      this.filteredResults = this.results.filter(location => location.opened === true)
    } else{
      this.filteredResults =this.results;
    }
  }

  onClear(): void{
    this.formGroup.reset();
  }
}
