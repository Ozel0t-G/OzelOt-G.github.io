import { useEffect, useMemo, useState } from 'react';

const passwords = [
  'V7#mQ2!xL9@pR4$sT8&zN',
  'kP9!vB3#nX7$qL2@rM6%t',
  'Z4@wE8&cR1!yU6#pA9$dF',
  'hT2%jK7@qW5!mN8#xC3$r',
  'R8#bY4!vP1@zL6$tQ9&nM',
  'mC6@fG2#sD9!uH4%wJ7$p',
  'Q1!nV5$xZ8@rB3#kL7&tP',
  'pA7#dF2@hJ9!sK4%lQ6&w',
  'N3@xC8!vB5#zM1$qR7%yK',
  'tW9%rE4#uI2!oP6@aS8&d',
  'G5!hJ1@kL7#zX3$cV9%bR',
  'yU2#iO8$pA4@sD6!fG1&h',
  'L9@kJ3!hG7#fD2$sA5%pV',
  'eR4%tY8@uI1#oP6!qW3&L',
  'B2!nM7$xC5@vZ9#lK4%jD',
  'sD8#fG1@hJ6!kL3$pO9&w',
  'A6@zX2!cV8#bN5$mQ1%rH',
  'uI7%oP3#qW9!eR4@tY2&M',
  'J1!kL6@zX4#cV8$bN3%mQ',
  'wQ5#eR9$tY2@uI7!oP4&a',
  'F8@dS3!aP6#oI1$uY9%tZ',
  'vB4%nM8@xC2!zL7#qK5&r',
  'H3#jK9!lP1@oU6$iY8%tN',
  'cV7@bN2#mM5!xZ9$qL4&p',
  'T6!rE1#wQ8@yU3$iO5%pB',
];

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*?+-_=';

function getCharType(char) {
  if (/[a-z]/i.test(char)) {
    return 'letter';
  }

  if (/\d/.test(char)) {
    return 'number';
  }

  return 'symbol';
}

function createScramble(target, frame) {
  return target
    .split('')
    .map((char, index) => {
      const settleFrame = 9 + index * 2;

      if (frame >= settleFrame) {
        return char;
      }

      return alphabet[(frame * 7 + index * 13) % alphabet.length];
    })
    .join('');
}

function PasswordTicker() {
  const [passwordIndex, setPasswordIndex] = useState(0);
  const [frame, setFrame] = useState(0);
  const targetPassword = passwords[passwordIndex];
  const displayPassword = useMemo(
    () => createScramble(targetPassword, frame),
    [frame, targetPassword],
  );

  useEffect(() => {
    const passwordTimer = window.setInterval(() => {
      setPasswordIndex((current) => (current + 1) % passwords.length);
      setFrame(0);
    }, 2800);

    return () => window.clearInterval(passwordTimer);
  }, []);

  useEffect(() => {
    if (frame >= 64) {
      return undefined;
    }

    const frameTimer = window.setTimeout(() => {
      setFrame((current) => current + 1);
    }, 42);

    return () => window.clearTimeout(frameTimer);
  }, [frame, passwordIndex]);

  return (
    <div className="password-ticker" aria-label="Animated rotating password examples">
      {displayPassword.split('').map((char, index) => (
        <span className={`password-char password-char-${getCharType(char)}`} key={`${index}-${char}`}>
          {char}
        </span>
      ))}
    </div>
  );
}

export default PasswordTicker;
