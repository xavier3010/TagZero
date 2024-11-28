import { Modal, Button } from "react-bootstrap";
import { useState } from "react";  // Remove useEffect import
import Back from "../asserts/images/Back.svg"; // Adjust the path as needed
import logo from '../asserts/images/logo.svg'; // Adjust the path as needed
import axios from "axios";
import './contactUs.css';

const ContactUsModal = (props) => {
  const [errors, setErrors] = useState({});
  const [showModalsuccess, setShowModalsuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    services: "",
    email: "",
    budget: "",
    message: "",
  });
  const [loading, setLoading] = useState(false); // Loading state

  const { showModal, updateModal } = props;

  // Handle close action for both modals
  const handleCloseModal = () => {
    setShowModalsuccess(false); // Close success modal
    updateModal(false); // Close contact modal
    setErrors({}); // Reset errors when closing
    setFormData({ name: "", services: "", email: "", budget: "", message: "" }); // Reset form
  };

  // Handle form submission
  const handleSubmit = async () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setLoading(true); // Set loading to true when form is being submitted
      try {
        const response = await axios.post("http://localhost:5001/api/contact", formData);
        if (response.status === 200) {
          setShowModalsuccess(true); // Show success modal
          setFormData({
            name: "",
            services: "",
            email: "",
            budget: "",
            message: "",
          }); // Reset the form after successful submission
        }
      } catch (error) {
        console.error("Error submitting form", error);
        setErrors({
          form: error.response?.data?.message || "Error submitting form. Please try again.",
        });
      } finally {
        setLoading(false); // Reset loading state after submission
      }
    }
  };

  // Validate form data
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Please Enter Your Name";
    if (!formData.email) newErrors.email = "Please Enter Your Email-Id";
    if (!formData.services) newErrors.services = "Please Select services";
    if (!formData.budget) newErrors.budget = "Please Select Budget";
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: "" }); // Clear specific error on change
  };

  return (
    <>
      {/* Main Contact Us Modal */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered aria-labelledby="example-custom-modal-styling">
        <Modal.Body>
          <div className="px-3">
            <div className="row mb-4">
              <div className="col-2 back">
                <small>
                  <img src={Back} alt="Back" style={{ cursor: "pointer" }} onClick={handleCloseModal} />
                  <span className="ms-2">Back</span>
                </small>
              </div>
              <div className="col-8 contact-modal-header text-center" style={{ fontSize: "18px" }}>
                Have an Idea?
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 px-4 py-2">
                <p className="modalp">Let’s Bring It to Life Together</p>
                <span className="modalText">
                  Got a groundbreaking idea or a project in mind? We’re excited to hear about it! At{" "}
                  <span style={{ color: "#03BF71" }}>TagZero</span>, we specialize in turning innovative concepts into reality.
                </span>
                <hr />
                <p className="modalp">Our Process:</p>
                <div className="row">
                  {["We Talk", "Refine & Execute", "Design & Revise", "Develop & Launch"].map((step, index) => (
                    <div className="col-12 col-md-6 mb-4" key={index}>
                      <p className="modalCount">
                        {index + 1}
                        <div className="modalCountLine"></div>
                      </p>
                      <p className="modalCountHead">{step}</p>
                      <p className="modalCountText">
                        {index === 0 && "Tell us your vision. We’re here to listen and collaborate on making it a reality."}
                        {index === 1 && "We perfect the details and bring your vision to life with precision."}
                        {index === 2 && "We craft your solution, then refine it based on feedback to ensure it meets your vision perfectly."}
                        {index === 3 && "We bring your project to life and ensure a seamless launch, ready for the world."}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-12 col-md-6 px-4 py-1">
                <form>
                  <div className="form-group py-0">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      className="inputField form-control"
                      type="text"
                      name="name"
                      value={formData.name}
                      required
                      onChange={handleInputChange}
                    />
                    {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
                  </div>
                  <div className="form-group py-0">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      className="inputField form-control"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                  </div>
                  <div className="form-group py-0">
                    <label htmlFor="service-interest" className="form-label">What service are you interested in?</label>
                    <select
                      className="inputField form-control"
                      name="services"
                      value={formData.services}
                      onChange={handleInputChange}
                    >
                      <option value="">select project type</option>
                      <option value="service 1">service 1</option>
                      <option value="service 2">service 2</option>
                      <option value="service 3">service 3</option>
                      <option value="service 4">service 4</option>
                      <option value="service 5">service 5</option>
                    </select>
                    {errors.services && <span style={{ color: 'red' }}>{errors.services}</span>}
                  </div>
                  <div className="form-group py-0">
                    <label htmlFor="budget" className="form-label">Budget</label>
                    <select
                      className="inputField form-control"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                    >
                      <option value="">select project budget</option>
                      <option value="budget 1">budget 1</option>
                      <option value="budget 2">budget 2</option>
                      <option value="budget 3">budget 3</option>
                      <option value="budget 4">budget 4</option>
                      <option value="budget 5">budget 5</option>
                    </select>
                    {errors.budget && <span style={{ color: 'red' }}>{errors.budget}</span>}
                  </div>
                  <div className="form-group py-0">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      className="inputField form-control"
                      style={{ minHeight: "80px" }}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  <div className="py-2">
                    <button
                      type="button"
                      className="modalSubmit w-90 py-2"
                      onClick={handleSubmit}
                      disabled={loading} // Disable button when loading
                    >
                      {loading ? 'Submitting...' : 'Submit'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* Success Modal */}
      <Modal show={showModalsuccess} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <img src={logo} alt="Logo" className="nav-logo-img" />
        </Modal.Header>
        <Modal.Body>
          Thank you, <span className="about-us-text">{formData.name}</span>. Your request has been submitted successfully!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ContactUsModal;
