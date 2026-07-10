/**
 * DashboardLayout Component
 * Two-column layout with sidebar navigation and main content area
 */

import React from 'react';
import { classNames } from '../../../utils/base/classNames';
import { SIDEBAR_WIDTHS, SIDEBAR_POSITIONS, SIDEBAR_VARIANTS } from './dashboardLayoutConstants';
import Sidebar from './Sidebar';
import MainContent from './components/MainContent';

const DashboardLayout = ({
  children,
  // Sidebar props
  sidebarConfig,
  sidebarHeader,
  sidebarFooter,
  sidebarWidth = 'md',
  sidebarPosition = 'left',
  sidebarVariant = 'default',
  sidebarClassName = '',
  showSidebar = true,
  stickySidebar = true,
  // Content props
  contentClassName = '',
  contentPadding = true,
  className = '',
  ...props
}) => {
  const sidebarClasses = classNames(
    'h-screen overflow-y-auto',
    SIDEBAR_WIDTHS[sidebarWidth],
    SIDEBAR_POSITIONS[sidebarPosition],
    SIDEBAR_VARIANTS[sidebarVariant],
    stickySidebar && 'sticky top-0',
    sidebarClassName
  );

  const contentClasses = classNames(
    'flex-1 min-w-0 overflow-y-auto',
    contentClassName
  );

  return (
    <div className={classNames('flex min-h-screen flex-col md:flex-row', className)} {...props}>
      {/* Sidebar */}
      {showSidebar && (
        <aside className={sidebarClasses}>
          <Sidebar
            config={sidebarConfig}
            header={sidebarHeader}
            footer={sidebarFooter}
            className={sidebarClassName}
          />
        </aside>
      )}

      {/* Main Content */}
      <main className={contentClasses}>
        <MainContent padding={contentPadding} className={contentClassName}>
          {children}
        </MainContent>
      </main>
    </div>
  );
};

export default DashboardLayout;
