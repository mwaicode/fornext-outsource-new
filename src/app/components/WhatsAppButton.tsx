// components/WhatsAppButton.tsx
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "254722715026"; // Replace with your WhatsApp number
  const message = encodeURIComponent("Hello, I'm interested in your services!"); 
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all flex items-center justify-center text-3xl animate-bounce"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;
