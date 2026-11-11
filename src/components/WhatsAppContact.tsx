"use client";

import { FloatingWhatsApp } from "@digicroz/react-floating-whatsapp";
import { siteConfig } from "../../data/siteConfig";

export function WhatsAppContact() {
  if (!siteConfig.whatsapp.phoneNumber) return null;

  return (
    <FloatingWhatsApp
      phoneNumber={siteConfig.whatsapp.phoneNumber}
      accountName={siteConfig.whatsapp.accountName}
      statusMessage={siteConfig.whatsapp.statusMessage}
      chatMessage={siteConfig.whatsapp.chatMessage}
      openChatOnClick
      allowClickAway
      allowEsc
      notification={false}
      notificationSound={false}
      style={{ zIndex: 40 }}
    />
  );
}
