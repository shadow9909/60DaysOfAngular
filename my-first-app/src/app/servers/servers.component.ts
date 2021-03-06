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
  serverName = '';
  serverCreated = false;
  servers = ['Test1', 'Test2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: any) {
    console.log(event.target.value);
    this.serverName = event.target.value; // (<HTMLInputElement>event.target).value; explicit typecasting is advisable while using typescript
  }

  ngOnInit(): void {}
}
