import { Component, OnInit } from '@angular/core';
import { UrlService } from '../../servidor/url.service';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http'

@Component({
  selector: 'app-agende',
  templateUrl: './agende.page.html',
  styleUrls: ['./agende.page.scss'],
})
export class AgendePage implements OnInit {

  servicos:any

  constructor(public servidorUrl: UrlService, public http: Http) { 

    this.listarServicos();
  }

  ngOnInit() {
  }

  listarServicos() {

    this.http.get(this.servidorUrl.pegarUrl() + 'lista-servico.php')
    .pipe(map(res => res.json()))
    .subscribe(listaDados => {
      this.servicos = listaDados
    })
  }

}
