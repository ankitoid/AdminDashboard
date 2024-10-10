// src/Page1.js
import React, { useState } from 'react';

const Team = () => {
  const [teamName, setTeamName] = useState('');
  const [formVisible, setFormVisible] = useState(false);

  const handleAddClick = () => {
    setFormVisible(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Team Name:', teamName);
    setFormVisible(false);  // Close the modal after submitting
    setTeamName('');  // Clear the form after submitting
  };

  const handleCancel = () => {
    setTeamName('');  // Clears the form
    setFormVisible(false);  // Hides the modal
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Team Page</h2>
        <button
          onClick={handleAddClick}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      {/* Modal */}
      {formVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md mx-auto">
            <h3 className="text-lg font-bold mb-4">Add Team Name</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="teamName" className="block font-medium mb-1">Team Name</label>
                <input
                  type="text"
                  id="teamName"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  className="border border-gray-300 rounded p-2 w-full"
                  required
                />
              </div>
              
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Submit
                </button>

                <button
                  type="button"
                  onClick={handleCancel}
                  className="text-red-500 hover:text-red-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;
