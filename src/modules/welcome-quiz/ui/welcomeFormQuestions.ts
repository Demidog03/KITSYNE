interface Question {
  id: string;
  question: string;
  type: 'select' | 'text';
  options?: string[];
  placeholder?: string;
}

export const questions: Question[] = [
  {
    id: 'name',
    question: "Hey there! What's your first name or preferred nickname?",
    type: 'text',
  },
  {
    id: 'age',
    question: 'Which age group do you belong to?',
    type: 'select',
    options: ['Under 15', '15-20', '21-30', '31-40', '41+'],
  },
  {
    id: 'address',
    question: 'How would you like to be addressed?',
    type: 'text',
    placeholder: 'For example: He/him, she-her, they/them',
  },
  {
    id: 'learning-style',
    question: "What's your preferred learning style?",
    type: 'select',
    options: [
      'Reading',
      'Watching videos',
      'Interactive games and challenges',
      'Hand-on practices',
    ],
  },
  {
    id: 'motivation',
    question: 'What motivates you most when learning new skills?',
    type: 'select',
    options: [
      'Achieving goals and challenges',
      'Rewards and recognition',
      'Learning something useful',
      'Just for fun',
    ],
  },
  {
    id: 'learning-frequency',
    question: 'How often would you like to receive new learning activities?',
    type: 'select',
    options: ['Daily', '2-3 times a week', 'Weekly', 'At my own pace'],
  },
  {
    id: 'learning-time',
    question: 'How much time can you spend daily?',
    type: 'select',
    options: [
      'Short bursts (5-15 minutes)',
      'Moderate sessions (20-30 minutes)',
      'Longer deep dives (1 hour or more)',
    ],
  },
  {
    id: 'interaction-style',
    question:
      'AI Tutor Interaction 10. How would you prefer your AI tutor (KITSYNE) to interact with you?',
    type: 'select',
    options: [
      'Friendly and supportive',
      'Professional and concise',
      'Humorous and playful',
      'Motivational and inspiring',
    ],
  },
];
