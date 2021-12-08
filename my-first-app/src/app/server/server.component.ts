import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  // template: '<div> server Component</div>',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }
}
