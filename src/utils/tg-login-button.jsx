import React from "react";

const TgLoginButton = ({ botName, onLogin }) => {
  const loginRef = React.useRef(null);

  React.useEffect(() => {
    window.tgLoginWidget = onLogin;
    const script = document.createElement('script');
    script.setAttribute('data-telegram-login', botName);
    script.setAttribute('src', 'https://telegram.org/js/telegram-widget.js?15');
    script.setAttribute('data-size', 'large');
    script.setAttribute('data-request-access', 'tgLoginWidget(user)')
    script.async = true;
    loginRef.current.appendChild(script);
  }, [])

  return (
    <div ref={loginRef}></div>
  )
}

export default TgLoginButton;


{/* <script 
  async
  src="https://telegram.org/js/telegram-widget.js?15"
  data-telegram-login="learnWordsVarification_bot"
  data-size="large"
  data-onauth="onTelegramAuth(user)"
  data-request-access="write"
></script> */}