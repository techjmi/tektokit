/**
 * SidebarGroup Component
 * Groups navigation items with optional title
 */

import React from 'react';

const SidebarGroup = ({ title, children, ...props }) => {
  return (
    <div className="mb-6" {...props}>
      {title && (
        <h3 className="px-4 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          {title}
        </h3>
      )}
      <div className="space-y-1">
        {children}
      </div>
    </div>
  );
};

export default SidebarGroup;
