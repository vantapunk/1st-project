import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function BlackSwan({ size = 240 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 240"
      role="img"
      aria-label="물 위에 떠 있는 흑고니"
      fill="none"
      stroke="#111"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="240" height="240" rx="24" fill="#fff" stroke="none" />

      {/* 물결 */}
      <path d="M30 184 C 50 179, 70 189, 90 184 S 130 179, 150 184 S 190 189, 212 183" />
      <path d="M58 200 C 74 196, 90 204, 106 200 S 138 196, 154 200" />
      <path d="M128 214 C 140 211, 152 217, 164 214" />

      {/* 몸통 */}
      <path
        fill="#111"
        d="M72 154
           C 72 134, 100 124, 130 127
           C 160 130, 188 120, 212 98
           C 210 132, 196 164, 158 176
           L 98 176
           C 82 174, 72 166, 72 154
           Z"
      />

      {/* 목과 머리 */}
      <path
        fill="#111"
        d="M104 134
           C 84 112, 86 88, 92 68
           C 95 57, 85 50, 76 52
           C 68 54, 64 60, 63 66
           L 65 80
           C 61 100, 64 124, 82 146
           Z"
      />

      {/* 부리 */}
      <path fill="#fff" d="M63 66 L 42 76 L 65 80 Z" />
      <path d="M50 74 L 56 74" />

      {/* 눈 */}
      <circle cx="78" cy="61" r="2.4" fill="#fff" stroke="none" />

      {/* 날개 깃 (흰 선) */}
      <g stroke="#fff" strokeWidth="2.5">
        <path d="M112 146 C 140 138, 172 130, 198 110" />
        <path d="M120 158 C 146 152, 172 146, 192 128" />
        <path d="M130 168 C 150 165, 168 160, 182 148" />
        <path d="M150 132 c 4 -8, 12 -8, 14 -2" />
        <path d="M170 126 c 4 -8, 12 -8, 14 -2" />
        <path d="M188 116 c 3 -7, 10 -7, 12 -2" />
      </g>
    </svg>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <BlackSwan />
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
