/**
 * Sidebar Component
 * Navigation sidebar with groups, items, and optional header/footer
 * Supports both data-driven (config) and composition (children) modes
 */

import React from 'react';
import { classNames } from '../../../utils/base/classNames';
import SidebarItem from './components/SidebarItem';
import SidebarGroup from './components/SidebarGroup';

const Sidebar = ({
  header,
  footer,
  children,
  config,
  className = '',
  ...props
}) => {
  // Data-driven mode: render from config
  if (config && !children) {
    const { groups = [], items = [] } = config;

    return (
      <div className={classNames('flex flex-col h-full', className)} {...props}>
        {/* Header */}
        {header && (
          <div className="p-4 border-b border-border">
            {header}
          </div>
        )}

        {/* Navigation */}
        <div className="flex-1 py-4 overflow-y-auto">
          {/* Render groups */}
          {groups.map((group, idx) => (
            <SidebarGroup key={idx} title={group.title}>
              {group.items.map((item, itemIdx) => (
                <SidebarItem
                  key={itemIdx}
                  label={item.label}
                  icon={item.icon}
                  href={item.href}
                  isActive={item.isActive}
                  onClick={item.onClick}
                  showIcon={item.showIcon}
                />
              ))}
            </SidebarGroup>
          ))}

          {/* Render standalone items (no group) */}
          {items.length > 0 && (
            <div className="space-y-1">
              {items.map((item, idx) => (
                <SidebarItem
                  key={idx}
                  label={item.label}
                  icon={item.icon}
                  href={item.href}
                  isActive={item.isActive}
                  onClick={item.onClick}
                  showIcon={item.showIcon}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {footer && (
          <div className="border-t border-border">
            {footer}
          </div>
        )}
      </div>
    );
  }

  // Composition mode: render children
  return (
    <div className={classNames('flex flex-col h-full', className)} {...props}>
      {/* Header */}
      {header && (
        <div className="border-b border-border">
          {header}
        </div>
      )}

      {/* Navigation */}
      <div className="flex-1 py-4 overflow-y-auto">
        {children}
      </div>

      {/* Footer */}
      {footer && (
        <div className="p-4 border-t border-border">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
