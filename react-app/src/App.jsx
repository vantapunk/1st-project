import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function Crow({ size = 240 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 240"
      role="img"
      aria-label="나뭇가지에 앉은 까마귀"
      fill="none"
      stroke="#111"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="240" height="240" rx="24" fill="#fff" stroke="none" />

      {/* 나뭇가지 */}
      <path d="M24 196 C 90 189, 160 194, 222 186" />
      <path d="M176 192 C 186 184, 194 178, 206 172" />
      <path d="M198 176 C 204 168, 214 166, 220 170 C 214 176, 206 178, 198 176 Z" />

      {/* 다리 */}
      <path d="M114 166 L 110 192" />
      <path d="M130 164 L 130 191" />
      <path d="M100 196 L 110 192 L 118 197" />
      <path d="M121 195 L 130 191 L 138 195" />

      {/* 몸통 */}
      <path
        fill="#fff"
        d="M42 80
           L 72 70
           C 80 54, 104 50, 116 62
           C 128 74, 132 88, 140 100
           C 158 112, 184 128, 214 160
           L 205 170
           C 186 161, 170 155, 156 152
           C 146 166, 128 172, 110 168
           C 90 162, 78 140, 78 116
           C 78 104, 76 95, 70 87
           Z"
      />

      {/* 부리 */}
      <path d="M44 80 L 74 79" />

      {/* 눈 */}
      <circle cx="93" cy="70" r="5" />
      <circle cx="94" cy="70" r="1.6" fill="#111" stroke="none" />

      {/* 목 깃털 */}
      <path d="M82 96 l -5 7" />
      <path d="M88 102 l -4 8" />

      {/* 날개 */}
      <path d="M100 112 C 120 98, 160 108, 194 148" />
      <path d="M108 128 C 128 120, 152 128, 176 146" />
      <path d="M118 144 C 134 140, 150 144, 162 152" />

      {/* 꼬리 깃 */}
      <path d="M180 140 L 196 162" />
    </svg>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <Crow />
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
