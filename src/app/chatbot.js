import { useEffect } from "react";

const ChatBot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.fornxt.ai";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);
  }, []);

  return null;
};

export default ChatBot;
