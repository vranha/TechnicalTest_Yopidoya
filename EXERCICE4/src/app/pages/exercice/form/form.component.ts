import { Contributor } from './../interfaces/contributors.interface';
import { GithubService } from './../../../services/github.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() contributors!:Contributor[]
  @Output() getContributorsForm = new EventEmitter();
  form!: FormGroup;

  constructor(private githubSvc: GithubService) {
    this.form = new FormGroup({
      owner: new FormControl(),
      repo: new FormControl()
    });
   }

  ngOnInit(): void {
  }


  onSubmit() {
    this.getContributorsForm.emit(this.form.value)
  }
}
