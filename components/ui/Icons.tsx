import React from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  Search01Icon,
  DashboardSquare01Icon,
  File01Icon,
  Calendar01Icon,
  UserGroupIcon,
  ChartIcon,
  Building01Icon,
  MoreVerticalIcon,
  ArrowUpDownIcon as ChevronDownIcon,
  Facebook01Icon,
  TwitterIcon,
  InstagramIcon,
  ChromeIcon,
  SidebarLeftIcon,
  ZapIcon,
  ArrowUp01Icon,
  ArrowDown01Icon,
  ArrowUpDownIcon,
  ArrowDown02Icon,
  ArrowUp02Icon
  } from '@hugeicons/core-free-icons';


const createIconWrapper = (IconComponent: any) => {
  return React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
    ({ className, width, height, size, ...props }, ref) => {
      
      let iconSize = size;
      if (!iconSize && className) {
        const widthMatch = className.match(/w-(\d+)/);
        const heightMatch = className.match(/h-(\d+)/);
        if (widthMatch) {
          iconSize = parseInt(widthMatch[1]) * 4; 
        } else if (heightMatch) {
          iconSize = parseInt(heightMatch[1]) * 4;
        }
      }
      if (!iconSize && width) iconSize = typeof width === 'number' ? width : parseInt(width);
      if (!iconSize && height) iconSize = typeof height === 'number' ? height : parseInt(height);
      if (!iconSize) iconSize = 24; 

      return (
        <HugeiconsIcon
          ref={ref}
          icon={IconComponent}
          size={iconSize}
          className={className}
          {...props}
        />
      );
    }
  );
};

export const Search = createIconWrapper(Search01Icon);
export const LayoutDashboard = createIconWrapper(DashboardSquare01Icon);
export const FileText = createIconWrapper(File01Icon);
export const Calendar = createIconWrapper(Calendar01Icon);
export const Users = createIconWrapper(UserGroupIcon);
export const BarChart2 = createIconWrapper(ChartIcon);
export const Building2 = createIconWrapper(Building01Icon);
export const MoreVertical = createIconWrapper(MoreVerticalIcon);
export const ChevronDown = createIconWrapper(ChevronDownIcon);
export const Facebook = createIconWrapper(Facebook01Icon);
export const Twitter = createIconWrapper(TwitterIcon);
export const Instagram = createIconWrapper(InstagramIcon);
export const Chrome = createIconWrapper(ChromeIcon);
export const Zap = createIconWrapper(ZapIcon);
export const ArrowUp = createIconWrapper(ArrowUp01Icon);
export const ArrowDown = createIconWrapper(ArrowDown01Icon);
export const SidebarLeft = createIconWrapper(SidebarLeftIcon);
export const ArrowUpDown = createIconWrapper(ArrowUpDownIcon);
export const ArrowDown2 = createIconWrapper(ArrowDown02Icon);
export const ArrowUp2 = createIconWrapper(ArrowUp02Icon);
