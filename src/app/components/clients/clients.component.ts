import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../services/client.service';
import {Client} from '../../models/Client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  clients: Client[];

  currentClient: Client = {
    id: "",
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    balance: null,
    service: "",
    serviceDescription: ""
  };

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getClients().subscribe(clients => {
      this.clients = clients;
      console.log(clients);
    });
  }

  manageClient(client: Client){
    document.getElementById('manage_client').style.top = "0px";
    this.currentClient = client;
    console.log(this.currentClient);
  }

}
