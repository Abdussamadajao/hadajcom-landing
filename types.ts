// types.ts
import { IconType } from "react-icons";

export interface Subsection {
  id: string;
  title: string;
  content: string;
}

export interface Section {
  id: string;
  title: string;
  content: string[];
  //   image: string;
  Icon?: IconType; // Add icon type
  subsections?: Subsection[];
}

export interface Topic {
  id: string;
  title: string;
  image: string;
  Icon: IconType; // Add icon type
  sections: Section[];
}
