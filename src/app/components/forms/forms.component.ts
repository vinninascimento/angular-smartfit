import { GetUnitsService } from './../../services/get-units.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  results = [];
  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder, private unitService: GetUnitsService){}

  ngOnInit(): void {
    this.unitService.getAllUnits().subscribe(data => console.log(data));
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: false
    })
      
  }

  onSubmit(): void{
    console.log(this.formGroup.value);
  }

  onClear(): void{
    this.formGroup.reset();
  }
}
