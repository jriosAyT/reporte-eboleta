import { CSVRecord } from './../../_model/CSVModel';
import { Component, ViewChild } from '@angular/core';


@Component({
  selector: 'app-lectura-csv',
  templateUrl: './lectura-csv.component.html',
  styleUrls: ['./lectura-csv.component.css']
})
export class LecturaCSVComponent {
  sumaTotal: number = 0;

  public records: any[] = [];  

  @ViewChild('csvReader') 
  csvReader: any;  

  uploadListener($event: any): void {  
  
    let text = [];  
    let files = $event.srcElement.files;  
  
    if (this.isValidCSVFile(files[0])) {  
  
      let input = $event.target;  
      let reader = new FileReader();  
      reader.readAsText(input.files[0]);  
  
      reader.onload = () => {  
        let csvData = reader.result;  
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);  
  
        let headersRow = this.getHeaderArray(csvRecordsArray);  
  
        this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);  
      };  
  
      reader.onerror = function () {  
        console.log('error is occured while reading file!');  
      };  
  
    } else {  
      alert("Please import valid .csv file.");  
      this.fileReset();  
    }  
  }  

  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {  
    let csvArr = [];  
    
  
    for (let i = 1; i < csvRecordsArray.length; i++) {  
      let curruntRecord = (<string>csvRecordsArray[i]).split(';');  
      if (curruntRecord.length == headerLength) {  
        let csvRecord: CSVRecord = new CSVRecord();  
        csvRecord.folio = curruntRecord[0].trim();  
        csvRecord.neto = curruntRecord[1].trim();  
        csvRecord.iva = curruntRecord[2].trim();  
        csvRecord.total = curruntRecord[3].trim();  
        csvRecord.dte = curruntRecord[4].trim();  
        csvRecord.fecha = curruntRecord[5].trim();
        csvRecord.vendedor = curruntRecord[6].trim();  
        csvRecord.sucursal = curruntRecord[7].trim();  
        csvArr.push(csvRecord);
        this.sumaTotal += parseInt(csvRecord.total);
      }  
    }  
    return csvArr;  
  }  
  
  sumarTotal(){

  }

  isValidCSVFile(file: any) {  
    return file.name.endsWith(".csv");  
  }  
  
  getHeaderArray(csvRecordsArr: any) {  
    let headers = (<string>csvRecordsArr[0]).split(';');  
    let headerArray = [];  
    for (let j = 0; j < headers.length; j++) {  
      headerArray.push(headers[j]);  
    }  
    return headerArray;  
  }  
  
  fileReset() {  
    this.csvReader.nativeElement.value = "";  
    this.records = [];  
  }  
}
