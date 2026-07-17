/**
 * Card Component
 * See CARD_USAGE.md for detailed usage examples
 */

import React from"react";
import {
  CARD_RADIUS,
  CARD_SHADOW,
  CARD_PADDING,
  CARD_BORDER,
} from"./cardConstants";
import { classNames } from"../../../utils/base/classNames";
import CardImage from"./components/CardImage";
import CardHeader from"./components/CardHeader";
import CardBody from"./components/CardBody";

const Card = ({
  children,
  className ="",
  radius ="md",
  shadow ="none",
  padding ="sm",
  border ="default",
  hoverable = false,
  clickable = false,
  onClick,
  as: Component ="div",
  config,
  ...cardProps
}) => {
  const {
    image,
    header,
    body,
    footer,
  } = config || {};
  const isInteractive = hoverable || clickable;

  if (children) {
    return (
      <Component
        className={classNames(
         "relative",
          CARD_RADIUS[radius],
          CARD_SHADOW[shadow],
          CARD_PADDING[padding],
          CARD_BORDER[border],
          isInteractive &&"transition-shadow cursor-pointer hover:scale-[1.02]",
          className
        )}
        onClick={clickable ? onClick : undefined}
        {...cardProps}
      >
        {children}
      </Component>
    );
  }

  const renderImage = () => {
    if (!image) return null;
    if (React.isValidElement(image)) return image;
    if (typeof image === 'object') {
      return <CardImage {...image} />;
    }
    return null;
  };

  const renderHeader = () => {
    if (!header) return null;
    if (React.isValidElement(header)) return header;
    if (typeof header === 'object') {
      return <CardHeader {...header} />;
    }
    return <CardHeader title={header} />;
  };

  const renderBody = () => {
    if (!body) return null;
    if (React.isValidElement(body)) return body;
    if (typeof body === 'object') {
      return <CardBody {...body} />;
    }
    return <CardBody description={body} />;
  };

  const renderFooter = () => {
    if (!footer) return null;
    if (React.isValidElement(footer)) return footer;
    return <div className="mt-auto">{footer}</div>;
  };

  return (
    <Component
      className={classNames(
       "relative overflow-hidden",
        CARD_RADIUS[radius],
        CARD_SHADOW[shadow],
        CARD_BORDER[border],
        isInteractive &&"transition-all cursor-pointer hover:shadow-lg hover:scale-[1.02]",
        className
      )}
      onClick={clickable ? onClick : undefined}
      {...cardProps}
    >
      {renderImage()}
      <div className={classNames(CARD_PADDING[padding],"flex flex-col gap-3")}>
        {renderHeader()}
        {renderBody()}
        {renderFooter()}
      </div>
    </Component>
  );
};

export default Card;
