// pages/index.tsx
"use client"
import React, { useState, FormEvent } from 'react';

export default function Page() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch('/api/submit', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to submit the data. Please try again.');
      }

      // Handle success - maybe redirect or clear the form
      // const data = await response.json();
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="glass bg-neutral p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-center text-white mb-4">Add Review</h1>
        {error && <div className="text-red-500">{error}</div>}
        <form onSubmit={onSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Name" className="w-full p-2 border rounded bg-gray-50 text-black" />
          <input type="text" name="modelYear" placeholder="Model Year" className="w-full p-2 border rounded bg-gray-50 text-black" />
          <textarea name="overview" placeholder="Overview" className="w-full p-2 border rounded bg-gray-50 text-black"></textarea>
          {/* Add other input fields */}
          <input type="text" name="worstExperience" placeholder="Worst Experience" className="w-full p-2 border rounded bg-gray-50 text-black" />
          <input type="text" name="advice" placeholder="Advice" className="w-full p-2 border rounded bg-gray-50 text-black" />
          <input type="text" name="expenses" placeholder="Expenses" className="w-full p-2 border rounded bg-gray-50 text-black" />
          <input type="text" name="fuelEconomy" placeholder="Fuel Economy" className="w-full p-2 border rounded bg-gray-50 text-black" />
          <input type="text" name="otherDetails" placeholder="Other Details" className="w-full p-2 border rounded bg-gray-50 text-black" />
          <input type="text" name="imagesLink" placeholder="Images Link" className="w-full p-2 border rounded bg-gray-50 text-black" />
          <button type="submit" disabled={isLoading} className="w-full bg-warning text-white p-3 rounded hover:bg-primary">
            {isLoading ? 'Loading...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}
