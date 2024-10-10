import React, { useState } from 'react';

const Doubt = () => {
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    year: '',
    doubt: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, department, year, doubt } = formData;
    const message = `Name: ${name}%0A` +
                    `Department: ${department}%0A` +
                    `Year: ${year}%0A` +
                    `Doubt: ${doubt}`;
    const whatsappNumber = '7010399378'; // Replace with the actual WhatsApp number
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div>
      <div className="header mt-2 d-flex flex-column">
        <span className="title-text heading">Clear your Doubts</span>
        <span className="opacity-75">
          Especially made for introverted students.
        </span>
      </div>
      <div className="mt-3 content">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="">Name</label>
            <input
              type="text"
              className="form-control shadow-none"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="department" className="">Department</label>
            <input
              type="text"
              className="form-control shadow-none"
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="year" className="">Year</label>
            <input
              type="text"
              className="form-control shadow-none"
              id="year"
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="doubt" className="">Doubt</label>
            <textarea
              className="form-control shadow-none"
              id="doubt"
              name="doubt"
              rows={8}
              value={formData.doubt}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-warning float-end">Send to WhatsApp</button>
        </form>
      </div>
    </div>
  );
};

export default Doubt;
