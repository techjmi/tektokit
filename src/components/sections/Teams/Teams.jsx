/**
 * Teams Component
 * Display team members in various layouts
 */

'use client';

import React from 'react';
import { classNames } from '../../../utils/base/classNames';
import { Avatar } from '../../ui/Avatar';
import { Card } from '../../ui/Card';
import { SocialLinks } from '../../utils/SocialLinks';

const Teams = ({
  children,
  layout = 'grid',
  columns = 3,
  className = '',
  config,
  ...props
}) => {
  const {
    title = 'Meet Our Team',
    description = 'The people behind our success',
    members = [],
    showSocial = true,
  } = config || {};

  // Composition mode
  if (children) {
    return (
      <section className={classNames('teams py-12 md:py-16', className)} {...props}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </section>
    );
  }

  // Column classes
  const columnClasses = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4',
  };

  // Layout variants
  const renderMemberCard = (member, index) => {
    const {
      name,
      role,
      image,
      bio,
      social = {},
    } = member;

    if (layout === 'minimal') {
      return (
        <div key={index} className="text-center">
          <Avatar
            src={image}
            alt={name}
            size="xl"
            className="mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      );
    }

    if (layout === 'card') {
      return (
        <Card
          key={index}
          padding="lg"
          // shadow="sm"
          className="text-center hover:shadow-lg transition-shadow border border-border rounded-xl"
        >
          <Avatar
            src={image}
            alt={name}
            size="2xl"
            className="mx-auto mb-4"
          />
          <h3 className="text-xl font-bold mb-1">{name}</h3>
          <p className="text-sm text-primary font-medium mb-3">{role}</p>
          {bio && (
            <p className="text-sm text-muted-foreground mb-4">{bio}</p>
          )}
          {showSocial && social && Object.keys(social).length > 0 && (
            <div className="flex items-center justify-center">
              <SocialLinks
                config={{
                  links: Object.entries(social).map(([platform, url]) => ({
                    platform,
                    url
                  }))
                }}
                size="sm"
                variant="simple"
              />
            </div>
          )}
        </Card>
      );
    }

    // Default grid layout
    return (
      <div key={index} className="text-center group">
        <Avatar
          src={image}
          alt={name}
          size="2xl"
          className="mx-auto mb-4 ring-4 ring-transparent group-hover:ring-primary/20 transition-all"
        />
        <h3 className="text-lg font-semibold mb-1">{name}</h3>
        <p className="text-sm text-primary font-medium">{role}</p>
        {bio && (
          <p className="text-sm text-muted-foreground mt-2">{bio}</p>
        )}
      </div>
    );
  };

  return (
    <section className={classNames('teams py-12 md:py-16', className)} {...props}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Members Grid */}
        <div
          className={classNames(
            'grid gap-8 md:gap-10',
            columnClasses[columns] || columnClasses[3]
          )}
        >
          {members.map((member, index) => renderMemberCard(member, index))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
