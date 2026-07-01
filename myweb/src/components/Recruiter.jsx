import React, { useState } from "react"; 
import './Recruiter.css';
import logo from "../assets/logo.png";
import placementIcon from "../assets/placement.png";
import recruiterIcon from "../assets/recruiter.png";
import studentIcon from "../assets/student.png";
import trainingIcon from "../assets/training.png";
import helpIcon from "../assets/help.png";
import searchIcon from "../assets/search.png";
import downIcon from "../assets/down.png"; 

const Recruiter = () => {
const [selectedRole, setSelectedRole] = useState("Recruiter");
const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);
const [showPopup, setShowPopup] = useState(false);

const [formData, setFormData] = useState({
fullName: "",
email: "",
phone: "",
company: "",
industry: "",
designation: "",
password: "",
confirmPassword: "",
terms: false,
});

const roles = [
    {
    title: "Placement Officer",
    icon: placementIcon,
    description: "Manage drive postings, student placements and company relations.",
    },
    {
    title: "Recruiter",
    icon: recruiterIcon,
    description: "Post jobs, search students, manage applications and shortlist candidates.",
    },
    {
    title: "Student",
    icon: studentIcon,
    description: "Explore opportunities, apply for jobs, and track application status.",
    },
    {
    title: "Training Coordinator",
    icon: trainingIcon,
    description: "Manage training programs, batches, schedules and training records.",
    },
];

const handleSubmit = (e) => {
e.preventDefault();
if (
    !formData.fullName ||
    !formData.email ||
    !formData.phone ||
    !formData.company ||
    !formData.industry ||
    !formData.designation ||
    !formData.password ||
    !formData.confirmPassword
) {
    alert("Please fill in all required fields.");
    return;
}
if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match.");
    return;
}
if (!formData.terms) {
    alert("Please accept the Terms and Privacy Policy.");
    return;
}
setShowPopup(true);
};

const handleChange = (e) => {
const { name, value, type, checked } = e.target;
setFormData({
    ...formData,
    [name]: type === "checkbox" ? checked : value,
});
};


return (  
    <div className="recruiter-container"> 
    <div className="recruiter-left-panel">
        <div className="recruiter-brand">
        <img src={logo} alt="logo" />
        <div>
            <h2>EDUHIRE</h2>
            <span>EMPOWERING CAREERS, CONNECTING FUTURES</span>
        </div>
    </div>

    <div className="recruiter-left-content">
    <h1>Create Your Account</h1>
    <p>
        Join CampusConnect and be part of a platform that connects talent
        with opportunities.
    </p>

    <h5>SELECT YOUR ROLE</h5>
        <div className="recruiter-role-list">
            {roles.map((role) => (
            <button
                key={role.title}
                type="button"
                className={selectedRole === role.title ? "role-card active" :"role-card"}
                onClick={() => setSelectedRole(role.title)}
                aria-pressed={selectedRole === role.title}
            >
    <div className="recruiter-role-left">
        <img src={role.icon} alt={role.title} />
        <div>
            <h4>{role.title}</h4>
            <p>{role.description}</p>
        </div>
    </div>

    <div className={selectedRole === role.title ? "radio active-radio" : "radio"}>
        {selectedRole === role.title && <div className="dot"></div>}
    </div>
    </button>
    ))}
    </div> 
    </div>

    <div className="recruiter-support">
    <img src={helpIcon} alt="Help" className="recruiter-support-icon" />
    <span>Need help? Contact support@campusconnect.com</span>
</div>
    </div>

    <div className="recruiter-right-panel">
    <div className="recruiter-form-header">
        <div className="recruiter-header-logo-box">
    <img src={recruiterIcon} alt="User Registration Logo" />
    </div>
        <div>
            <h2>User Registration</h2>
            <p>Fill in the details below to create your account</p>
        </div>
    </div>

<form className="recruiter-register-form" onSubmit={handleSubmit}>
    <div className="input-group">
        <label htmlFor="fullName"> Full Name</label>
        <input id="fullName" type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="John Doe"/>
        </div>

        <div className="row">
        <div className="input-group">
        <label htmlFor="email">Official Email Address</label>
        <div className="input-icon">
        <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@company.com"/> 
        </div>
    </div>

    <div className="input-group">
        <label htmlFor="phone">Phone Number</label>
        <div className="phone-layout">
        <div className="country-dropdown">
        <span>+91 </span> 
        <img src={downIcon} alt="Dropdown" className="dropdown-icon"/>
        </div>
        <input id="phone" type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="555-0123" />
        </div>
        </div>
    </div>

    <div className="input-group">
        <label htmlFor="company">Company / Organization Name</label>
        <div className="input-icon">
        <input id="company" type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Search your company..."/>
        <img src={searchIcon} alt="Search" className="search-icon" />
    </div>
    </div>

    <div className="row">
        <div className="input-group">
        <label htmlFor="industry">Industry</label>
        <div className="select-box">
        <select id="industry" name="industry" value={formData.industry} onChange={handleChange}>
            <option value="" disabled hidden>Select Industry</option>
            <option value="it">IT</option>
            <option value="finance">Finance</option>
            <option value="healthcare">Healthcare</option>
            <option value="education">Education</option>
        </select>
        <img src={downIcon} alt="Dropdown" className="dropdown-icon"/>
        </div>
    </div>

    <div className="input-group">
        <label htmlFor="designation">Job Title / Designation</label>
        <input id="designation" type="text" name="designation" value={formData.designation} onChange={handleChange}/>
        </div>
    </div>

    <div className="row">
        <div className="input-group">
        <label htmlFor="password">Password</label>
        <div className="password-box">
        <input id="password" type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} alt="Password" placeholder="Enter your password"/>
        <button type="button" onClick={() => setShowPassword(!showPassword)}> </button>
        </div>
    </div>

    <div className="input-group">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <div className="password-box">
        <input id="confirmPassword" type={showConfirmPassword ? "text" : "password"} name="confirmPassword" value={formData.confirmPassword} onChange={handleChange}/>
        <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
        > 
        </button>
        </div>
        </div>
    </div>

    <div className="recruiter-terms">
        <input id="terms-check" type="checkbox" name="terms" checked={formData.terms} onChange={handleChange}/>
        <label htmlFor="terms-check">
        I agree to the <span>Terms of Service</span> and <span>Privacy Policy</span>.
        </label>
    </div>

    <button className="recruiter-register-btn" type="submit">Complete Registration</button>
    <div className="recruiter-login-link">Already have an account?<a href="/">Log in</a></div>
</form>

    </div>
    {showPopup && (
    <div className="recruiter-popup-overlay">
    <div className="recruiter-popup-box">
    <div className="recruiter-success-icon">✓</div>
    <h2>Registration Successful!</h2>
    <p>Your account has been created successfully.</p>
    <button className="recruiter-popup-btn" onClick={() => setShowPopup(false)}>OK</button>
    </div>
</div>
)}
</div>
);
};
export default Recruiter;