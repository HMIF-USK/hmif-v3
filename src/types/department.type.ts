export interface IDepartment {
  departmentName: string;
  shortDesc: string;
  slug: string;
  division?: string[];
  work: {
    workName: string;
    desc: string;
  }[];
  photos: {
    desktop: {
      title: string;
      imgUrl: string;
    }[];
    mobile: {
      title: string;
      imgUrl: string;
    }[];
  };
}

// export type DepartmentList = Pick<IDepartment, 'departmentName' | 'shortDesc' | 'slug'>;
