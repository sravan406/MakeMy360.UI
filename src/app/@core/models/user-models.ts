export interface CustomerDetails {
    companyName?: string;
    companyId?: number;
    projectName?: string;
    location?: string;
    ProjectImage?:string;
    videoFrame?:string;
    projectEndDate?:string;
    images?:FileToUpload[];
    paranomaPath?:string;
}

export interface ImagesDetails{
    path?:string;
    imageName?:string;
    projectId?:number;
    data?:string;
}

export interface FileToUpload {
    fileName: string ;
    fileSize: number;
    fileType: string;
    lastModifiedTime: number;
    lastModifiedDate: Date;
    fileAsBase64: string;
  }

  export interface Subscriber {
    Id?: number ;
    EmailId?: string;
    CreatedDate?: Date;
  }