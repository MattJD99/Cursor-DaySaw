'use client';

import { useState } from 'react';

export default function ROICalculator() {
  const [inquiries, setInquiries] = useState(10);
  const [avgValue, setAvgValue] = useState(500);
  const [estimatedLoss, setEstimatedLoss] = useState(0);

  const calculateLoss = () => {
    // Assuming 50% of missed inquiries convert to customers
    const loss = inquiries * 0.5 * avgValue;
    setEstimatedLoss(loss);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-xl mx-auto">
      <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">How Much Revenue Are You Missing?</h3>
      
      <div className="space-y-6">
        <div>
          <label htmlFor="inquiries" className="block text-sm font-medium text-gray-700 mb-2">
            How many inquiries (calls, DMs, web chats) do you think you miss per month?
          </label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              id="inquiries"
              min="0"
              max="100"
              value={inquiries}
              onChange={(e) => setInquiries(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <span className="text-lg font-medium min-w-[40px]">{inquiries}</span>
          </div>
        </div>

        <div>
          <label htmlFor="avgValue" className="block text-sm font-medium text-gray-700 mb-2">
            What is the average value of a new client to your business?
          </label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              id="avgValue"
              min="50"
              max="5000"
              step="50"
              value={avgValue}
              onChange={(e) => setAvgValue(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="relative rounded-md shadow-sm min-w-[100px]">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                type="number"
                value={avgValue}
                onChange={(e) => setAvgValue(Number(e.target.value))}
                className="block w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        <button 
          onClick={calculateLoss}
          className="btn-primary w-full"
        >
          Calculate Missed Revenue
        </button>

        {estimatedLoss > 0 && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-center text-gray-800">
              You could be losing an estimated <span className="font-bold text-blue-700">${estimatedLoss.toLocaleString()}</span> in revenue each month.
            </p>
            <div className="mt-4 text-center">
              <a href="#cta" className="btn-primary inline-block">
                Let's Fix This - Start My Free Trial
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
