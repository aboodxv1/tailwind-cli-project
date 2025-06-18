import React, { useState } from "react";

const Profile = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("jane.smith@email.com");
  const [profilePic, setProfilePic] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePic(imageUrl);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-6">User Profile</h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Profile Image Upload */}
          <div className="flex flex-col items-center text-center">
            <div className="w-40 h-40 rounded-xl overflow-hidden bg-gray-200">
              <img
                src={profilePic || "/default-profile.jpg"}
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>
            <label className="mt-4 bg-black text-white px-4 py-2 text-sm rounded cursor-pointer">
              Upload Image
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
            <p className="text-xs text-gray-500 mt-1">
              Supported formats: jpg, gif, or png. Max file size: 500k.
            </p>
          </div>

          {/* Info Form */}
          <div className="flex-1 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full name*</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full border px-4 py-2 rounded-md text-sm"
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Email address</p>
                <p className="text-gray-600 text-sm">{email}</p>
              </div>
              <button className="bg-black text-white px-4 py-2 rounded-md text-sm">
                Update email
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-6">
              <button className="bg-black text-white px-6 py-2 rounded-md">Apply changes</button>
              <button className="bg-black text-white px-6 py-2 rounded-md">Discard</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
    