"use client"

import { useState } from "react"
import { Share2, Facebook, Twitter, Instagram, MessageCircle } from "lucide-react"

export function SocialShare() {
  const [copied, setCopied] = useState(false)

  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const shareText = "Check out Ashaki Gardens - Ruiru's Ultimate Garden Experience!"

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy link:', err)
    }
  }

  const shareLinks = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: `https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`,
      color: "hover:text-green-400"
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: "hover:text-blue-400"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`,
      color: "hover:text-sky-400"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: `https://www.instagram.com/`,
      color: "hover:text-pink-400"
    }
  ]

  return (
    <div className="fixed bottom-24 left-4 z-30 sm:bottom-8 sm:left-8">
      <div className="glass rounded-lg p-3 shadow-lg">
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyLink}
            className="flex items-center gap-2 rounded-md px-3 py-2 text-xs font-medium text-beige transition-colors hover:text-gold focus-modern"
            title="Copy link"
          >
            <Share2 size={16} />
            <span className="hidden sm:inline">
              {copied ? 'Copied!' : 'Share'}
            </span>
          </button>
          
          <div className="flex gap-1">
            {shareLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-8 h-8 rounded-md text-beige transition-colors ${social.color} focus-modern`}
                title={`Share on ${social.name}`}
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
