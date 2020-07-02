import { Component, Input } from '@angular/core';
import { Historia } from '../../interfaces/interfaces';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent {
  @Input() historias: Historia[];

}
