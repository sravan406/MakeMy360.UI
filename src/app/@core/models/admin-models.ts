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
    images?:ImagesDetails[];
}

export interface ImagesDetails{
    path?:string;
    imageName?:string;
    projectId?:number;
    data?:string;
}