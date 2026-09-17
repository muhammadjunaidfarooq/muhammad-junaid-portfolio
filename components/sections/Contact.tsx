'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Check, AlertCircle, Loader2 } from 'lucide-react';

interface FormState {
  fullname: string;
  email: string;
  message: string;
  projectType: string;
  timeline: string;
  budget: string;
  requirements: string;
  honeypot?: string;
}

interface FormStatus {
  type: 'success' | 'error' | null;
  message: string;
}

const PROJECT_TYPE_LABELS: { [key: string]: string } = {
  'job': 'Job / Internship Opportunity',
  'freelance': 'Freelance / Collaboration',
  'other': 'Other'
};

export default function Contact() {
  const [formData, setFormData] = useState<FormState>({
    fullname: '',
    email: '',
    message: '',
    projectType: '',
    timeline: '',
    budget: '',
    requirements: '',
    honeypot: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>({ type: null, message: '' });
  const [sliderValue, setSliderValue] = useState(0);
  const [isVerified, setIsVerified] = useState(false);

  const resetForm = () => {
    setFormData({
      fullname: '',
      email: '',
      message: '',
      projectType: '',
      timeline: '',
      budget: '',
      requirements: '',
      honeypot: ''
    });
    setSliderValue(0);
    setIsVerified(false);
  };

  // Handle slider change for human verification
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setSliderValue(value);

    // Check if slider is close to target (95-100 for brand color)
    if (value >= 95 && value <= 100) {
      setIsVerified(true);
    } else {
      setIsVerified(false);
    }
  };

  // Get color based on slider value
  // NOTE: target values must stay in sync with --orange-yellow-crayola in app/globals.css.
  const getSliderColor = () => {
    if (isVerified) {
      return 'hsl(199, 89%, 60%)'; // Brand color
    }
    // Interpolate from gray to brand color
    const hue = sliderValue * 1.99; // 0 to 199
    const saturation = sliderValue * 0.89; // 0% to 89%
    const lightness = 50 + (sliderValue * 0.10); // 50% to 60%
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  const validateForm = (data: FormState): boolean => {
    if (data.honeypot) return false;

    if (!data.email.includes('@') || !data.fullname.trim() || !data.message.trim()) {
      setFormStatus({
        type: 'error',
        message: 'Please fill all required fields correctly.'
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setFormStatus({ type: null, message: '' });

    if (!validateForm(formData)) {
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullname: formData.fullname,
          email: formData.email,
          projectType: formData.projectType,
          timeline: formData.timeline,
          budget: formData.budget,
          message: formData.message,
          requirements: formData.requirements || '',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Show success message
      setFormStatus({
        type: 'success',
        message: `Thanks for reaching out about a ${PROJECT_TYPE_LABELS[formData.projectType]}! I'll get back to you soon.`
      });
      resetForm();
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again or reach out directly by email.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.article 
      className="active" 
      data-page="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="h2 article-title">Contact</h2>
      </motion.header>

      <motion.div 
        className="mb-8 h-[250px] md:h-[380px] rounded-2xl border border-[var(--jet)] overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <iframe
          src="https://www.google.com/maps?q=Lahore,+Punjab,+Pakistan&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(1) invert(1)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-[var(--white-2)] text-xl mb-5">Get In Touch</h3>

        <AnimatePresence mode="wait">
          {formStatus.type && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`mb-6 p-4 rounded-xl border ${
                formStatus.type === 'success'
                  ? 'bg-green-500/10 border-green-500 text-green-500'
                  : 'bg-red-500/10 border-red-500 text-red-500'
              } flex items-center gap-2`}
            >
              {formStatus.type === 'success' ? (
                <Check size={20} />
              ) : (
                <AlertCircle size={20} />
              )}
              <p>{formStatus.message}</p>
            </motion.div>
          )}
        </AnimatePresence>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Honeypot field for spam prevention */}
          <input
            type="text"
            name="honeypot"
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
            value={formData.honeypot}
            onChange={(e) => setFormData(prev => ({ ...prev, honeypot: e.target.value }))}
          />
          
          {/* Basic Info */}
          <motion.div 
            className="grid md:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <input
              type="text"
              name="fullname"
              placeholder="Full name"
              required
              disabled={isLoading}
              className="bg-transparent text-[var(--white-2)] text-sm p-4 border border-[var(--jet)] 
              rounded-xl outline-none focus:border-[var(--orange-yellow-crayola)]
              disabled:opacity-60 disabled:cursor-not-allowed"
              value={formData.fullname}
              onChange={(e) => setFormData(prev => ({ ...prev, fullname: e.target.value }))}
            />
            
            <input
              type="email"
              name="email"
              placeholder="Email address"
              required
              disabled={isLoading}
              className="bg-transparent text-[var(--white-2)] text-sm p-4 border border-[var(--jet)] 
              rounded-xl outline-none focus:border-[var(--orange-yellow-crayola)]
              disabled:opacity-60 disabled:cursor-not-allowed"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            />
          </motion.div>

          {/* Project Type */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <select
              required
              disabled={isLoading}
              value={formData.projectType}
              onChange={(e) => setFormData(prev => ({ ...prev, projectType: e.target.value }))}
              className="form-select"
            >
              <option value="">What brings you here?</option>
              <option value="job">Job / Internship Opportunity</option>
              <option value="freelance">Freelance / Collaboration</option>
              <option value="other">Other</option>
            </select>
          </motion.div>

          {/* Timeline & Budget */}
          <motion.div
            className="grid md:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <select
              required
              disabled={isLoading}
              value={formData.timeline}
              onChange={(e) => setFormData(prev => ({ ...prev, timeline: e.target.value }))}
              className="form-select"
            >
              <option value="">Timeline</option>
              <option value="1m">Immediately (within 1 month)</option>
              <option value="1-3">1-3 months</option>
              <option value="flexible">Flexible / No rush</option>
            </select>

            <select
              required
              disabled={isLoading}
              value={formData.budget}
              onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
              className="form-select"
            >
              <option value="">Budget / compensation (optional context)</option>
              <option value="na">Not applicable</option>
              <option value="under25">Under $25k</option>
              <option value="25plus">$25k+</option>
            </select>
          </motion.div>

          {/* Project Brief */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <textarea
              name="message"
              placeholder="Tell me about the opportunity, project, or what you'd like to discuss"
              required
              disabled={isLoading}
              className="w-full min-h-[120px] max-h-[200px] bg-transparent text-[var(--white-2)] text-sm p-4 
              border border-[var(--jet)] rounded-xl outline-none focus:border-[var(--orange-yellow-crayola)]
              resize-y disabled:opacity-60 disabled:cursor-not-allowed"
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
            />
          </motion.div>

          {/* Special Requirements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <textarea
              name="requirements"
              placeholder="Anything else I should know? (role/company link, tech stack, requirements, etc.)"
              disabled={isLoading}
              className="w-full min-h-[80px] bg-transparent text-[var(--white-2)] text-sm p-4 
              border border-[var(--jet)] rounded-xl outline-none focus:border-[var(--orange-yellow-crayola)]
              resize-y disabled:opacity-60 disabled:cursor-not-allowed"
              value={formData.requirements}
              onChange={(e) => setFormData(prev => ({ ...prev, requirements: e.target.value }))}
            />
          </motion.div>

          {/* Human Verification Slider */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95 }}
            className="relative"
          >
            <div className="flex items-center justify-between mb-3">
              <label className="text-[var(--white-2)] text-sm font-medium flex items-center gap-2">
                {isVerified ? (
                  <>
                    <Check size={18} className="text-green-500" />
                    <span className="text-green-500">Verified! You&apos;re human 🎉</span>
                  </>
                ) : (
                  <>
                    <span>Slide to match my brand color</span>
                  </>
                )}
              </label>
            </div>

            <div className="relative">
              {/* Slider Track */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderValue}
                onChange={handleSliderChange}
                disabled={isLoading}
                className="w-full h-3 rounded-full appearance-none cursor-pointer transition-all
                disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  background: `linear-gradient(to right,
                    ${getSliderColor()} 0%,
                    ${getSliderColor()} ${sliderValue}%,
                    var(--jet) ${sliderValue}%,
                    var(--jet) 100%)`,
                }}
              />

              {/* Target Indicator */}
              <div
                className="absolute top-1/2 -translate-y-1/2 bg-[var(--orange-yellow-crayola)] opacity-30 pointer-events-none rounded"
                style={{ right: '0%' }}
              />

              {/* Visual Feedback */}
              <div className="flex items-center justify-between mt-2 text-xs">
                <span className="text-[var(--light-gray-70)]">Start</span>
                <span
                  className="text-[var(--orange-yellow-crayola)] font-medium transition-opacity"
                  style={{ opacity: isVerified ? 1 : 0.3 }}
                >
                  Brand Color ✨
                </span>
              </div>
            </div>

            {!isVerified && sliderValue > 0 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[var(--light-gray-70)] text-xs mt-2 text-center"
              >
                {sliderValue < 50 ? "Keep sliding right..." :
                 sliderValue < 85 ? "Getting closer!" :
                 sliderValue < 95 ? "Almost there!" : "Just a bit more!"}
              </motion.p>
            )}
          </motion.div>


          <motion.button
            type="submit"
            disabled={isLoading || !isVerified}
            className="gradient-border ml-auto flex items-center gap-2 px-5 py-4 rounded-xl
            hover:text-[var(--eerie-black-1)] text-[var(--orange-yellow-crayola)] text-sm font-medium transition-all
            hover:bg-gradient-to-br hover:from-[var(--orange-yellow-crayola)] hover:to-[var(--vegas-gold)]
            md:w-max disabled:opacity-60 disabled:cursor-not-allowed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            whileHover={isVerified ? { scale: 1.02 } : {}}
            whileTap={isVerified ? { scale: 0.98 } : {}}
          >
            {isLoading ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <Send size={18} />
            )}
            <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
          </motion.button>
        </form>
      </motion.section>
    </motion.article>
  );
}