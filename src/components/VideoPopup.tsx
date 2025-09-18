import React from 'react';

interface VideoPopupProps {
  videoUrl: string;
  onClose: () => void;
  isOpen: boolean;
}

const VideoPopup: React.FC<VideoPopupProps> = ({ videoUrl, onClose, isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative w-full max-w-3xl p-4 bg-white rounded-lg shadow-lg">
        <button
          className="absolute top-2 right-2 text-gray-800 hover:text-gray-600 text-2xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>
        <video controls autoPlay className="w-full h-auto rounded-md">
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoPopup;