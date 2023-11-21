import {Client} from './client.entities';
export interface Comfact {
  idcommande: number;
  numfact: number;
  datecommande: string;
  etat: string;
  montant: number;
  client: Client;
}
