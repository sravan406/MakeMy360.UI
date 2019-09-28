import { Component, EventEmitter, Input, OnInit, Output, ElementRef, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray, CdkDropList, CdkDropListGroup, CdkDropListContainer, CdkDrag } from '@angular/cdk/drag-drop';
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
  public images: FileToUpload[] = [];
  public files: FileList;
  public remark = '';
  @ViewChild(CdkDropListGroup, { static: false }) listGroup: CdkDropListGroup<CdkDropList>;
  @ViewChild(CdkDropList, { static: false }) placeholder: CdkDropList;
  @Output() imagesDetails = new EventEmitter();
  public target: CdkDropList;
  public targetIndex: number;
  public source: CdkDropListContainer;
  public sourceIndex: number;

  constructor(private service: baseService, private el: ElementRef) {
    this.target = null;
    this.source = null;
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();
        var fileName = event.target.files[i].name;
        reader.onload = (event: any) => {
          this.images.push({
            data: event.target.result, fileName: fileName, fileAsBase64: event.target.result
          });
        }
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }

  ngAfterViewInit() {
    let phElement = this.placeholder.element.nativeElement;

    phElement.style.display = 'none';
    phElement.parentNode.removeChild(phElement);
  }
  // drop(event: CdkDragDrop<{ title: string, poster: string }[]>) {
  //   moveItemInArray(this.images, event.previousIndex, event.currentIndex);
  // }


  drop() {
    if (!this.target)
      return;

    let phElement = this.placeholder.element.nativeElement;
    let parent = phElement.parentNode;

    phElement.style.display = 'none';

    parent.removeChild(phElement);
    parent.appendChild(phElement);
    parent.insertBefore(this.source.element.nativeElement, parent.children[this.sourceIndex]);

    this.target = null;
    this.source = null;

    if (this.sourceIndex != this.targetIndex)
      moveItemInArray(this.images, this.sourceIndex, this.targetIndex);
  }

  enter = (drag: CdkDrag, drop: CdkDropList) => {
    if (drop == this.placeholder)
      return true;

    let phElement = this.placeholder.element.nativeElement;
    let dropElement = drop.element.nativeElement;

    let dragIndex = this.__indexOf(dropElement.parentNode.children, drag.dropContainer.element.nativeElement);
    let dropIndex = this.__indexOf(dropElement.parentNode.children, dropElement);

    if (!this.source) {
      this.sourceIndex = dragIndex;
      this.source = drag.dropContainer;

      let sourceElement = this.source.element.nativeElement;
      phElement.style.width = sourceElement.clientWidth + 'px';
      phElement.style.height = sourceElement.clientHeight + 'px';

      sourceElement.parentNode.removeChild(sourceElement);
    }

    this.targetIndex = dropIndex;
    this.target = drop;

    phElement.style.display = '';
    dropElement.parentNode.insertBefore(phElement, (dragIndex < dropIndex)
      ? dropElement.nextSibling : dropElement);

    this.source.start();
    this.placeholder.enter(drag, drag.element.nativeElement.offsetLeft, drag.element.nativeElement.offsetTop);

    return false;
  }

  upload() {
    this.imagesDetails.emit(this.images);
    alert("Images are uploaded Successfully.")
  };

  __indexOf(collection, node) {
    return Array.prototype.indexOf.call(collection, node);
  };
}



