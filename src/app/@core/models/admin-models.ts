export interface fileUploadData {
    projectName: string;
    images: any[];
}

export interface companyNamesList {
    companyId: number;
    companyName: string;
}

export interface CompanyDetails {
    companyName?:string;
    companyId?:number;
    establishedYear?:number;
    isActive?:boolean;
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