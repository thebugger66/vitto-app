

// import { useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// export default function App() {
//   const [step, setStep] = useState(1);
//   const [form, setForm] = useState({
//     institution_type: "Bank" // Default value to prevent Joi validation errors
//   });
//   const [otp, setOtp] = useState("");
//   const [token, setToken] = useState("");

  
//   // 1. Send OTP (With Dev Mode Popup)
//   const sendOtp = async () => {
//     if (!form.email) return alert("Please enter your email!");
//     try {
//       const response = await axios.post("http://localhost:5000/api/auth/send-otp", {
//         email: form.email,
//         phone: form.phone
//       });

//       //Grab the secret code and popup
//       const secretCode = response.data.devModeOtp;
//       alert(`🧪 DEV MODE\n\nYour OTP is: ${secretCode}`);
      
//       // Auto-fill
//       setOtp(secretCode);
//       setStep(2);

//     } catch (err) {
//       console.error(err);
//       alert(err.response?.data?.error || "Failed to send OTP. Try again.");
//     }
//   };

//   // 2. Verify OTP
//   const verifyOtp = async () => {
//     if (!otp) return alert("Enter OTP!");
//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/verify-otp", {
//         email: form.email,
//         otp: otp,
//       });
//       setToken(res.data.token);
//       setStep(3);
//     } catch (err) {
//       console.error(err);
//       alert("Invalid OTP!");
//     }
//   };

//   // 3. Submit Lead 
//   const submitLead = async () => {
//     try {
//       const payload = {
//         email: form.email,
//         phone: form.phone || "",
//         institution_name: form.institution_name,
//         institution_type: form.institution_type,
//         city: form.city,
//         loan_book_size: form.loan_book_size
//       };

//       await axios.post("http://localhost:5000/api/leads", payload);
//       setStep(4);
//     } catch (err) {
//       console.error(err);
//       if (err.response?.data?.details) {
//         alert("Validation Error: " + err.response.data.details.join(", "));
//       } else {
//         alert("Failed to submit. Try again.");
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#1A1A2E] text-white flex items-center justify-center p-6">
//       <div className="w-full max-w-md space-y-6">

       
//         {step === 1 && (
//           <div className="bg-gray-900 p-8 rounded-lg shadow-lg space-y-4">
//             <h2 className="text-2xl font-bold text-center">Sign in with Email OTP</h2>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
//               onChange={e => setForm({ ...form, email: e.target.value })}
//             />
//             <input
//               type="tel"
//               placeholder="Enter your phone (optional)"
//               className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
//               onChange={e => setForm({ ...form, phone: e.target.value })}
//             />
//             <button
//               onClick={sendOtp}
//               className="w-full bg-red-600 hover:bg-red-700 py-3 rounded font-semibold transition"
//             >
//               Send OTP
//             </button>
//           </div>
//         )}

      
//         {step === 2 && (
//           <div className="bg-gray-900 p-8 rounded-lg shadow-lg space-y-4">
//             <h2 className="text-2xl font-bold text-center">Verify OTP</h2>
//             <input
//               type="text"
//               placeholder="Enter OTP"
//               value={otp} // Automatically filled by Dev Mode!
//               className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 text-center tracking-widest"
//               onChange={e => setOtp(e.target.value)}
//             />
//             <button
//               onClick={verifyOtp}
//               className="w-full bg-red-600 hover:bg-red-700 py-3 rounded font-semibold transition"
//             >
//               Verify
//             </button>
//           </div>
//         )}

      
//         {step === 3 && (
//           <div className="bg-gray-900 p-8 rounded-lg shadow-lg space-y-4">
//             <h2 className="text-2xl font-bold text-center">Organisation Details</h2>
//             <input
//               placeholder="Institution Name"
//               className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
//               onChange={e => setForm({ ...form, institution_name: e.target.value })}
//             />
            
//             {/* Switched to a Select Dropdown to ensure Joi Validation passes */}
//             <select
//               className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
//               onChange={e => setForm({ ...form, institution_type: e.target.value })}
//               value={form.institution_type}
//             >
//               <option value="Bank">Bank</option>
//               <option value="NBFC">NBFC</option>
//               <option value="MFI">MFI</option>
//             </select>

//             <input
//               placeholder="City"
//               className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
//               onChange={e => setForm({ ...form, city: e.target.value })}
//             />
//             <input
//               placeholder="Loan Size"
//               className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
//               onChange={e => setForm({ ...form, loan_book_size: e.target.value })}
//             />
//             <button
//               onClick={submitLead}
//               className="w-full bg-red-600 hover:bg-red-700 py-3 rounded font-semibold transition"
//             >
//               Submit
//             </button>
//           </div>
//         )}

//         {step === 4 && (
//           <div className="bg-gray-900 p-8 rounded-lg shadow-lg text-center">
//             <h2 className="text-2xl font-bold mb-2">Success! 🎉</h2>
//             <p>We will contact you shortly.</p>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// }











import { useState } from "react";
import axios from "axios";

