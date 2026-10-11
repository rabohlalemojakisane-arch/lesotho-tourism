import { useState } from 'react';
import { attractions } from '../data';

function EnquiryForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    destination: '',
    visitors: '',
    visitDate: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9+\-\s()]{10,15}$/;

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number (10-15 digits)';
    }

    if (!formData.destination) {
      newErrors.destination = 'Please select a destination';
    }

    if (!formData.visitors) {
      newErrors.visitors = 'Number of visitors is required';
    } else if (isNaN(formData.visitors) || Number(formData.visitors) < 1) {
      newErrors.visitors = 'Please enter a valid number (at least 1)';
    }

    if (!formData.visitDate) {
      newErrors.visitDate = 'Preferred visit date is required';
    } else {
      const selected = new Date(formData.visitDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        newErrors.visitDate = 'Date cannot be in the past';
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        destination: '',
        visitors: '',
        visitDate: '',
        message: ''
      });
      setErrors({});
      setTimeout(() => setSubmitted(false), 6000);
    } else {
      setErrors(newErrors);
      setSubmitted(false);
    }
  };

  return (
    <section className="enquiry">
      <h2>Visitor Enquiry Form</h2>
      <p className="enquiry-intro">
        Fill in the form below and we'll get back to you with more information about your trip to Lesotho.
      </p>

      {submitted && (
        <div className="success-message">
          ✅ Thank you! Your enquiry has been submitted successfully. We will contact you soon.
        </div>
      )}

      <form className="enquiry-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name *</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Thabo Mokoena"
          />
          {errors.fullName && <p className="error-text">{errors.fullName}</p>}
        </div>

        <div className="form-group">
          <label>Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label>Phone Number *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+266 1234 5678"
          />
          {errors.phone && <p className="error-text">{errors.phone}</p>}
        </div>

        <div className="form-group">
          <label>Selected Destination *</label>
          <select
            name="destination"
            value={formData.destination}
            onChange={handleChange}
          >
            <option value="">-- Select a destination --</option>
            {attractions.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
          {errors.destination && <p className="error-text">{errors.destination}</p>}
        </div>

        <div className="form-group">
          <label>Number of Visitors *</label>
          <input
            type="number"
            name="visitors"
            min="1"
            value={formData.visitors}
            onChange={handleChange}
            placeholder="e.g. 2"
          />
          {errors.visitors && <p className="error-text">{errors.visitors}</p>}
        </div>

        <div className="form-group">
          <label>Preferred Visit Date *</label>
          <input
            type="date"
            name="visitDate"
            value={formData.visitDate}
            onChange={handleChange}
          />
          {errors.visitDate && <p className="error-text">{errors.visitDate}</p>}
        </div>

        <div className="form-group">
          <label>Message *</label>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your travel plans or any questions..."
          />
          {errors.message && <p className="error-text">{errors.message}</p>}
        </div>

        <button type="submit" className="submit-btn">
          Submit Enquiry
        </button>
      </form>
    </section>
  );
}

export default EnquiryForm;
