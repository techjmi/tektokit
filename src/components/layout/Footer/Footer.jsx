/**
 * Footer - Main footer component with config-based approach
 * Pass a config object instead of individual props
 */

'use client';

import Logo from '../../utils/Logo/Logo';
import SocialLinks from '../../utils/SocialLinks/SocialLinks';
import { classNames } from '../../../utils/base/classNames';
import { getCurrentYear } from '../../../utils/base/format';

const Footer = ({ config, className ='', children }) => {
  if (!config) return null;
  const currentYear = getCurrentYear();
  const {
    brand,
    description,
    sections = [],
    socials = [],
    contact,
    legal = [],
    copyright,
    madeWith,
  } = config;

  return (
    <footer className={classNames('border-t bg-muted/30', className)}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          {brand && (
            <div className="space-y-4">
              <Logo
                layout="vertical"
                size="md"
                showImage={!!brand.logoUrl}
                showText={!brand.logoUrl || !!brand.name}
                config={{
                  src: brand.logoUrl,
                  name: brand.name,
                  tagline: brand.tagline && !description ? brand.tagline : null,
                  href: brand.href || '/',
                }}
              />

              {description && (
                <p className="text-sm opacity-80">
                  {description}
                </p>
              )}
            </div>
          )}

          {sections && sections.length > 0 && sections.map((section) => (
            section?.title && section?.links?.length > 0 && (
              <div key={section.title} className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider">{section.title}</h3>
                <nav className="flex flex-col gap-2.5 text-sm">
                  {section.links.map((link) => (
                    link?.href && link?.label && (
                      <a
                        key={link.href}
                        href={link.href}
                        className="opacity-70 hover:opacity-100 hover:translate-x-1 transition-all inline-block"
                      >
                        {link.label}
                      </a>
                    )
                  ))}
                </nav>
              </div>
            )
          ))}

          {contact && (
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider">{contact.title ||'Contact'}</h3>
              <div className="flex flex-col gap-2.5 text-sm">
                {contact.email && (
                  <a href={`mailto:${contact.email}`} className="opacity-70 hover:opacity-100 hover:translate-x-1 transition-all inline-block">
                    {contact.email}
                  </a>
                )}
                {contact.phone && (
                  <a href={`tel:${contact.phone}`} className="opacity-70 hover:opacity-100 hover:translate-x-1 transition-all inline-block">
                    {contact.phone}
                  </a>
                )}
                {contact.address && (
                  <address className="not-italic opacity-70">
                    {contact.address}
                  </address>
                )}
              </div>
            </div>
          )}

          {socials && socials.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider">Follow Us</h3>
              <SocialLinks
                config={{ links: socials }}
                size="md"
                variant="outlined"
              />
            </div>
          )}
        </div>

        {children}
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm opacity-70">
          <div>
            <span>
              &copy; {currentYear} {copyright?.text || (brand && brand.name && `${brand.name}. All rights reserved.`)}
            </span>
          </div>

          {madeWith && (
            <div className="flex items-center gap-1">
              <span>{madeWith.text}</span>
              {madeWith.icon && <span>{madeWith.icon}</span>}
              {madeWith.location && <span>{madeWith.location}</span>}
            </div>
          )}

          {legal && legal.length > 0 && (
            <div className="flex items-center gap-4 md:gap-6">
              {legal.map((item) => (
                item?.href && item?.label && (
                  <a
                    key={item.href}
                    href={item.href}
                    className="hover:opacity-100 hover:underline transition-all"
                  >
                    {item.label}
                  </a>
                )
              ))}
            </div>
          )}
        </div>
    </footer>
  );
};

export default Footer;
