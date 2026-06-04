import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import toast from 'react-hot-toast';

export default function AdminLive() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [isLive, setIsLive] = useState(false);
  const [classTitle, setClassTitle] = useState('');
  const [meetingUrl, setMeetingUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);

  // Load current live class data on mount
  useEffect(() => {
    if (isAuthenticated) {
      loadLiveClassData();
    }
  }, [isAuthenticated]);

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

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Admin Panel
          </h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              Login
            </button>
          </form>
          <button
            onClick={() => navigate('/')}
            className="mt-4 w-full text-gray-600 hover:text-gray-800 font-medium py-2"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  if (fetchLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-xl text-gray-700">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Manage Live Class</h1>
          <button
            onClick={() => {
              setIsAuthenticated(false);
              setPassword('');
            }}
            className="text-gray-600 hover:text-gray-800 font-medium"
          >
            Logout
          </button>
        </div>

        <form onSubmit={handleSave} className="space-y-6">
          {/* Is Live Toggle */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center justify-between">
              <label className="text-lg font-semibold text-gray-800">
                Class is Live
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
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 px-4 rounded-lg transition"
          >
            {loading ? 'Saving...' : 'Save Changes'}
          </button>

          {/* Back Button */}
          <button
            type="button"
            onClick={() => navigate('/')}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-4 rounded-lg transition"
          >
            Back to Home
          </button>
        </form>
      </div>
    </div>
  );
}
