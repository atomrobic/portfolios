// TextScramble.jsx
import React, { useEffect, useRef } from 'react';
import './TextScramble.css'; // We'll handle the CSS separately

class TextScrambleClass {
  constructor(el, scrambleColor = "#22d3ee") {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    this.scrambleColor = scrambleColor;
    this.update = this.update.bind(this);
  }

  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }

    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = '';
    let complete = 0;

    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud" style="color: ${this.scrambleColor}">${char}</span>`;
      } else {
        output += from;
      }
    }

    this.el.innerHTML = output;

    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

const TextScramble = ({ text = "Hello World", className = "", scrambleColor = "#22d3ee" }) => {
  const elRef = useRef(null);

  useEffect(() => {
    const fx = new TextScrambleClass(elRef.current, scrambleColor);
    fx.setText(text);
  }, [text, scrambleColor]);

  return <span className={`text ${className}`} ref={elRef}></span>;
};

export default TextScramble;
