export interface fileUploadData {
    projectName: string;
    images: any[];
}

export interface companyNamesList {
    companyId: number;
    companyName: string;
}

export interface CompanyDetails
{
    CompanyName?:string;
    CompanyId?:number;
   
}

export interface ProjectDetails {
    companyName?: string;
    companyId?: number;
    projectName?: string;
    location?: string;
    images?:FileToUpload[];
}

export interface ImagesDetails{
    path?:string;
    imageName?:string;
    projectId?:number;
    data?:string;
}


export class FileToUpload {
    fileName: string ;
    fileSize: number;
    fileType: string;
    lastModifiedTime: number;
    lastModifiedDate: Date;
    fileAsBase64: string;
    data?:string;
    ChangedFileName?:string;
  }