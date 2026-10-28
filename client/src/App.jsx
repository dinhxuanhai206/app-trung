import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import ReadingView from './components/ReadingView';
import ListeningView from './components/ListeningView';
import SpeakingView from './components/SpeakingView';
import WritingView from './components/WritingView';
import MatchingGameView from './components/MatchingGameView';
import ScenarioBuilderView from './components/ScenarioBuilderView';
import FormulaView from './components/FormulaView';
import Vocab1000View from './components/Vocab1000View';
import DashboardView from './components/DashboardView';
import AiLiveChatView from './components/AiLiveChatView';
import axiosClient from './api/axiosClient';
import { LESSONS_DATA } from './data/lessonsData';

export default function App() {
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [showPinyin, setShowPinyin] = useState(true);
  const [xp, setXp] = useState(120);
  const [streak, setStreak] = useState(5);
  const [lessons, setLessons] = useState(LESSONS_DATA);
  const [toast, setToast] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Attempt to fetch fresh lessons from NestJS backend
  useEffect(() => {
    axiosClient
      .get('/lessons/hsk1-lesson1')
      .then((res) => {
        if (res.data) {
          console.log('Connected to NestJS backend:', res.data);
        }
      })
      .catch(() => {
        console.log('Backend server not connected yet, using local dataset.');
      });
  }, []);

  const handleGainXP = (amount, reason) => {
    setXp((prev) => prev + amount);
    setToast(`+${amount} XP • ${reason}`);
    setTimeout(() => {
      setToast(null);
    }, 2500);
  };

  const currentLesson = lessons[currentLessonIndex] || lessons[0];

  return (
    <div className="flex w-full min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-rose-500 selection:text-white">
      {/* Sidebar with Desktop & Mobile Drawer mode */}
      <Sidebar
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      {/* Main Area */}
      <div className="flex-1 flex flex-col h-screen overflow-y-auto">
        <Header
          lessons={lessons}
          currentLessonIndex={currentLessonIndex}
          setCurrentLessonIndex={setCurrentLessonIndex}
          showPinyin={showPinyin}
          setShowPinyin={setShowPinyin}
          xp={xp}
          streak={streak}
          onOpenMenu={() => setMobileMenuOpen(true)}
        />

        {/* Responsive padding: p-3.5 on mobile, p-6 on tablet, p-8 on desktop; pb-24 for mobile bottom bar */}
        <main className="flex-1 p-3.5 sm:p-6 md:p-8 pb-28 lg:pb-8 max-w-7xl w-full mx-auto">
          <Routes>
            <Route path="/" element={<Navigate to="/reading" replace />} />
            <Route
              path="/reading"
              element={
                <ReadingView
                  lesson={currentLesson}
                  showPinyin={showPinyin}
                  onGainXP={handleGainXP}
                />
              }
            />
            <Route
              path="/listening"
              element={
                <ListeningView
                  lesson={currentLesson}
                  showPinyin={showPinyin}
                  onGainXP={handleGainXP}
                />
              }
            />
            <Route
              path="/speaking"
              element={
                <SpeakingView
                  lesson={currentLesson}
                  onGainXP={handleGainXP}
                />
              }
            />
            <Route
              path="/writing"
              element={
                <WritingView
                  lesson={currentLesson}
                  onGainXP={handleGainXP}
                />
              }
            />
            <Route
              path="/matching"
              element={
                <MatchingGameView
                  lesson={currentLesson}
                  showPinyin={showPinyin}
                  onGainXP={handleGainXP}
                />
              }
            />
            <Route
              path="/scenario"
              element={
                <ScenarioBuilderView
                  showPinyin={showPinyin}
                  onGainXP={handleGainXP}
                />
              }
            />
            <Route
              path="/formula"
              element={
                <FormulaView
                  onGainXP={handleGainXP}
                />
              }
            />
            <Route
              path="/vocab1000"
              element={
                <Vocab1000View />
              }
            />
            <Route
              path="/dashboard"
              element={
                <DashboardView
                  xp={xp}
                  streak={streak}
                  skills={{ reading: 85, listening: 70, speaking: 65, writing: 60, matching: 90 }}
                />
              }
            />
            <Route
              path="/ai-chat"
              element={
                <AiLiveChatView
                  onGainXP={handleGainXP}
                />
              }
            />
            <Route path="*" element={<Navigate to="/reading" replace />} />
          </Routes>
        </main>
      </div>

      {/* Mobile Bottom Navigation Bar */}
      <BottomNav onOpenMore={() => setMobileMenuOpen(true)} />

      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-20 lg:bottom-6 right-4 sm:right-6 bg-slate-900 text-white px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm shadow-2xl border-l-4 border-rose-500 z-50 animate-bounce">
          ✨ {toast}
        </div>
      )}
    </div>
  );
}
