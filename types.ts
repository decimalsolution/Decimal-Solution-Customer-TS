


export interface Metadata {
  title: string;
  description: string;
  openGraph?: {
    title?: string;
    description?: string;
    url?: string;
    siteName?: string;
    images?: Array<{
      url: string;
      width?: number;
      height?: number;
    }>;
    type?: string;
    locale?: string;
  };
}




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


  export interface ProjectGroup {
    category: string;
    projects: Project[];
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
    slug?: string
  }
  


  export interface Product {
    blocked: boolean;
    title: string;
    link: string;
    description: string;
    category: Category;
    coverImage: string;
    createdAt: string;
    updatedAt: string;
  }




  export interface JobCategory {
    _id: string;
    blocked: boolean;
    title: string;
    description: string;
    shortDescription: string;
    homeImage: string;
    coverImage: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  
  export interface Job {
    _id: string;
    blocked: boolean;
    title: string;
    type: string;
    vacancies: number;
    description: string;
    category: JobCategory;
    location: string;
    jobLevel: string;
    minimumQualifications: string;
    minimumExperience: string;
    jobApplicationDeadline: string;
    jobRequirements: string;
    jobResponsibilities: string;
    minimumJobSalary: number;
    maximumJobSalary: number;
    jobImage: string | null; // Can be null as in the data
    otherBenefits: string;
    jobSkills: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  



  export interface TeamMember {
    _id: string;
    blocked: boolean;
    teamMemberName: string;
    teamMemberTitle: string;
    teamMemberFacebookLink: string;
    teamMemberTwitterLink: string;
    teamMemberLinkedInLink: string;
    CNIC: string;
    githubLink: string;
    bankName: string;
    bankBranch: string;
    bankAccountNumber: string;
    IBAN: string;
    IDCardFront: string;
    IDCardBack: string;
    teamMemberEmail: string;
    officialEmail: string;
    teamMemberImage: string;
    teamMemberPhone: string;
    officialPhone: string;
    memberPriority: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
    left: boolean;
  }
  


 

