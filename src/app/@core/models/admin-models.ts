export interface fileUploadData {
    projectName: string;
    images: any[];
}

export interface companyNamesList {
    companyId: number;
    CompanyName: string;
}

export interface CompanyDetails
{
    CompanyName?:string;
    CompanyId?:number;
    companyLogo?:string;
}

export interface ProjectDetails {
    CompanyName?: string;
    CompanyId?: number;
    ProjectId?:number;
    ProjectName?: string;
    Location?: string;
    ProjectImage?:string;
    videoFrame?:string;
    ProjectEndDate?:Date;
    images?:FileToUpload[];
    paranomaPath?:string;
    MobileNumber?:number;
    Website?:string;
    EmailId?:string;
    Description?:string;
    GoogleMap?:string;
    projectHighlights?:ProjectHighlights[];    
}

export interface ImagesDetails{
    path?:string;
    imageName?:string;
    projectId?:number;
    data?:string;
}


export class FileToUpload {
    fileName?: string ;
    fileSize?: number;
    fileType?: string;
    lastModifiedTime?: number;
    lastModifiedDate?: Date;
    fileAsBase64?: string;
    data?:string;
    ChangedFileName?:string;
  }

  export class ProjectHighlights
  {
    ProjectHighlightsId?:number;
    ProjectId?:number;
    Points?:string;
    IsDelete?:string;
  }