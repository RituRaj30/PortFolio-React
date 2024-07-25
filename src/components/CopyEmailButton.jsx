import React from "react";
import { useState } from 'react';
import { getConfigData } from "../data/configReader";
import { FaCopy } from "react-icons/fa6";


function CopyEmailButton() {
  const [buttonText, setButtonText] = useState("Copy Email");
  
  const configData = getConfigData();

  const copyToClipboard = () => {
    const email = configData.email; // Kopyalanacak e-posta adresi
    navigator.clipboard.writeText(email)
      .then(() => {
        setButtonText('Copied');
      })
      .catch((err) => {
        console.error('Copy error:', err);
      });
  };

  return (
    <button
      onClick={copyToClipboard}
      className="gap-x-1 bg-white focus:ring-2 focus:ring-gray-300 font-medium border rounded-lg border-gray-200 first-letter:rounded-lg text-sm px-1.5 py-1.5 text-center inline-flex items-center mr-2 mb-2"
    >
      <FaCopy/>
      {buttonText}
    </button>
  );
}

export default CopyEmailButton;
