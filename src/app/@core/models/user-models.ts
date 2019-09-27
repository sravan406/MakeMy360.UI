export interface CustomerDetails {
    companyName?: string;
    companyId?: number;
    projectName?: string;
    location?: string;
    images?:ImagesDetails[];
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