import { Component, OnInit, Input } from '@angular/core';
import { Contributor } from '../interfaces/contributors.interface';

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.scss']
})
export class ContributorsComponent implements OnInit {

  @Input() contributors!:Contributor[]
  @Input() repo!:string

  constructor() { }

  ngOnInit(): void {
  }

}
