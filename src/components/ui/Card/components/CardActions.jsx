/**
 * CardActions - Helper for rendering action buttons
 */

import React from'react';
import { classNames } from'../../../../utils/base/classNames';
import Button from'../../Button/Button';

const CardActions = ({ actions = [], className ='', ...props }) => {
  if (!actions || !Array.isArray(actions) || actions.length === 0) return null;

  return (
    <div className={classNames('flex gap-2', className)} {...props}>
      {actions.map((action, index) => {
        const actionLabel = typeof action ==='string' ? action : action.label;
        const actionVariant = typeof action ==='object' ? action.variant :'solid';
        const actionColor = typeof action ==='object' ? action.color :'primary';
        const actionSize = typeof action ==='object' ? action.size :'sm';
        const actionOnClick = typeof action ==='object' ? action.onClick : null;

        // Analytics props (optional)
        const trackClick = typeof action ==='object' ? action.trackClick : false;
        const trackName = typeof action ==='object' ? action.trackName : null;
        const trackLocation = typeof action ==='object' ? action.trackLocation : null;
        const trackData = typeof action ==='object' ? action.trackData : {};

        return (
          <Button
            key={index}
            variant={actionVariant}
            color={actionColor}
            size={actionSize}
            onClick={actionOnClick}
            trackClick={trackClick}
            trackName={trackName}
            trackLocation={trackLocation}
            trackData={trackData}
          >
            {actionLabel}
          </Button>
        );
      })}
    </div>
  );
};

export default CardActions;
