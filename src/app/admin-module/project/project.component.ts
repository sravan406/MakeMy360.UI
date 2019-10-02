import { Component, OnInit, NgZone } from '@angular/core';
import { baseService } from '../../@core/data/base-service.service';
import { ProjectDetails, CompanyDetails, FileToUpload } from '../../@core/models/admin-models';
//import { Constants } from '../../../Constants';
import { UrlConstants } from '../../@core/service-urls.constant';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

    projectDetails: ProjectDetails = {};
    cols: any[];
    projectDetailsList: ProjectDetails[] = [];
    hideProjectDetails: boolean = true;
    showFilter: boolean = false;
    showSavebtn: boolean = false;
    companyNamesList: any[] = [];
    projectTypeList: any[] = [];
    imagedata: FileToUpload[] = [];
    address: Object;
    establishmentAddress: Object;
  
    formattedAddress: string;
    formattedEstablishmentAddress: string;
  
    phone: string;

    constructor(private service: baseService, public zone: NgZone) {
        this.getAllCompanyDetails();
        this.getAllProjectDetails();
    }

    ngOnInit() {


        this.cols = [
            { header: 'Company Name', field: 'companyName' },
            { header: 'Project Name', field: 'projectName' },
            { header: 'Location', field: 'location' }
        ];

        this.projectDetailsList = [{ companyName: "icici", projectName: "Ecolab", location: "Pune" }, { companyName: "ggk", projectName: "Ktc", location: "Hyderabad" },
        { companyName: "infosys", projectName: "State project", location: "Bangalore" }, { companyName: "value labs", projectName: "Krishnapatnam", location: "Chennai" },
        { companyName: "capgemini", projectName: "Water Board", location: "Hyderabad" }]



    }

    getAllCompanyDetails() {
        this.service.get(UrlConstants.getCompanyDetails).subscribe((resp: any[]) => {
            for (let i = 0; i <= resp.length; i++) {
                this.companyNamesList.push({ label: resp[i].CompanyName, value: resp[i].CompanyId });
            }
        });
    }

    getAllProjectDetails() {
        this.service.get(UrlConstants.projectType).subscribe((resp: any[]) => {
            resp.forEach(element => {
                this.projectTypeList.push({ label: element.ProjectType, value: element.ProjectTypeId });
            });
        });
    }

    addProject() {
        this.projectDetails = {};
        this.hideProjectDetails = false;
    }

    saveProject() {
        this.projectDetails.images = this.imagedata;
        this.service.uploadFile(UrlConstants.projectDetails, this.projectDetails);
        this.hideProjectDetails = true;
    }

    updateProject() { }

    clickOnEdit(data) {
        this.projectDetails = data;
    }

    clickOnDelete() { }

    imagesDetailsUpdated(data) {
        this.imagedata = data;

    }

    getAddress(place: object) {
        this.address = place['formatted_address'];
        this.phone = this.getPhone(place);
        this.formattedAddress = place['formatted_address'];
        this.zone.run(() => this.formattedAddress = place['formatted_address']);
      }
    
      getEstablishmentAddress(place: object) {
        this.establishmentAddress = place['formatted_address'];
        this.phone = this.getPhone(place);
        this.formattedEstablishmentAddress = place['formatted_address'];
        this.zone.run(() => {
          this.formattedEstablishmentAddress = place['formatted_address'];
          this.phone = place['formatted_phone_number'];
        });
      }
    
      getAddrComponent(place, componentTemplate) {
        let result;
    
        for (let i = 0; i < place.address_components.length; i++) {
          const addressType = place.address_components[i].types[0];
          if (componentTemplate[addressType]) {
            result = place.address_components[i][componentTemplate[addressType]];
            return result;
          }
        }
        return;
      }
    
      getStreetNumber(place) {
        const COMPONENT_TEMPLATE = { street_number: 'short_name' },
          streetNumber = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return streetNumber;
      }
    
      getStreet(place) {
        const COMPONENT_TEMPLATE = { route: 'long_name' },
          street = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return street;
      }
    
      getCity(place) {
        const COMPONENT_TEMPLATE = { locality: 'long_name' },
          city = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return city;
      }
    
      getState(place) {
        const COMPONENT_TEMPLATE = { administrative_area_level_1: 'short_name' },
          state = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return state;
      }
    
      getDistrict(place) {
        const COMPONENT_TEMPLATE = { administrative_area_level_2: 'short_name' },
          state = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return state;
      }
    
      getCountryShort(place) {
        const COMPONENT_TEMPLATE = { country: 'short_name' },
          countryShort = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return countryShort;
      }
    
      getCountry(place) {
        const COMPONENT_TEMPLATE = { country: 'long_name' },
          country = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return country;
      }
    
      getPostCode(place) {
        const COMPONENT_TEMPLATE = { postal_code: 'long_name' },
          postCode = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return postCode;
      }
    
      getPhone(place) {
        const COMPONENT_TEMPLATE = { formatted_phone_number: 'formatted_phone_number' },
          phone = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return phone;
      }
}
