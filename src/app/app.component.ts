import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserProfileComponent } from './component/user-profile/user-profile.component';
import { GithubHttpRequestService } from './service/github-http-request.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GithubHttpRequestService]
})
export class AppComponent {
  // githubsearch = 'Github-Api Search';
  title = 'app';
}
