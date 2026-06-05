import React, { useState, useEffect } from 'react';

export default function Tutorials() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchYouTubeVideos();
  }, []);

  const fetchYouTubeVideos = async () => {
    try {
      setLoading(true);
      setError(false);

      const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
      const channelId = process.env.REACT_APP_YOUTUBE_CHANNEL_ID;

      if (!apiKey || !channelId) {
        setError(true);
        setLoading(false);
        return;
      }

      const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=6&type=video`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.items && data.items.length > 0) {
        const formattedVideos = data.items.map((item) => ({
          id: item.id.videoId,
          title: item.snippet.title,
          publishedAt: item.snippet.publishedAt,
          thumbnail: item.snippet.thumbnails.medium.url,
        }));
        setVideos(formattedVideos);
      } else {
        setError(true);
      }
    } catch (err) {
      console.error('Error fetching YouTube videos:', err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const channelUrl = 'https://www.youtube.com/channel/UC_7B8sP9GZhT2JJRl84mubg';

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Video Tutorials
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Watch our latest lessons on YouTube
          </p>
          <a
            href={channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition"
          >
            Subscribe to my Channel →
          </a>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin">
              <svg
                className="w-12 h-12 text-red-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg mb-6">
              No tutorials uploaded yet. Check back soon!
            </p>
            <a
              href={channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-red-600 hover:text-red-700 font-semibold transition"
            >
              Visit YouTube Channel →
            </a>
          </div>
        )}

        {/* Videos Grid */}
        {!loading && !error && videos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <a
                key={video.id}
                href={`https://youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* YouTube Iframe */}
                <div className="relative w-full h-0 pb-[56.25%] bg-gray-800">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    className="absolute top-0 left-0 w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </div>

                {/* Video Info */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-red-600 transition line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">
                    {formatDate(video.publishedAt)}
                  </p>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && videos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Video tutorials coming soon! Check back later.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

