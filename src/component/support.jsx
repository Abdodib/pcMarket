import React, { useState } from "react"
import {
  MessageCircle,
  Phone,
  Mail,
  Clock,
  HelpCircle,
  FileText,
  Video,
  Users,
  ChevronDown,
  ChevronRight,
  Search,
} from "lucide-react"
import "../styles/support.css"

export default function SupportPage() {
  const [activeTab, setActiveTab] = useState("faq")
  const [expandedFaq, setExpandedFaq] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")

  const faqs = [
    { id: 1, question: "What is your return policy?", answer: "We offer a 30-day return policy for all products. Items must be in original condition with all packaging and accessories included." },
    { id: 2, question: "How long does shipping take?", answer: "Standard shipping takes 3-5 business days. Express shipping (1-2 days) and overnight shipping options are also available." },
    { id: 3, question: "Do you offer warranty on products?", answer: "Yes, all products come with manufacturer warranty. We also offer extended warranty options for additional coverage." },
    { id: 4, question: "Can I track my order?", answer: "Once your order ships, you'll receive a tracking number via email to monitor your package's progress." },
    { id: 5, question: "Do you offer PC building services?", answer: "Yes, we offer professional PC building services. Our certified technicians can assemble your custom build for an additional fee." },
    { id: 6, question: "What payment methods do you accept?", answer: "We accept all major credit cards, PayPal, Apple Pay, Google Pay, and financing options through our partners." },
  ]

  const guides = [
    { title: "First Time PC Builder's Guide", description: "Complete step-by-step guide for building your first PC", type: "Article", duration: "15 min read" },
    { title: "How to Choose the Right GPU", description: "Understanding graphics cards and finding the perfect match", type: "Video", duration: "12 min watch" },
    { title: "CPU Compatibility Guide", description: "Ensuring your processor works with your motherboard", type: "Article", duration: "8 min read" },
    { title: "Cable Management Tips", description: "Keep your build clean and improve airflow", type: "Video", duration: "10 min watch" },
  ]

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="support-page">
      <div className="page-header">
        <div className="container">
          <h1>Support Center</h1>
          <p>Get help with your orders, products, and PC building questions</p>
        </div>
      </div>

      {/* Support Options */}
      <section className="support-options">
        <div className="container">
          <div className="support-grid">
            <div className="support-card">
              <div className="support-icon"><MessageCircle size={32} /></div>
              <h3>Live Chat</h3>
              <p>Chat with our support team in real-time</p>
              <div className="support-status online"><div className="status-dot"></div><span>Online Now</span></div>
              <button className="support-btn primary">Start Chat</button>
            </div>
            <div className="support-card">
              <div className="support-icon"><Phone size={32} /></div>
              <h3>Phone Support</h3>
              <p>Speak directly with our experts</p>
              <div className="support-hours"><Clock size={16} /><span>Mon-Fri 9AM-6PM EST</span></div>
              <button className="support-btn secondary">Call Now</button>
            </div>
            <div className="support-card">
              <div className="support-icon"><Mail size={32} /></div>
              <h3>Email Support</h3>
              <p>Send us a detailed message</p>
              <div className="response-time"><span>Response within 24 hours</span></div>
              <button className="support-btn secondary">Send Email</button>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs + Content */}
      <section className="support-content">
        <div className="container">
          <div className="support-tabs">
            <button className={activeTab === "faq" ? "active" : ""} onClick={() => setActiveTab("faq")}><HelpCircle size={20} /> FAQ</button>
            <button className={activeTab === "guides" ? "active" : ""} onClick={() => setActiveTab("guides")}><FileText size={20} /> Guides</button>
            <button className={activeTab === "videos" ? "active" : ""} onClick={() => setActiveTab("videos")}><Video size={20} /> Video Tutorials</button>
            <button className={activeTab === "community" ? "active" : ""} onClick={() => setActiveTab("community")}><Users size={20} /> Community</button>
          </div>

          {activeTab === "faq" && (
            <div className="faq-section">
              <div className="faq-search">
                <Search size={20} />
                <input type="text" placeholder="Search frequently asked questions..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
              </div>
              <div className="faq-list">
                {filteredFaqs.map((faq) => (
                  <div key={faq.id} className="faq-item">
                    <button className="faq-question" onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}>
                      <span>{faq.question}</span>
                      {expandedFaq === faq.id ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                    </button>
                    {expandedFaq === faq.id && <div className="faq-answer"><p>{faq.answer}</p></div>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "guides" && (
            <div className="guides-section">
              <div className="guides-grid">
                {guides.map((guide, index) => (
                  <div key={index} className="guide-card">
                    <div className="guide-type">{guide.type === "Video" ? <Video size={16} /> : <FileText size={16} />}<span>{guide.type}</span></div>
                    <h3>{guide.title}</h3>
                    <p>{guide.description}</p>
                    <div className="guide-meta"><span className="duration">{guide.duration}</span><button className="guide-link">Read More</button></div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "videos" && (
            <div className="videos-section">
              <div className="video-grid">
                <div className="video-card">
                  <div className="video-thumbnail"><img src="/placeholder.svg" alt="PC Building Basics" /><div className="play-button"><Video size={24} /></div></div>
                  <h3>PC Building Basics</h3><p>Learn the fundamentals of building a PC from scratch</p>
                </div>
                <div className="video-card">
                  <div className="video-thumbnail"><img src="/placeholder.svg" alt="GPU Installation" /><div className="play-button"><Video size={24} /></div></div>
                  <h3>GPU Installation Guide</h3><p>Step-by-step graphics card installation tutorial</p>
                </div>
                <div className="video-card">
                  <div className="video-thumbnail"><img src="/placeholder.svg" alt="Troubleshooting" /><div className="play-button"><Video size={24} /></div></div>
                  <h3>Common PC Issues</h3><p>Troubleshooting guide for common PC problems</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "community" && (
            <div className="community-section">
              <div className="community-stats">
                <div className="stat-item"><div className="stat-number">15,000+</div><div className="stat-label">Community Members</div></div>
                <div className="stat-item"><div className="stat-number">2,500+</div><div className="stat-label">Questions Answered</div></div>
                <div className="stat-item"><div className="stat-number">500+</div><div className="stat-label">Build Showcases</div></div>
              </div>
              <div className="community-features">
                <div className="feature-card"><h3>PC Build Showcase</h3><p>Share your builds and get feedback from the community</p><button className="feature-btn">View Builds</button></div>
                <div className="feature-card"><h3>Tech Support Forum</h3><p>Get help from experienced builders and enthusiasts</p><button className="feature-btn">Ask Question</button></div>
                <div className="feature-card"><h3>Product Reviews</h3><p>Read and write reviews from real customers</p><button className="feature-btn">Read Reviews</button></div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-form-card">
            <h2>Still Need Help?</h2>
            <p>Can't find what you're looking for? Send us a message and we'll get back to you.</p>
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group"><label>Name</label><input type="text" required /></div>
                <div className="form-group"><label>Email</label><input type="email" required /></div>
              </div>
              <div className="form-group"><label>Subject</label>
                <select required>
                  <option value="">Select a topic</option>
                  <option value="order">Order Issue</option>
                  <option value="product">Product Question</option>
                  <option value="technical">Technical Support</option>
                  <option value="billing">Billing Question</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group"><label>Message</label><textarea rows="5" required placeholder="Please describe your issue or question in detail..."></textarea></div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
