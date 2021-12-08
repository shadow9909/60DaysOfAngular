import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // ['app-servers'] attribute selector   use <div app-servers></div>
  // .app-servers class selector   <div class="app-servers"></div>
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server Created';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created';
  }

  ngOnInit(): void {}
}
