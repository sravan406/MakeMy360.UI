export interface ContactDetails {
    UserId?:number;
    Name?: string;
    EmailId?: string;
    PhoneNumber?: string;
    Message?: string;
    CreatedDate?: Date,
    UpdatedDate?: Date,
    IsContacted?: string;
    Comments?: string;
    UpdateUserId?: string;
}

export interface Users {
    UserId?: number,
    UserName?: string,
    Pwd?: string,
    EmailId?: string,
    PhoneNumber?: number,
    UserType?: number
}

export interface RequestQuoteDetails {
    RequestQuoteId?: number,
    BusinessProfileId?: number,
    TimePeriodId?: number,
    Name?: string,
    EmailId?: string,
    PhoneNumber?: string,
    CountryId?: number,
    Description?: string,
    CheckInForOffers?: boolean,
    CreatedDate?: string,
    UpdatedDate?: string,
    CreatedUserId?: number,
    UpdateUserId?: number,
    IsContacted?: string,
    Comments?: string,
    BusinessProfile?: string
}

export interface BookNowDetails {
    ProjectId?:number,
    Name?: string,
    EmailId?: string,
    PhoneNumber?: number,
    Message?: string,
    CreatedDate?:Date,
    UpdatedDate?:Date,
    CreatedUserId?:number,
    UpdateUserId?:number,
    IsContacted?:string,
    Comments?:string
}


