import { manifest, shelves } from './data';
import './App.styl';

export default function App() {
  return (
    <main className="page">
      <header className="hero">
        <div className="naming">
          <div className="lockup">
            <h1 className="mark" aria-label="息壤 Xirang">
              <span className="glyph" aria-hidden="true">息</span>
              <span className="glyph two" aria-hidden="true">壤</span>
            </h1>
            <p className="latin" aria-hidden="true">
              <span>X</span> <span>i</span> <span>R</span> <span>a</span> <span>n</span> <span>g</span>
            </p>
          </div>
          <p className="lead">
            硬件按件装配。
            <br />
            一套规范，一个包管理器。
          </p>
        </div>

        <pre className="manifest">
          <code>
            {manifest.map((line) => (
              <span key={line} className="row">{line}</span>
            ))}
          </code>
        </pre>
      </header>

      <hr className="rule" />

      <section className="shelves" aria-label="目录">
        {shelves.map((s) => (
          <div key={s.key} className="shelf">
            <h2>{s.name}</h2>
            <p>{s.note}</p>
          </div>
        ))}
      </section>

      <footer className="foot">
        <a href="https://github.com/Tape-Out">源码在 GitHub</a>
      </footer>
    </main>
  );
}
