'use client';

import { useState, useRef, useEffect, FormEvent } from 'react';
import { useChat } from '@ai-sdk/react';
import { MessageCircle, X, Send, Minus } from 'lucide-react';

/* ─── Types ─── */
type InterestOption =
  | 'Admissions'
  | 'Early Childhood'
  | "Women's College"
  | 'Teacher Training'
  | 'Franchise';

interface LeadForm {
  name: string;
  phone: string;
  interest: InterestOption;
}

/* ─── Typing Dots ─── */
function TypingDots() {
  return (
    <span className="inline-flex items-center gap-1 px-1">
      <span className="h-2 w-2 rounded-full bg-gray-400 animate-bounce [animation-delay:0ms]" />
      <span className="h-2 w-2 rounded-full bg-gray-400 animate-bounce [animation-delay:150ms]" />
      <span className="h-2 w-2 rounded-full bg-gray-400 animate-bounce [animation-delay:300ms]" />
    </span>
  );
}

/* ─── Lead Capture Form ─── */
function LeadCaptureForm({
  onSubmit,
}: {
  onSubmit: (lead: LeadForm) => void;
}) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState<InterestOption>('Admissions');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setLoading(true);
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), phone: phone.trim(), interest }),
      });
      if (res.ok) {
        onSubmit({ name: name.trim(), phone: phone.trim(), interest });
      }
    } catch {
      // Still proceed to chat even if lead save fails
      onSubmit({ name: name.trim(), phone: phone.trim(), interest });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Welcome banner */}
      <div className="bg-emerald-50 border-b border-emerald-100 px-4 py-4 text-center">
        <p className="text-sm font-semibold text-emerald-800">
          Welcome to Noor Admissions!
        </p>
        <p className="text-xs text-emerald-600 mt-1">
          Please share a few details so we can assist you better.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-3 px-4 py-4 overflow-y-auto">
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Your Name
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Ahmed Khan"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="e.g. 0300-1234567"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            I&apos;m Interested In
          </label>
          <select
            value={interest}
            onChange={(e) => setInterest(e.target.value as InterestOption)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition bg-white"
          >
            <option value="Admissions">Admissions (The Noor School)</option>
            <option value="Early Childhood">Early Childhood Program</option>
            <option value="Women's College">Noor College for Women</option>
            <option value="Teacher Training">Professional Teacher Training</option>
            <option value="Franchise">Franchise / Partnership</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-auto w-full rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 disabled:opacity-50 transition"
        >
          {loading ? 'Submitting...' : 'Start Chatting'}
        </button>
      </form>
    </div>
  );
}

/* ─── Main Chat Widget ─── */
export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [userName, setUserName] = useState('');
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status } = useChat();

  const isStreaming = status === 'submitted' || status === 'streaming';

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isStreaming]);

  const handleLeadSubmit = (lead: LeadForm) => {
    setUserName(lead.name);
    setShowForm(false);
  };

  const onChatSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue.trim() || isStreaming) return;
    sendMessage({ text: inputValue.trim() });
    setInputValue('');
  };

  return (
    <>
      {/* ── Floating Toggle Button ── */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg hover:bg-emerald-700 hover:scale-105 transition-all duration-200"
          aria-label="Open chat"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {/* ── Chat Window ── */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex w-80 sm:w-96 h-[500px] flex-col rounded-2xl bg-white shadow-2xl overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="flex items-center justify-between bg-emerald-700 px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500">
                <MessageCircle className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white leading-tight">
                  Noor Admissions Assistant
                </p>
                <p className="text-[10px] text-emerald-200">
                  {isStreaming ? 'Typing...' : 'Online'}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1 text-emerald-200 hover:bg-emerald-600 hover:text-white transition"
                aria-label="Minimize chat"
              >
                <Minus className="h-4 w-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1 text-emerald-200 hover:bg-emerald-600 hover:text-white transition"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Body */}
          {showForm ? (
            <div className="flex-1 overflow-hidden">
              <LeadCaptureForm onSubmit={handleLeadSubmit} />
            </div>
          ) : (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-3 py-4 space-y-3 bg-gray-50">
                {/* Welcome message */}
                <div className="flex justify-start">
                  <div className="max-w-[80%]">
                    <p className="text-[10px] font-medium text-emerald-700 mb-0.5 px-1">
                      Noor Assistant
                    </p>
                    <div className="rounded-2xl rounded-tl-sm bg-white px-3 py-2 text-sm text-gray-700 shadow-sm border border-gray-100">
                      Assalam o Alaikum, {userName}! Welcome to Noor Educational System. How can I help you today? You can ask about admissions, programs, fees, or campus visits.
                    </div>
                  </div>
                </div>

                {/* Chat messages */}
                {messages.map((msg) => {
                  const textContent = msg.parts
                    ?.filter((part) => part.type === 'text')
                    .map((part) => ('text' in part ? part.text : ''))
                    .join('') ?? '';

                  return (
                    <div
                      key={msg.id}
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className="max-w-[80%]">
                        {msg.role === 'assistant' && (
                          <p className="text-[10px] font-medium text-emerald-700 mb-0.5 px-1">
                            Noor Assistant
                          </p>
                        )}
                        <div
                          className={`rounded-2xl px-3 py-2 text-sm shadow-sm ${
                            msg.role === 'user'
                              ? 'rounded-tr-sm bg-emerald-600 text-white'
                              : 'rounded-tl-sm bg-white text-gray-700 border border-gray-100'
                          }`}
                        >
                          {textContent}
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Typing indicator */}
                {isStreaming && (
                  <div className="flex justify-start">
                    <div className="max-w-[80%]">
                      <p className="text-[10px] font-medium text-emerald-700 mb-0.5 px-1">
                        Noor Assistant
                      </p>
                      <div className="rounded-2xl rounded-tl-sm bg-white px-3 py-2 shadow-sm border border-gray-100">
                        <TypingDots />
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <form
                onSubmit={onChatSubmit}
                className="flex items-center gap-2 border-t border-gray-200 bg-white px-3 py-2"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  disabled={isStreaming}
                  className="flex-1 rounded-full border border-gray-300 px-4 py-2 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isStreaming || !inputValue.trim()}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white hover:bg-emerald-700 disabled:opacity-40 transition"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
}
