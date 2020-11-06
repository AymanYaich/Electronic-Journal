import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../../auth2/shared/auth.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: any;
  
  id: any;
  constructor(
    private authService: AuthService,
    private actRoute: ActivatedRoute,
    public http: HttpClient
  ) {}

  ngOnInit(): void {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    
    this.getInfo();
  }

  logOut() {
    this.authService.doLogout();
  }
  getInfo() {
    this.http
      .get(`http://localhost:3000/login/profiles/${this.id}`)
      .subscribe(datas => {
        this.user = datas;

        this.ngOnInit()
      });
  }
}
