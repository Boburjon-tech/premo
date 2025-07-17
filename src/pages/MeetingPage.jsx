// src/pages/MeetingPage.jsx
import React, { useState, useRef, useEffect } from 'react';
import { useMeeting } from '../context/meetingContext';

const MeetingPage = () => {
  const { localStream, remoteStream, createMeeting, joinMeeting, meetingId, endMeeting } = useMeeting();
  const [inputId, setInputId] = useState('');
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);

  useEffect(() => {
    if (localVideoRef.current && localStream) {
      localVideoRef.current.srcObject = localStream;
    }
  }, [localStream]);

  useEffect(() => {
    if (remoteVideoRef.current && remoteStream) {
      remoteVideoRef.current.srcObject = remoteStream;
    }
  }, [remoteStream]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white p-8 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold mb-8 text-red-600 drop-shadow-lg">
        Online Meeting
      </h1>

      <div className="flex flex-col sm:flex-row items-center gap-4 mb-6 w-full max-w-xl">
        <button
          onClick={createMeeting}
          className="bg-red-600 hover:bg-red-700 transition-colors rounded-md px-6 py-3 font-semibold shadow-lg shadow-red-700/60"
        >
          Create Meeting
        </button>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <input
            type="text"
            placeholder="Enter meeting ID"
            value={inputId}
            onChange={(e) => setInputId(e.target.value)}
            className="flex-grow px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600 text-white placeholder-gray-400"
          />
          <button
            onClick={() => joinMeeting(inputId)}
            className="bg-red-600 hover:bg-red-700 transition-colors rounded-md px-5 py-2 font-semibold shadow-lg shadow-red-700/60"
          >
            Join
          </button>
        </div>
      </div>

      {meetingId && (
        <p className="mb-6 text-center text-gray-300">
          <span className="font-semibold text-red-500">Meeting ID:</span> {meetingId}
        </p>
      )}

      <div className="flex flex-col sm:flex-row gap-6 w-full max-w-5xl justify-center">
        <div className="flex flex-col items-center bg-gray-800 rounded-lg p-4 shadow-lg shadow-black/60 w-full sm:w-1/2">
          <h2 className="mb-2 font-semibold text-red-500">Sizning Videongiz</h2>
          {localStream ? (
            <video
              ref={localVideoRef}
              playsInline
              muted
              autoPlay
              className="rounded-md border border-red-600 shadow-lg w-full max-h-[300px] object-cover"
            />
          ) : (
            <div className="w-full h-[300px] flex items-center justify-center bg-gray-700 rounded-md text-gray-400 italic">
              Video yo'q
            </div>
          )}
        </div>

        <div className="flex flex-col items-center bg-gray-800 rounded-lg p-4 shadow-lg shadow-black/60 w-full sm:w-1/2">
          <h2 className="mb-2 font-semibold text-red-500">Qarshi Tomon Videosi</h2>
          {remoteStream ? (
            <video
              ref={remoteVideoRef}
              playsInline
              autoPlay
              className="rounded-md border border-red-600 shadow-lg w-full max-h-[300px] object-cover"
            />
          ) : (
            <div className="w-full h-[300px] flex items-center justify-center bg-gray-700 rounded-md text-gray-400 italic">
              Video yo'q
            </div>
          )}
        </div>
      </div>

      {meetingId && (
        <button
          onClick={endMeeting}
          className="mt-8 bg-gray-700 hover:bg-gray-600 text-red-500 font-semibold px-6 py-3 rounded-md shadow-lg shadow-red-700/40 transition-colors"
        >
          End Meeting
        </button>
      )}
    </div>
  );
};

export default MeetingPage;
