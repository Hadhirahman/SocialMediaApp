import React from 'react';

function PostCreate() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Post a Photo</h1>
        <form className="space-y-4">
          {/* Photo Upload Section */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Upload Photo</label>
            <div className="flex items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition duration-200">
              <label className="flex flex-col items-center justify-center cursor-pointer w-full h-full">
                <svg className="w-12 h-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V8m0 8l-3-3m3 3l3-3m13-7H7a2 2 0 00-2 2v6a2 2 0 002 2h3m13 0h-3a2 2 0 01-2-2v-6a2 2 0 012-2h3m0 0l3 3m-3-3l-3 3" />
                </svg>
                <span className="mt-2 text-sm text-gray-500">Click to upload or drag & drop</span>
                <input type="file" className="hidden" />
              </label>
            </div>
          </div>
          
          {/* Caption Section */}
          <div>
            <label htmlFor="caption" className="block text-sm font-medium text-gray-700">Caption</label>
            <textarea id="caption" rows="3" className="block w-full p-2 mt-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm" placeholder="Write something..."></textarea>
          </div>

          {/* Post Button */}
          <div>
            <button type="submit" className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200">Post</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostCreate;
