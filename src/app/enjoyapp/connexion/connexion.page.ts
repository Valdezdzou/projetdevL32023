import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  constructor(
    private route: Router,
    private router: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  connexion(){
    this.route.navigate(['/home']);
  }

  // details(musi: any) {
  //   localStorage.setItem("dt", JSON.stringify(musi));
  //   this.route.navigate(['onglets/album/listealbum/lecture']);
  // }
}
