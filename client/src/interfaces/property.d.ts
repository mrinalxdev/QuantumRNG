import { BaseKey } from "@refinedev/core";

export interface FormFieldProp {
  title: string;
  labelName: string;
}

export interface FormValues {
  title: string;
  description: string;
  propertyType: string;
  location: string;
  price: number | undefined;
}
export interface PropertyCardsProps {
  id: BaseKey | undefined;
  title: string;
  location: string;
  price: string;
  photo: string;
}
