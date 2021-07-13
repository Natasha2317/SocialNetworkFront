import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { EditWallService } from '../../services/edit-wall.service';

@Component({
  selector: 'app-edit-wall',
  templateUrl: './edit-wall.component.html',
  styleUrls: ['./edit-wall.component.css']
})
export class EditWallComponent implements OnInit {

  form: FormGroup;
  aSub: Subscription;
  errorRes: object | null = null;

  constructor(private fb: FormBuilder, private editWallService: EditWallService) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: [null, [Validators.required]],
      text: [null, [Validators.required]]
    });
    this.getPotsList();
  }

  getPotsList(): void {
    this.aSub = this.editWallService.get().subscribe(
      res => this.form.setValue(res),
      error => console.log(error)
    );
  }

  submit(): void {
    this.aSub = this.editWallService.update(this.form.value).subscribe(
      res => alert('Save'),
      error => console.log(error.error)
    );
  }

}
