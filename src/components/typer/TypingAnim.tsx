import { TypeAnimation } from 'react-type-animation';

const TypingAnim = () => {
  return (
    <TypeAnimation
      sequence={[
        'Chat With Your OWN AI',
        1000,
        'Built With OpenAI 🤖',
        2000,
        'Your Own Customized ChatGPT 💻',
        1500,
      ]}
      speed={50}
      repeat={Infinity}
      style={{ fontSize: '60px', display: 'inline-block', color:"white", textShadow: "1px 1px 20px #000" }}
    />
  )
}

export default TypingAnim