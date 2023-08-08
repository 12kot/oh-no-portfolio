export interface projectType {
  image: string[];
  name: string;
  description: string;
  tech: string[];
  links: linkType[];
}

export interface linkType {
  desc: string;
  link: string;
  image: string;
}
