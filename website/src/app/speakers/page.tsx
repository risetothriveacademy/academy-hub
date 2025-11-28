import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  Users,
  Building,
  Church,
  BookOpen,
  Mail,
  Phone,
  Calendar,
  Video,
  Mic,
  MessageSquare,
  GraduationCap,
  Heart,
  Shield,
  Lightbulb,
  Target,
  Sparkles,
  Download
} from "lucide-react";
import Link from "next/link";
import { ImageWithFallback } from "@/components/ImageWithFallback";

export default function SpeakingPage() {
  const speakingTopics = [
    {
      title: "Transforming Pain Into Power",
      description: "How God rebuilds identity, restores emotional stability, and revives purpose after trauma.",
      icon: Sparkles
    },
    {
      title: "The Unseen Battle: Spiritual Warfare & the Mind",
      description: "Why trauma creates open doors for fear, shame, insecurity, and destructive patterns — and how to close them.",
      icon: Shield
    },
    {
      title: "Breaking Trauma-Driven Cycles",
      description: "Understanding emotional triggers, subconscious patterns, and spiritual strongholds that shape behavior.",
      icon: Target
    },
    {
      title: "Healing for Leaders in Crisis",
      description: "Faith-based emotional recovery for business owners, professionals, ministry leaders, and corporate teams.",
      icon: GraduationCap
    },
    {
      title: "Trauma in the Workplace",
      description: "How emotional wounds affect performance, communication, conflict, productivity, and burnout — and how organizations can support healing.",
      icon: Building
    },
    {
      title: "Restoring Faith After Devastation",
      description: "Guiding individuals back to God after betrayal, loss, or deep emotional collapse.",
      icon: Heart
    }
  ];

  const whoTorahSpeaksTo = [
    { text: "Churches & Christian organizations", icon: Church },
    { text: "Women's ministries", icon: Users },
    { text: "Corporate teams & professional groups", icon: Building },
    { text: "Nonprofits & humanitarian organizations", icon: Heart },
    { text: "Mental health events", icon: Lightbulb },
    { text: "Leadership & entrepreneur conferences", icon: GraduationCap },
    { text: "Youth & young adult ministries", icon: Users },
    { text: "Personal development seminars", icon: Target }
  ];

  const formats = [
    { text: "Keynote speaking", icon: Mic },
    { text: "Breakout sessions", icon: MessageSquare },
    { text: "Workshops & trainings", icon: GraduationCap },
    { text: "Panels & interviews", icon: Users },
    { text: "Virtual & livestream events", icon: Video },
    { text: "Faith-based trauma recovery intensives", icon: Heart }
  ];

  const audienceOutcomes = [
    "Clarity about the spiritual side of trauma",
    "Breakthrough strategies for emotional stability",
    "Restored identity & hope",
    "Renewed relationship with God",
    "A deeper understanding of their internal battles",
    "Practical steps to rebuild their lives"
  ];

  const testimonials = [
    {
      quote: "Life-changing. Torah speaks with power, humility, and deep revelation.",
      author: "Conference Participant",
      role: ""
    },
    {
      quote: "Our entire team walked away with clarity, healing, and renewed purpose.",
      author: "Corporate Wellness Director",
      role: ""
    },
    {
      quote: "Her testimony restored my faith in God after years of pain.",
      author: "Church Attendee",
      role: ""
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <img src="/torah-logo.png" alt="Torah Mathews Logo" className="h-24 w-auto object-contain drop-shadow-lg" />
              <span className="text-2xl font-bold text-gray-900">Torah Mathews, MBA</span>
            </Link>
            <Link href="/">
              <Button variant="outline" className="border-[#0097B2] text-[#0097B2] hover:bg-[#0097B2] hover:text-white">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <Badge className="mb-6 bg-[#DB910F] text-white hover:bg-[#c5820e] text-base">
            Speaking Engagements — Torah Mathews, MBA
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transforming Pain Into Power
            <span className="text-[#DB910F] block mt-2">Speaking That Awakens Hope & Restores Lives</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#0097B2] mb-8 max-w-4xl mx-auto">
            Faith-centered trauma recovery teaching for conferences, churches, corporate teams, leadership events, and mental-health organizations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:hello@torahmathews.com">
              <Button size="lg" className="bg-[#DB910F] hover:bg-[#c5820e] text-white text-lg px-8 py-4">
                <Mail className="h-5 w-5 mr-2" />
                Invite Torah to Speak
              </Button>
            </a>
            <a href="mailto:hello@torahmathews.com?subject=Speaker Media Kit Request">
              <Button size="lg" variant="outline" className="border-[#0097B2] text-[#0097B2] hover:bg-[#0097B2] hover:text-white text-lg px-8 py-4">
                <Download className="h-5 w-5 mr-2" />
                Download Speaker Media Kit
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About Torah - Expanded */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Torah</h2>
              <p className="text-lg text-gray-600 mb-4">
                Torah Mathews, MBA is a <strong>Christian trauma-recovery educator</strong>, author of <em>Transforming Pain Into Power</em>, and founder of a faith-based movement bringing emotional and spiritual healing to individuals, families, and workplaces.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Her powerful testimony of overcoming betrayal, loss, emotional collapse, and financial devastation has reached thousands — helping people identify the unseen root causes behind trauma-driven thoughts, emotions, and behaviors.
              </p>
              <div className="bg-gradient-to-r from-amber-50 to-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-[#DB910F] mb-4">Torah's message blends:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-[#DB910F] mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Biblical insight</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-[#DB910F] mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Emotional resilience</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-[#DB910F] mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Trauma-informed teaching</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-[#DB910F] mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Spiritual discernment</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-[#DB910F] mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Real-world application for leaders, professionals, and communities</p>
                  </li>
                </ul>
              </div>
              <p className="text-lg text-gray-700 font-semibold mb-4">
                She speaks with compassion, authority, and a deep anointing for restoration.
              </p>
            </div>
            <div className="flex justify-center">
              <ImageWithFallback
                src="/torah-mathews-author.jpg"
                fallbackSrc="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&auto=format"
                alt="Torah Mathews - Speaker"
                className="rounded-lg shadow-2xl w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Signature Speaking Topics */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Signature Speaking Topics</h2>
            <p className="text-xl text-gray-600">
              Torah delivers powerful, life-changing messages tailored to your audience
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {speakingTopics.map((topic, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardHeader>
                  <div className="mb-3">
                    <div className="p-3 bg-gradient-to-br from-[#DB910F] to-[#0097B2] rounded-lg inline-block">
                      <topic.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight">{topic.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{topic.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who Torah Speaks To */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Who Torah Speaks To</h2>
            <p className="text-xl text-gray-600">
              Torah's messages resonate with diverse audiences across various settings
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {whoTorahSpeaksTo.map((item, index) => (
              <div key={index} className="flex items-center space-x-4 bg-gradient-to-r from-amber-50 to-blue-50 p-4 rounded-lg">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  <item.icon className="h-5 w-5 text-[#DB910F]" />
                </div>
                <p className="text-gray-700 font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formats Available */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-amber-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Formats Available</h2>
            <p className="text-xl text-gray-600">
              Torah offers flexible speaking formats to meet your event needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {formats.map((format, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="p-2 bg-gradient-to-br from-[#DB910F] to-[#0097B2] rounded-lg">
                  <format.icon className="h-5 w-5 text-white" />
                </div>
                <p className="text-gray-700 font-medium">{format.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Audiences Experience */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Audiences Experience</h2>
            <p className="text-xl text-gray-600 mb-8">
              Torah's message is relatable, powerful, and rooted in biblical truth
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#DB910F]/10 to-[#0097B2]/10 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {audienceOutcomes.map((outcome, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-[#DB910F] mt-2 flex-shrink-0"></div>
                  <p className="text-gray-800 font-medium">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What People Are Saying</h2>
            <p className="text-xl text-gray-600">
              Hear from those who have experienced Torah's transformational message
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white">
                <CardContent className="pt-6">
                  <p className="text-gray-600 mb-6 italic text-lg">"{testimonial.quote}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    {testimonial.role && <p className="text-sm text-[#0097B2]">{testimonial.role}</p>}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Invite Torah */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#0097B2] to-[#DB910F] text-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Invite Torah to Speak at Your Event
          </h2>
          <p className="text-xl mb-4">
            Conferences • Corporate trainings • Church services • Leadership retreats • Mental-health events
          </p>
          <p className="text-lg mb-8 opacity-90">
            Let's discuss how Torah can inspire and transform your audience with her powerful message.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:hello@torahmathews.com?subject=Speaking Engagement Request">
              <Button size="lg" className="bg-white text-[#0097B2] hover:bg-gray-100 text-lg px-8 py-4">
                <Mail className="h-5 w-5 mr-2" />
                Request Booking
              </Button>
            </a>
            <a href="mailto:hello@torahmathews.com?subject=Speaker Media Kit Request">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#0097B2] text-lg px-8 py-4">
                <Download className="h-5 w-5 mr-2" />
                Download Speaker Kit
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-12 px-4 bg-white border-t">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-gray-600 text-lg">
            All speaking engagements support the mission of <strong className="text-[#DB910F]">Transforming Pain Into Power</strong> —
            providing trauma recovery resources, training, and support to individuals and communities in need.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex flex-col items-center mb-4">
            <img src="/torah-logo.png" alt="Torah Mathews Logo" className="h-32 w-auto object-contain drop-shadow-lg mb-3" />
            <span className="text-2xl font-bold mb-2">Torah Mathews, MBA</span>
            <div className="bg-gradient-to-r from-[#DB910F]/20 to-[#0097B2]/20 border border-[#DB910F]/30 rounded-lg px-4 py-2 mb-3">
              <p className="text-[#DB910F] font-semibold text-sm">Author, Speaker, Faith-Based Trauma Recovery Coach</p>
            </div>
          </div>
          <p className="text-gray-400 mb-4">
            Transforming pain into power through faith, healing, and unshakable purpose.
          </p>
          <div className="border-t border-gray-800 mt-8 pt-8 text-gray-400">
            <p>&copy; 2025 Torah Mathews, MBA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
