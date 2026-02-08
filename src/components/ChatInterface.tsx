import React, { useState, useRef, useEffect } from 'react';
import { Send, Heart, User, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SAATHI_SYSTEM_PROMPT } from '../saathi/systemPrompt';

interface MessageMeta {
  emotion?: string;
  risk_level?: 'low' | 'medium' | 'high';
  suggestions?: string[];
}

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  isTyping?: boolean;
  meta?: MessageMeta;
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content:
        "Hello! I'm Saathi, your AI companion. I'm here to listen and support you. How are you feeling today?",
      sender: 'ai',
      timestamp: new Date(),
      meta: {
        emotion: 'warm',
        risk_level: 'low',
        suggestions: ['You can share anything that feels important right now.']
      }
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Simple keyword-based crisis detection (client-side safety net)
  const detectCrisisKeywords = (text: string): boolean => {
    const crisisKeywords = [
      'suicide',
      'kill myself',
      'end it all',
      'hurt myself',
      'self harm',
      'want to die',
      'no point living',
      'better off dead',
      'cutting myself',
      'i can\'t go on',
      'i will kill myself',
      'i want to die'
    ];
    return crisisKeywords.some((keyword) =>
      text.toLowerCase().includes(keyword.toLowerCase())
    );
  };

  // Lightweight emotion detection heuristic
  const detectPrimaryEmotion = (text: string): string => {
    const mapping: { [emotion: string]: string[] } = {
      sadness: ['sad', 'down', 'unhappy', 'hopeless', 'tear', 'cry'],
      anxiety: ['anxious', 'anxiety', 'nervous', 'panic', 'stressed', 'worry'],
      loneliness: ['alone', 'lonely', 'isolated'],
      burnout: ['burnout', 'exhausted', 'overwhelmed', 'tired', 'drained'],
      anger: ['angry', 'frustrated', 'irritated'],
      relief: ['relieved', 'better', 'okay', 'alright'],
      calm: ['calm', 'okay', 'fine', 'content']
    };

    const lowered = text.toLowerCase();

    for (const [emotion, keywords] of Object.entries(mapping)) {
      if (keywords.some((k) => lowered.includes(k))) {
        return emotion;
      }
    }

    // Fallback: neutral / uncertain
    return 'uncertain';
  };

  // Generate a safe JSON-formatted response string (simulating LLM/Gemini output)
  const generateAIResponse = async (userMessage: string): Promise<string> => {
    // NOTE: In production, call your backend which communicates with Gemini using SAATHI_SYSTEM_PROMPT
    // and returns the LLM's JSON response. This function simulates that behavior safely on the client.

    // Simulate processing delay
    await new Promise((resolve) =>
      setTimeout(resolve, 800 + Math.random() * 1200)
    );

    const isCrisis = detectCrisisKeywords(userMessage);
    const primaryEmotion = detectPrimaryEmotion(userMessage);

    let risk_level: 'low' | 'medium' | 'high' = 'low';

    if (isCrisis) {
      risk_level = 'high';
    } else {
      // medium risk heuristics (words implying hopelessness/overwhelm)
      const mediumKeywords = [
        'overwhelmed',
        'can\'t cope',
        'no point',
        'hopeless',
        'worthless',
        'give up',
        'can\'t handle'
      ];
      if (mediumKeywords.some((k) => userMessage.toLowerCase().includes(k))) {
        risk_level = 'medium';
      } else {
        risk_level = 'low';
      }
    }

    // Build empathetic response text following the safety constraints
    let responseText = '';

    if (risk_level === 'high') {
      responseText =
        "I'm really sorry you're feeling this way — thank you for telling me. I care about your safety. If you're able, please consider reaching out to someone you trust right now. If you are in the United States, you can call 988 (Suicide & Crisis Lifeline) or text HOME to 741741 to connect with a trained counselor. If you think you might be in immediate danger, please contact local emergency services right away. Are you safe right now?";
    } else {
      // Non-crisis supportive responses (concise, validating, non-clinical)
      const baseOptions = [
        `Thank you for sharing that with me. I hear that you're feeling ${primaryEmotion === 'uncertain' ? 'how you feel' : primaryEmotion}. You're not alone — would you like to tell me more about what's been going on?`,
        `I can see this is hard for you. Your feelings matter, and you did something brave by saying this out loud. What feels most heavy at the moment?`,
        `That sounds really tough. It's okay to feel this way, and I'm here to listen without judgment. Would you like a few gentle ideas that might help right now?`,
        `I'm listening. Sometimes naming one small thing that helps — even briefly — can be useful. Is there something that usually brings you a bit of relief?`
      ];
      // pick one
      responseText = baseOptions[Math.floor(Math.random() * baseOptions.length)];
    }

    // Suggestion set (gentle, non-medical, actionable)
    const suggestionsSet: string[] = [
      'Try a short grounding exercise: 5 deep breaths, naming 5 things you can see.',
      'If possible, reach out to one trusted person and let them know you’re struggling.',
      'Take a short break, step outside, or move somewhere that feels calmer for a few minutes.',
      'Write one small thing you can do right now that might feel manageable.',
      'If you’re open to it, consider speaking with a campus counselor or mental health professional.'
    ];

    // For high risk, prioritize safety suggestions
    const suggestions =
      risk_level === 'high'
        ? [
            'Call or text your local crisis line (988 in the U.S.) or your local emergency number if you are in immediate danger.',
            'If you can, contact a trusted person and let them know you need support right now.'
          ]
        : // return 2 gentle suggestions
          suggestionsSet.slice(0, 2);

    // Build the required JSON object exactly as requested
    const aiResponseObject = {
      emotion: primaryEmotion,
      risk_level,
      response: responseText,
      suggestions
    };

    // Always return a JSON string to simulate Gemini's required format
    return JSON.stringify(aiResponseObject);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const rawAIResponse = await generateAIResponse(userMessage.content);

      // Try to parse the JSON response safely
      let parsed: {
        emotion?: string;
        risk_level?: 'low' | 'medium' | 'high';
        response?: string;
        suggestions?: string[];
      } = {};

      try {
        parsed = JSON.parse(rawAIResponse);
      } catch (e) {
        // If parsing fails, fall back to a safe generic message
        parsed = {
          emotion: 'uncertain',
          risk_level: 'low',
          response:
            "I'm sorry, I couldn't process that fully. Could you share a little more about how you're feeling?",
          suggestions: ['Take a few breaths and tell me one small thing that feels hard right now.']
        };
      }

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        // Display only the friendly "response" part to the user in the chat bubble
        content: parsed.response ?? "Thank you for sharing. I'm here with you.",
        sender: 'ai',
        timestamp: new Date(),
        meta: {
          emotion: parsed.emotion,
          risk_level: parsed.risk_level,
          suggestions: parsed.suggestions
        }
      };

      setMessages((prev) => [...prev, aiMessage]);

      // If high risk, optionally keep a visible system banner (already present) and ensure crisis info shown in the message
      if (aiMessage.meta?.risk_level === 'high') {
        // Add a follow-up system message reminding about crisis support (non-intrusive)
        const systemFollowUp: Message = {
          id: (Date.now() + 2).toString(),
          content:
            'Crisis resources: Call 988 (Suicide & Crisis Lifeline) or text HOME to 741741 (U.S.). If you are in immediate danger, please contact local emergency services.',
          sender: 'ai',
          timestamp: new Date(),
          meta: {
            emotion: 'safety',
            risk_level: 'high',
            suggestions: ['Contact emergency services or a trusted person immediately if you feel unsafe.']
          }
        };
        setMessages((prev) => [...prev, systemFollowUp]);
      }
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content:
          "I'm sorry, I'm having trouble responding right now. If you're in crisis, please call 988 for immediate support.",
        sender: 'ai',
        timestamp: new Date(),
        meta: {
          emotion: 'uncertain',
          risk_level: 'low',
          suggestions: ['Try again in a moment, or contact local emergency/crisis services if needed.']
        }
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-sm border border-gray-200">
      {/* Crisis Banner */}
      <div className="bg-red-50 border-b border-red-200 p-3">
        <div className="flex items-center space-x-2 text-sm text-red-800">
          <AlertTriangle className="h-4 w-4" />
          <span>Crisis? Call 988 (Suicide & Crisis Lifeline) or text HOME to 741741</span>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`flex items-start space-x-2 max-w-xs lg:max-w-md ${
                  message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}
              >
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    message.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-green-100 text-green-600'
                  }`}
                >
                  {message.sender === 'user' ? <User className="h-4 w-4" /> : <Heart className="h-4 w-4" />}
                </div>
                <div className={`rounded-lg px-4 py-2 ${message.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-900'}`}>
                  <p className="text-sm">{message.content}</p>

                  {/* Show metadata for AI messages: emotion and risk level (subtle) */}
                  {message.sender === 'ai' && message.meta && (
                    <div className="mt-2 text-xs text-gray-500">
                      <span className="font-medium">Emotion:</span> {message.meta.emotion ?? 'uncertain'}{' '}
                      <span className="mx-2">•</span>
                      <span className="font-medium">Risk:</span> {message.meta.risk_level ?? 'low'}
                    </div>
                  )}

                  {/* If suggestions are present, show a small list */}
                  {message.sender === 'ai' && message.meta?.suggestions && (
                    <div className="mt-2 text-xs text-gray-600 space-y-1">
                      {message.meta.suggestions.map((sug, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <span className="text-blue-600 font-medium">•</span>
                          <span>{sug}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isLoading && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-start">
            <div className="flex items-start space-x-2 max-w-xs lg:max-w-md">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                <Heart className="h-4 w-4" />
              </div>
              <div className="bg-gray-100 rounded-lg px-4 py-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-200 p-4">
        <div className="flex space-x-2">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Share what's on your mind..."
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={isLoading}
            aria-label="Message input"
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isLoading}
            className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Send message"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          This is an AI support tool. For emergencies, please contact professional help immediately.
        </p>
      </div>
    </div>
  );
};

export default ChatInterface;