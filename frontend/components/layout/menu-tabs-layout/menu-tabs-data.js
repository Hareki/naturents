import {
  CategoryId,
  CategoryName
} from '../../../../helpers/category-helper';

export const TAB_LINK_DATA = [
  {
    href: `/menu/${CategoryId.appetizers}`,
    title: CategoryName.appetizers
  },
  {
    href: `/menu/${CategoryId['main-dishes']}`,
    title: CategoryName['main-dishes']
  },
  {
    href: `/menu/${CategoryId.desserts}`,
    title: CategoryName.desserts
  },
  {
    href: `/menu/${CategoryId.drinks}`,
    title: CategoryName.drinks
  }
];

//! FIX SOON
export const breadcrumbSectionData = [
  {
    content: 'Trang chủ',
    href: '/',
    selected: false
  },
  {
    content: 'Thực đơn',
    href: '#',
    selected: false
  },
  {
    content: 'Khai vị',
    href: '#',
    selected: true
  }
];
