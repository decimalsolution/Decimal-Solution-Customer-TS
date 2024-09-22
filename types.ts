
export interface ContactInfo {
    _id: string;
    __v: number;
    facebook: string;
    googleMapLink: string;
    instagram: string;
    linkedIn: string;
    otherAddresses: string[];
    otherContacts: string[];
    otherEmails: string[];
    primaryAddress: string;
    primaryContact: string;
    primaryEmail: string;
    twitter: string;
    whatsapp: string;
    youtube: string;
    googleMapImage: string;
  }




  export interface Service {
    _id: string;
    blocked: boolean;
    coverImage: string;
    createdAt: string;
    description: string;
    homeImage: string;
    shortDescription: string;
    title: string;
    updatedAt: string;
    __v: number;
  }
  
  

  export interface Category {
    _id: string;
    blocked: boolean;
    coverImage: string;
    createdAt: string;
    description: string;
    homeImage: string;
    shortDescription: string;
    title: string;
    updatedAt: string;
    __v: number;
  }
  
  export interface Project {
    _id: string;
    blocked: boolean;
    category: Category; // Optional, since it's missing in some examples
    coverImage: string;
    createdAt: string;
    description: string;
    homeImage?: string; // Optional, since not all objects may have this field
    shortDescription: string;
    title: string;
    updatedAt: string;
    __v: number;
    link?: string; // Optional, only present in some objects
    projectStatus?: string; // Optional, only present in some objects
  }





  export interface Testimonials {
    _id: string;
    blocked: boolean;
    createdAt: string;
    designation: string;
    image: string;
    name: string;
    testimonial: string;
    updatedAt: string;
    __v: number;
  }



  export interface Article {
    _id: string;
    blocked: boolean;
    blogData: string;
    blogDescription: string;
    blogImage: string;
    blogTitle: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  