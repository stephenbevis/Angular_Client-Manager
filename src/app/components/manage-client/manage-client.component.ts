import { Component, OnInit, Input } from '@angular/core';

// Models
import {Client} from '../../models/Client';

// Services
import {ClientService} from '../../services/client.service';


@Component({
  selector: 'app-manage-client',
  templateUrl: './manage-client.component.html',
  styleUrls: ['./manage-client.component.scss']
})
export class ManageClientComponent implements OnInit {

  @Input() currentClient: Client;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    
  }

  closeMenu(){
    document.getElementById('manage_client').style.top = "-100vh";
  }

}
