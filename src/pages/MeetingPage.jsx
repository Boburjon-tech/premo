// src/pages/MeetingPage.jsx
import React, { useState } from 'react';
import { useMeeting } from '../context/meetingContext';

const MeetingPage = () => {
  const { localStream, remoteStream, createMeeting, joinMeeting, meetingId } = useMeeting();
  const [inputId, setInputId] = useState('');

  return (
    <div style={{ padding: 20 }}>
      <h2>Online Meeting</h2>

      <button onClick={createMeeting}>Create Meeting</button>

      <div style={{ marginTop: 20 }}>
        <input
          type="text"
          placeholder="Enter meeting ID"
          value={inputId}
          onChange={(e) => setInputId(e.target.value)}
          style={{ marginRight: 10, padding: 5, fontSize: 16 }}
        />
        <button onClick={() => joinMeeting(inputId)}>Join Meeting</button>
      </div>

      {meetingId && (
        <p style={{ marginTop: 20 }}>
          <strong>Meeting ID:</strong> {meetingId}
        </p>
      )}

      <div style={{ display: 'flex', gap: 20, marginTop: 30 }}>
        {localStream && (
          <video
            playsInline
            muted
            autoPlay
            ref={video => {
              if (video) video.srcObject = localStream;
            }}
            style={{ width: 300, border: '1px solid black' }}
          />
        )}

        {remoteStream && (
          <video
            playsInline
            autoPlay
            ref={video => {
              if (video) video.srcObject = remoteStream;
            }}
            style={{ width: 300, border: '1px solid black' }}
          />
        )}
      </div>
    </div>
  );
};

export default MeetingPage;
