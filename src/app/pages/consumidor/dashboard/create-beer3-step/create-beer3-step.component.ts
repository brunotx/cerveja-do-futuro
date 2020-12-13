import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-create-beer3-step',
  templateUrl: './create-beer3-step.component.html',
  styleUrls: ['./create-beer3-step.component.css']
})

export class CreateBeer3StepComponent implements OnInit {

  public modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
