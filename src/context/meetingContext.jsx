import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import Peer from 'simple-peer';
import { db } from '../firebase/config';
import { collection, doc, setDoc, onSnapshot, updateDoc } from 'firebase/firestore';

const MeetingContext = createContext();

export const MeetingProvider = ({ children }) => {
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const [peer, setPeer] = useState(null);
  const [meetingId, setMeetingId] = useState(null);
  const [userId, setUserId] = useState(null);
  const peerRef = useRef(null);

  useEffect(() => {
    // Kamera va mikrofon ruxsatini olish
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(stream => {
        setLocalStream(stream);
      })
      .catch(err => {
        console.error("Media error:", err);
      });
  }, []);

  // Meeting yaratish funksiyasi
  const createMeeting = async () => {
    const id = Math.random().toString(36).substring(2, 10);
    setMeetingId(id);
    setUserId('caller');

    const callDoc = doc(collection(db, 'meetings'), id);
    const offerCandidates = collection(callDoc, 'offerCandidates');
    const answerCandidates = collection(callDoc, 'answerCandidates');

    const newPeer = new Peer({
      initiator: true,
      trickle: false,
      stream: localStream,
    });

    newPeer.on('signal', async signal => {
      await setDoc(callDoc, { offer: signal });
    });

    newPeer.on('stream', stream => {
      setRemoteStream(stream);
    });

    let answerReceived = false;

    onSnapshot(callDoc, snapshot => {
      const data = snapshot.data();
      if (!newPeer.destroyed && data?.answer && !answerReceived) {
        newPeer.signal(data.answer);
        answerReceived = true;  // faqat bir marta signal beramiz
      }
    });

    peerRef.current = newPeer;
    setPeer(newPeer);
  };

  // Meetingga qo‘shilish funksiyasi
  const joinMeeting = async (id) => {
    setMeetingId(id);
    setUserId('callee');

    const callDoc = doc(collection(db, 'meetings'), id);
    const offerCandidates = collection(callDoc, 'offerCandidates');
    const answerCandidates = collection(callDoc, 'answerCandidates');

    const newPeer = new Peer({
      initiator: false,
      trickle: false,
      stream: localStream,
    });

    newPeer.on('signal', async (signal) => {
      await updateDoc(callDoc, { answer: signal });
    });

    newPeer.on('stream', (stream) => {
      setRemoteStream(stream);
    });

    let offerReceived = false;

    onSnapshot(callDoc, (snapshot) => {
      const data = snapshot.data();
      if (!newPeer.destroyed && data?.offer && !offerReceived) {
        newPeer.signal(data.offer);
        offerReceived = true;  // faqat bir marta signal beramiz
      }
    });

    peerRef.current = newPeer;
    setPeer(newPeer);
  };

  return (
    <MeetingContext.Provider value={{
      localStream,
      remoteStream,
      createMeeting,
      joinMeeting,
      meetingId,
      userId,
    }}>
      {children}
    </MeetingContext.Provider>
  );
};

export const useMeeting = () => useContext(MeetingContext);
