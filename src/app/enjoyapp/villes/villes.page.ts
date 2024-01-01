import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-villes',
  templateUrl: './villes.page.html',
  styleUrls: ['./villes.page.scss'],
})
export class VillesPage implements OnInit {

  constructor(
    private route: Router,
    private router: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  voirplus(){
    this.route.navigate(['/details']);
  }

}
