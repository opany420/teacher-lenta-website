import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import toast from 'react-hot-toast';

export default function AdminModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLive, setIsLive] = useState(false);
  const [classTitle, setClassTitle] = useState('');
  const [meetingUrl, setMeetingUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(false);

  // Load live class data when authenticated
  useEffect(() => {
    if (isAuthenticated && isOpen) {
      loadLiveClassData();
    }
  }, [isAuthenticated, isOpen]);

  const loadLiveClassData = async () => {
    try {
      setFetchLoading(true);
      const { data, error } = await supabase
        .from('live_class')
        .select('*')
        .eq('id', 1)
        .single();

      if (error) {
        toast.error('Failed to load live class data');
        return;
      }

      if (data) {
        setIsLive(data.is_live);
        setClassTitle(data.class_title || '');
        setMeetingUrl(data.meeting_url || '');
      }
    } catch (error) {
      toast.error('Error loading data: ' + error.message);
    } finally {
      setFetchLoading(false);
    }
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setIsAuthenticated(false);
    setPassword('');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const correctPassword = process.env.REACT_APP_ADMIN_PASSWORD;

    if (password === correctPassword) {
      setIsAuthenticated(true);
      toast.success('Logged in successfully');
    } else {
      toast.error('Incorrect password');
      setPassword('');
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { error } = await supabase
        .from('live_class')
        .update({
          is_live: isLive,
          class_title: classTitle,
          meeting_url: meetingUrl,
          updated_at: new Date().toISOString()
        })
        .eq('id', 1);

      if (error) {
        toast.error('Failed to save: ' + error.message);
        return;
      }

      toast.success('Live class updated successfully!');
    } catch (error) {
      toast.error('Error saving: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Admin Button - shown in footer */}
      <button
        onClick={handleOpenModal}
        className="text-gray-300 hover:text-white text-base font-semibold px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-200"
      >
        Admin
      </button>

      {/* Modal Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center p-4"
          onClick={handleCloseModal}
        >
          {/* Modal Content */}
          <div
            className="bg-white rounded-lg shadow-xl max-w-md w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Password Login Form */}
            {!isAuthenticated ? (
              <>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Admin Access
                </h2>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <div className="relative flex items-center">
                      <input
                        type={isPasswordVisible ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        className="w-full px-4 py-3 pr-16 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                        autoFocus
                      />
                      <button
                        type="button"
                        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                        className="absolute right-2 p-2 text-gray-600 hover:text-gray-800 text-2xl active:scale-95 transition-transform touch-none"
                        title={isPasswordVisible ? 'Hide password' : 'Show password'}
                      >
                        {isPasswordVisible ? '👁️' : '👁️‍🗨️'}
                      </button>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="w-full text-gray-600 hover:text-gray-800 font-medium py-2"
                  >
                    Cancel
                  </button>
                </form>
              </>
            ) : (
              <>
                {/* Admin Controls */}
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">
                    Live Class Control
                  </h2>
                  <button
                    onClick={handleCloseModal}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ×
                  </button>
                </div>

                {fetchLoading ? (
                  <div className="text-center py-8">
                    <p className="text-gray-500">Loading...</p>
                  </div>
                ) : (
                  <form onSubmit={handleSave} className="space-y-4">
                    {/* Toggle Switch */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <label className="font-semibold text-gray-800">
                          {isLive ? 'End Class' : 'Go Live'}
                        </label>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={isLive}
                            onChange={(e) => setIsLive(e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                        </label>
                      </div>
                    </div>

                    {/* Class Title */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Class Title
                      </label>
                      <input
                        type="text"
                        value={classTitle}
                        onChange={(e) => setClassTitle(e.target.value)}
                        placeholder="e.g., English Grammar Basics"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    {/* Meeting URL */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Meeting URL
                      </label>
                      <input
                        type="url"
                        value={meetingUrl}
                        onChange={(e) => setMeetingUrl(e.target.value)}
                        placeholder="e.g., https://zoom.us/j/..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    {/* Save Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-2 px-4 rounded-lg transition"
                    >
                      {loading ? 'Saving...' : 'Save Changes'}
                    </button>

                    {/* Close Button */}
                    <button
                      type="button"
                      onClick={handleCloseModal}
                      className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg transition"
                    >
                      Close
                    </button>
                  </form>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
