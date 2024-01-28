
export interface Question {
    question:string,
    answer:string
}

export const questions: Question[] = [
    {
      question: "How do I connect to the server?",
      answer:
        "To connect to the server, use the `io` function from the Socket.IO client library. Here's an example: ```typescript import { io } from 'socket.io-client'; const socket = io('http://your-server-url')",
    },
    {
      question: "How can I navigate between screens?",
      answer:
        "Navigation in React Native can be achieved using the React Navigation library. First, install it: ```bash expo install @react-navigation/native expo install react-navigation-stack ``` Then, set up a navigator and use the `navigation.navigate` function to move between screens.",
    },
    {
      question: "What is the recommended way to manage state?",
      answer:
        "For state management, consider using React's built-in `useState` hook. For more complex state management, you might want to explore libraries like Redux or MobX.",
    },
    {
      question: "How can I style components?",
      answer:
        "Styling in React Native is similar to web development. Use the `StyleSheet` module for creating styles. Example: ```typescript import { StyleSheet } from 'react-native'; const styles = StyleSheet.create({ container: { flex: 1, justifyContent: 'center', alignItems: 'center' }, }); ",
    },
    {
      question: "Can I use TypeScript in my Expo project?",
      answer:
        "Yes, TypeScript is supported in Expo projects. You can create a `tsconfig.json` file in the root of your project and install the necessary TypeScript dependencies. Run the following commands: ```bash expo install --dev typescript expo install --dev @types/react @types/react-native ``` Then, rename your files with the `.tsx` extension.",
    },
  ];