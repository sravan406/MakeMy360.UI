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