// 1. Environment-Aware API URL Configuration
const API_BASE_URL = window.location.hostname === "localhost" 
  ? "http://localhost:5000" 
  : "https://vitto-backend.onrender.com";

export default function App() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    institution_type: "Bank" 
  });
  const [otp, setOtp] = useState("");
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // 2. Send OTP (With Dev Mode Popup)
  const sendOtp = async () => {
    if (!form.email) return alert("Please enter your email!");
    setIsLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/api/auth/send-otp`, {
        email: form.email,
        phone: form.phone
      });

      const secretCode = response.data.devModeOtp;
      alert(`🧪 DEV MODE\n\nYour OTP is: ${secretCode}`);
      
      setOtp(secretCode);
      setStep(2);
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || "Failed to send OTP. Note: Render Free Tier may take 60s to wake up.");
    } finally {
      setIsLoading(false);
    }
  };

  // 3. Verify OTP
  const verifyOtp = async () => {
    if (!otp) return alert("Enter OTP!");
    setIsLoading(true);
    try {
      const res = await axios.post(`${API_BASE_URL}/api/auth/verify-otp`, {
        email: form.email,
        otp: otp,
      });
      setToken(res.data.token);
      setStep(3);
    } catch (err) {
      console.error(err);
      alert("Invalid OTP!");
    } finally {
      setIsLoading(false);
    }
  };

  // 4. Submit Lead 
  const submitLead = async () => {
    setIsLoading(true);
    try {
      const payload = {
        email: form.email,
        phone: form.phone || "",
        institution_name: form.institution_name,
        institution_type: form.institution_type,
        city: form.city,
        loan_book_size: form.loan_book_size
      };

      await axios.post(`${API_BASE_URL}/api/leads`, payload);
      setStep(4);
    } catch (err) {
      console.error(err);
      if (err.response?.data?.details) {
        alert("Validation Error: " + err.response.data.details.join(", "));
      } else {
        alert("Failed to submit. Try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1A1A2E] text-white flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6">

        {step === 1 && (
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg space-y-4 border border-gray-800">
            <h2 className="text-2xl font-bold text-center">Sign in with Email OTP</h2>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-600 outline-none"
              onChange={e => setForm({ ...form, email: e.target.value })}
            />
            <input
              type="tel"
              placeholder="Enter your phone (optional)"
              className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-600 outline-none"
              onChange={e => setForm({ ...form, phone: e.target.value })}
            />
            <button
              onClick={sendOtp}
              disabled={isLoading}
              className="w-full bg-red-600 hover:bg-red-700 py-3 rounded font-semibold transition disabled:bg-gray-600"
            >
              {isLoading ? "Signing in..." : "Send OTP"}
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg space-y-4 border border-gray-800">
            <h2 className="text-2xl font-bold text-center">Verify OTP</h2>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              className="w-full p-3 rounded bg-gray-800 text-white text-center tracking-widest text-xl focus:ring-2 focus:ring-red-600 outline-none"
              onChange={e => setOtp(e.target.value)}
            />
            <button
              onClick={verifyOtp}
              disabled={isLoading}
              className="w-full bg-red-600 hover:bg-red-700 py-3 rounded font-semibold transition disabled:bg-gray-600"
            >
              {isLoading ? "Verifying..." : "Verify"}
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg space-y-4 border border-gray-800">
            <h2 className="text-2xl font-bold text-center">Organisation Details</h2>
            <input
              placeholder="Institution Name"
              className="w-full p-3 rounded bg-gray-800 text-white focus:ring-2 focus:ring-red-600 outline-none"
              onChange={e => setForm({ ...form, institution_name: e.target.value })}
            />
            <select
              className="w-full p-3 rounded bg-gray-800 text-white focus:ring-2 focus:ring-red-600 outline-none"
              onChange={e => setForm({ ...form, institution_type: e.target.value })}
              value={form.institution_type}
            >
              <option value="Bank">Bank</option>
              <option value="NBFC">NBFC</option>
              <option value="MFI">MFI</option>
            </select>
            <input
              placeholder="City"
              className="w-full p-3 rounded bg-gray-800 text-white focus:ring-2 focus:ring-red-600 outline-none"
              onChange={e => setForm({ ...form, city: e.target.value })}
            />
            <input
              placeholder="Loan Size (e.g. 50Cr+)"
              className="w-full p-3 rounded bg-gray-800 text-white focus:ring-2 focus:ring-red-600 outline-none"
              onChange={e => setForm({ ...form, loan_book_size: e.target.value })}
            />
            <button
              onClick={submitLead}
              disabled={isLoading}
              className="w-full bg-red-600 hover:bg-red-700 py-3 rounded font-semibold transition disabled:bg-gray-600"
            >
              {isLoading ? "Submitting..." : "Submit Lead"}
            </button>
          </div>
        )}

        {step === 4 && (
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg text-center border border-green-900">
            <h2 className="text-2xl font-bold mb-2 text-green-500">Success! 🎉</h2>
            <p className="text-gray-400">Lead record persisted to PostgreSQL. We will contact you shortly.</p>
          </div>
        )}

      </div>
    </div>
  );
}













