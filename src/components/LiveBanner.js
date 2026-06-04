import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function LiveBanner() {
  const [isLive, setIsLive] = useState(false);
  const [classTitle, setClassTitle] = useState('');

  useEffect(() => {
    // Initial load
    loadLiveData();

    // Subscribe to real-time updates
    const subscription = supabase
      .channel('live_class_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'live_class',
          filter: 'id=eq.1'
        },
        (payload) => {
          const data = payload.new;
          setIsLive(data.is_live);
          setClassTitle(data.class_title || '');
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const loadLiveData = async () => {
    try {
      const { data, error } = await supabase
        .from('live_class')
        .select('is_live, class_title')
        .eq('id', 1)
        .single();

      if (!error && data) {
        setIsLive(data.is_live);
        setClassTitle(data.class_title || '');
      }
    } catch (error) {
      console.error('Error loading live data:', error);
    }
  };

  const handleBannerClick = () => {
    const whatsappNumber = process.env.REACT_APP_WHATSAPP_NUMBER;
    const message = `Hi Teacher Lenta, I'd like to join your current live class: ${classTitle}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  if (!isLive) {
    return null;
  }

  return (
    <div
      onClick={handleBannerClick}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-4 cursor-pointer hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl animate-pulse">🔴</span>
          <span className="font-bold text-lg">LIVE NOW</span>
        </div>
        <span className="text-white font-semibold">— {classTitle}</span>
        <span className="text-sm text-red-100 ml-auto hidden sm:inline">
          Click to join on WhatsApp
        </span>
      </div>
    </div>
  );
}
