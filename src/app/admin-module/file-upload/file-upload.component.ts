import { Component, EventEmitter, Input, OnInit, Output, ElementRef } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { fileUploadData, companyNamesList, ImagesDetails, FileToUpload } from 'src/app/@core/models/admin-models';
import { Router } from '@angular/router';
import { baseService } from 'src/app/@core/data/base-service.service';
import { UrlConstants } from 'src/app/@core/service-urls.constant';

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  name = 'Angular 4';
  //public data: fileUploadData;
  public images: FileToUpload[] = [];
  public files:FileList;
  public
  
  //public companyNamesList: companyNamesList[];
  @Output() imagesDetails = new EventEmitter();

  constructor(private service: baseService,private el: ElementRef) { }

   onSelectFile(event) {
   
    
    

    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      var data_source = "";
      var file_name = "";
      for (let i = 0; i < filesAmount; i++) {
        var file=new FileToUpload();
        var reader = new FileReader();
        file_name = event.target.files[i].name;
        file.fileName=event.target.files[i].name;
        file.fileSize=event.target.files[i].fileSize;
        file.fileType = event.target.files[i].type;
        file.lastModifiedTime = event.target.files[i].lastModified;
        file.lastModifiedDate = event.target.files[i].lastModifiedDate;
        reader.onload = (event: any) => {
          
          file.data = event.target.result;
          file.fileAsBase64=event.target.result;
          this.images.push(file);
        }
        reader.readAsDataURL(event.target.files[i]);
      }
    
    }
  }

  drop(event: CdkDragDrop<{ title: string, poster: string }[]>) {
    moveItemInArray(this.images, event.previousIndex, event.currentIndex);
  }

  upload(){
    this.imagesDetails.emit(this.images);
    // this.service.post('http://localhost:64657/Api/FileUpload', this.images).subscribe(resp=>{
    //   console.log(resp);
    // });
  }
}
