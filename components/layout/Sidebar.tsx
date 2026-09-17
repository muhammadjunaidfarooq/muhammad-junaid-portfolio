"use client";

import Image from 'next/image';
import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { SocialLinks } from '../shared/SocialLinks';
import { FaChevronDown } from "react-icons/fa";
import { useLayout } from '@/app/contexts/LayoutContext';

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { isMobile, isTablet, isLaptop, isDesktop } = useLayout();

  const getImageSize = () => {
    if (isDesktop) return 150;
    if (isLaptop || isTablet) return 120;
    return 80;
  };

  const imageSize = getImageSize();

  const renderButtonContent = () => {
    if (isTablet || isLaptop) {
      return <span>Show Contacts</span>;
    }
    if (isMobile) {
      return <FaChevronDown />;
    }
    return null;
  };

  const shouldShowButton = !isDesktop;

  return (
    <aside className={`sidebar ${isExpanded ? 'active' : ''}`} data-sidebar>
      <div className="sidebar-info">
      <figure className="avatar-box">
          <Image
            src="/images/profile_pic.jpg"
            alt="Muhammad Junaid Farooq"
            priority
            quality={100}
            width={imageSize}
            height={imageSize}
            className="avatar-image object-cover object-center"
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Muhammad Junaid Farooq">
            Muhammad Junaid Farooq
          </h1>
          <p className="title">AI/ML Engineer | Software Engineering Graduate</p>
        </div>

        {shouldShowButton && (
          <button 
            className="info_more-btn" 
            onClick={() => setIsExpanded(!isExpanded)}
            data-sidebar-btn
          >
            {renderButtonContent()}
          </button>
        )}
      </div>

      <div className="sidebar-info_more">
        <div className="separator" />

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <Mail size={16} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:junaidfarooq.pk@gmail.com" className="contact-link">
                junaidfarooq.pk@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <Phone size={16} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+923001792770" className="contact-link">
                +92 300 1792770
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <MapPin size={16} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Lahore, Punjab, Pakistan</address>
            </div>
          </li>
        </ul>

        <div className="separator" />
        <SocialLinks />
      </div>
    </aside>
  );
}