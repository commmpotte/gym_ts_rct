export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "classes",
  ContactUs = "contacts",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
