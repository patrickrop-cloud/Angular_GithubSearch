import { Component, OnInit } from '@angular/core';
import { GithubHttpRequestService } from '../../service/github-http-request.service';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: any = [];
  repos: any = [];
  username!: string;

  constructor(private _githubHttpRequestService: GithubHttpRequestService) { 
    
    this._githubHttpRequestService.getUser().subscribe(user => {
      
      this.user = user;
    });
    this._githubHttpRequestService.getRepos().subscribe(repos => {
      this.repos = repos;
    });

  }

  ngOnInit():  {
  }

}
