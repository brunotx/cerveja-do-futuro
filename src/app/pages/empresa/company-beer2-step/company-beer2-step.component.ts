import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-company-beer2-step',
  templateUrl: './company-beer2-step.component.html',
  styleUrls: ['./company-beer2-step.component.css']
})
export class CompanyBeer2StepComponent implements OnInit {

  public modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
