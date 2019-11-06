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
    CompanyLogo?:string;
}

export interface ProjectDetails {
    CompanyName?: string;
    CompanyId?: number;
    ProjectId?:number;
    ProjectName?: string;
    Location?: string;
    ProjectLocation?:string;
    ProjectImage?:string;
    ProtfolioImage?:string;
    VideoFrame?:string;
    ProjectEndDate?:string;
    images?:FileToUpload[];
    ParanomaPath?:string;
    MobileNumber?:number;
    Website?:string;
    EmailId?:string;
    Description?:string;
    GoogleMap?:string;
    SearchId?:string;
    projectHighlights?:ProjectHighlights[];    
    ProjectTypeId?:number;
    NoOfImages?:number;
    TotalAmount?:number;
    InvoicePath?:string;
    BriefDescription?:string;
    showTextBlock?:boolean;
}

export interface ProjectType {
    ProjectType: string;
    ProjectTypeId: number;
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

  export interface InvoiceDetails{
      CompanyName?: string;
      CompanyAddress?: string;
      CompanyWebsite?: string;
      CompanyEmailId?: String;
      CompanyContactNumber?: string;
      invTableDetails?: InvoiceTable[];
  }

  export interface InvoiceTable{
      SNo?: number;
      Description?: string;
      Quantity?: number;
      Amount?: number;
  }