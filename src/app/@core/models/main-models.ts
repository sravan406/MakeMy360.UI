export interface ContactDetails {
    name: string;
    emailId: string;
    mobileNumber: number;
    message: string;
}
export interface DialogData {
    animal: string;
    name: string;
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
    BusinessProfile?: string,
    TimePeriod?: string,
    Name?: string,
    EmailId?: string,
    Phone?: number,
    Country?: number,
    Description?: string,
    CheckIn?: boolean
}
