
export enum OPENAI_MODEL {
  TEXT_GEN = 'text-davinci-003', // Can do any language task with better quality, longer output, and consistent instruction-following than the curie, babbage, or ada models. Also supports inserting completions within text.
  CHAT_GEN = 'gpt-3.5-turbo',    // Most capable GPT-3.5 model and optimized for chat at 1/10th the cost of text-davinci-003. Will be updated with our latest model iteration
  SPEECH_TO_TEXT = 'whisper-1', // https://platform.openai.com/docs/guides/speech-to-text
  IMAGE_GEN = 'DALL·E',          // https://platform.openai.com/docs/guides/images/introduction
  CODE_GEN = 'code-davinci-002'  // https://platform.openai.com/docs/models/codex
}