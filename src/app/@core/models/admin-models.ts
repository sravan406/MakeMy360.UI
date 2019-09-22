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
}