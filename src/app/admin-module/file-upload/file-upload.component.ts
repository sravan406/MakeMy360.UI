import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  name = 'Angular 4';
  images = [];

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      var data_source = "";
      var file_name = "";
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();
        file_name = event.target.files[i].name;
        reader.onload = (event: any) => {
          data_source = event.target.result;
          this.images.push({ data: data_source, fileName: file_name });
        }
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }

  drop(event: CdkDragDrop<{ title: string, poster: string }[]>) {
    moveItemInArray(this.images, event.previousIndex, event.currentIndex);
  }
}
