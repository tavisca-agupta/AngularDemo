import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../mock-data/mock-data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  public name = "Aman";
  public mockString = "";
  public userName = "Text from Class file";
  public twoWayBinding = "";
  public pipeLower = "ANGUlar";
  public pipeUpper = "framework";
  public pipeDate = new Date();
  public mockProductData = [];
  public errorMsg="";

  constructor(private _mockData: MockDataService) {
  }

  ngOnInit(): void {
    this.mockString = this._mockData.GetMockString();

    this._mockData.getJsonData().subscribe(data => this.mockProductData = data,
      error=> this.errorMsg =error);
  }

  displayName() {
    window.alert("Activated from Event binding");
  }
  logger(recievedValue) {
    window.alert("this is recieved from input " + recievedValue);
  }
}
