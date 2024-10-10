import React, { useState } from 'react';

const JobPosition = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [teamName, setTeamName] = useState('');
  const [positionName, setPositionName] = useState('');

  const handleAddClick = () => {
    setFormVisible(true); // Show the modal
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Team Name:', teamName);
    console.log('Position Name:', positionName);
    // Add your submit functionality here

    // Close the modal and reset the fields
    setFormVisible(false);
    setTeamName('');
    setPositionName('');
  };

  const handleCancel = () => {
    setFormVisible(false); // Hide the modal
    setTeamName(''); // Clear input fields
    setPositionName('');
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Job Positions</h2>
        <button
          onClick={handleAddClick}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add Position
        </button>
      </div>

      {/* Modal */}
      {formVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md mx-auto">
            <h3 className="text-lg font-bold mb-4">Add Job Position</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Team Selection */}
              <div>
                <label htmlFor="teamName" className="block font-medium mb-1">
                  Select Team
                </label>
                <input
                  type="text"
                  id="teamName"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  className="border border-gray-300 rounded p-2 w-full"
                  placeholder="Enter the team"
                  required
                />
              </div>

              {/* Position Name */}
              <div>
                <label htmlFor="positionName" className="block font-medium mb-1">
                  Position Name
                </label>
                <input
                  type="text"
                  id="positionName"
                  value={positionName}
                  onChange={(e) => setPositionName(e.target.value)}
                  className="border border-gray-300 rounded p-2 w-full"
                  placeholder="Enter the position name"
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

      <p>This is the content of Post page</p>
    </div>
  );
};

export default JobPosition;
