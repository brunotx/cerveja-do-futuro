import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public hasUser = true;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    if (id === '2') {
      this.hasUser = false;
    }
  }

  submit(value: number) {
    if (value === 1) {
      this.router.navigateByUrl('/dashboard/' + 1);
    } else {
      this.router.navigateByUrl('/company/' + 1);
    }
  }

}
