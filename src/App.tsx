import { useState } from "react"
import { OverflowContainer } from "react-scroll-indicators"
import "react-scroll-indicators/styles"

const horizontalCode = `import { OverflowContainer } from "react-scroll-indicators"
import "react-scroll-indicators/styles"

<OverflowContainer
  style={{
    width: "100%",
    height: 120,
    border: "1px solid #e5e7eb",
    borderRadius: 8,
    overflow: "hidden",
  }}
>
  <div style={{ display: "flex", gap: 16, padding: 8 }}>
    {Array.from({ length: 24 }, (_, i) => ({ id: i + 1, label: \`Item \${i + 1}\` })).map((item) => (
      <div
        key={item.id}
        style={{
          flexShrink: 0,
          width: 100,
          height: 80,
          background: "#e0e7ff",
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 600,
        }}
      >
        {item.label}
      </div>
    ))}
  </div>
</OverflowContainer>`

const verticalCode = `import { OverflowContainer } from "react-scroll-indicators"
import "react-scroll-indicators/styles"

<OverflowContainer
  verticalScrollIndicators
  horizontalScrollIndicators={false}
  style={{
    width: "100%",
    height: 200,
    border: "1px solid #e5e7eb",
    borderRadius: 8,
    overflow: "hidden",
  }}
>
  <div style={{ display: "flex", flexDirection: "column", gap: 12, padding: 8 }}>
    {Array.from({ length: 40 }, (_, i) => ({
      id: i + 1,
      title: \`Row \${i + 1}\`,
      text: "Scroll vertically. Hover top or bottom edge.",
    })).map((row) => (
      <div
        key={row.id}
        style={{
          padding: 12,
          background: "#f0fdf4",
          borderRadius: 6,
          border: "1px solid #bbf7d0",
        }}
      >
        <strong>{row.title}</strong>
        <p style={{ margin: "4px 0 0", fontSize: 14, color: "#166534" }}>{row.text}</p>
      </div>
    ))}
  </div>
</OverflowContainer>`

const bothCode = `import { OverflowContainer } from "react-scroll-indicators"
import "react-scroll-indicators/styles"

<OverflowContainer
  verticalScrollIndicators
  style={{
    width: "100%",
    height: 220,
    border: "1px solid #e5e7eb",
    borderRadius: 8,
    overflow: "hidden",
  }}
>
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(12, 64px)",
      gap: 8,
      padding: 8,
    }}
  >
    {Array.from({ length: 96 }, (_, i) => ({
      id: i + 1,
      row: Math.floor(i / 12) + 1,
      col: (i % 12) + 1,
    })).map((cell) => (
      <div
        key={cell.id}
        style={{
          width: 64,
          height: 48,
          background: "#fef3c7",
          borderRadius: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 12,
          fontWeight: 600,
          color: "#92400e",
        }}
      >
        {cell.row},{cell.col}
      </div>
    ))}
  </div>
</OverflowContainer>`

const customScrollCode = `import { OverflowContainer } from "react-scroll-indicators"
import "react-scroll-indicators/styles"

<OverflowContainer
  scrollSpeed={5}
  scrollDistance={24}
  indicatorClassName="custom-indicators"
  style={{
    width: "100%",
    height: 120,
    border: "1px solid #e5e7eb",
    borderRadius: 8,
    overflow: "hidden",
  }}
>
  <div style={{ display: "flex", gap: 16, padding: 8 }}>
    {Array.from({ length: 24 }, (_, i) => ({ id: i + 1, label: \`Item \${i + 1}\` })).map((item) => (
      <div
        key={item.id}
        style={{
          flexShrink: 0,
          width: 100,
          height: 80,
          background: "#ede9fe",
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 600,
          color: "#5b21b6",
        }}
      >
        {item.label}
      </div>
    ))}
  </div>
</OverflowContainer>`

const customBothCode = `import { OverflowContainer } from "react-scroll-indicators"
import "react-scroll-indicators/styles"

<OverflowContainer
  verticalScrollIndicators
  scrollSpeed={5}
  scrollDistance={24}
  horizontalIndicatorClassName="custom-indicators"
  verticalIndicatorClassName="custom-indicators"
  hideHorizontalScrollbar
  hideVerticalScrollbar
  style={{
    width: "100%",
    height: 220,
    border: "1px solid #e5e7eb",
    borderRadius: 8,
    overflow: "hidden",
  }}
>
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(16, 64px)",
      gap: 8,
      padding: 8,
    }}
  >
    {Array.from({ length: 192 }, (_, i) => ({
      id: i + 1,
      row: Math.floor(i / 16) + 1,
      col: (i % 16) + 1,
    })).map((cell) => (
      <div
        key={cell.id}
        style={{
          width: 64,
          height: 48,
          background: "#ede9fe",
          borderRadius: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 12,
          fontWeight: 600,
          color: "#5b21b6",
        }}
      >
        {cell.row},{cell.col}
      </div>
    ))}
  </div>
</OverflowContainer>`

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="example-code-wrapper">
      <button
        type="button"
        className="example-code-copy"
        onClick={handleCopy}
        aria-label="Copy code"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
      <OverflowContainer
        verticalScrollIndicators
        style={{
          width: "100%",
          height: 400,
          border: "1px solid #374151",
          borderRadius: 8,
          overflow: "hidden",
        }}
        horizontalIndicatorClassName="code-block-indicators"
        verticalIndicatorClassName="code-block-indicators"
        hideHorizontalScrollbar
        hideVerticalScrollbar
      >
        <pre className="example-code" style={{height: "fit-content"}}>
          <code>{code}</code>
        </pre>
      </OverflowContainer>
    </div>
  )
}

function ExampleSection({
  number,
  title,
  description,
  code,
  children,
}: {
  number: number
  title: string
  description: React.ReactNode
  code: string
  children: React.ReactNode
}) {
  return (
    <section className="example-section">
      <h2><span className="example-number">#{number}</span> {title}</h2>
      <div className="example-description">{description}</div>
      <div className="example-demo">
        <span className="example-label">Demo</span>
        {children}
      </div>
      <div className="example-code-wrap">
        <span className="example-label">Code</span>
        <CodeBlock code={code} />
      </div>
    </section>
  )
}

function App(): JSX.Element {
  return (
    <>
      <header>
        <h1>React Scroll Indicators Examples</h1>
      </header>

      <main>
        <ExampleSection
          number={1}
          title="Horizontal overflow"
          description={<>Hover near the left or right edge to scroll. Indicators show when content overflows.</>}
          code={horizontalCode}
        >
          <OverflowContainer
            style={{
              width: "100%",
              height: 120,
              border: "1px solid #e5e7eb",
              borderRadius: 8,
              overflow: "hidden",
              maxWidth: "100%",
            }}
          >
            <div style={{ display: "flex", gap: 16, padding: 8 }}>
              {Array.from({ length: 24 }, (_, i) => ({ id: i + 1, label: `Item ${i + 1}` })).map((item) => (
                <div
                  key={item.id}
                  style={{
                    flexShrink: 0,
                    width: 100,
                    height: 80,
                    background: "#e0e7ff",
                    borderRadius: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 600,
                  }}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </OverflowContainer>
        </ExampleSection>

        <ExampleSection
          number={2}
          title="Vertical overflow"
          description={<>Hover near the top or bottom edge to scroll. Uses <code>verticalScrollIndicators</code> and <code>horizontalScrollIndicators=&#123;false&#125;</code>.</>}
          code={verticalCode}
        >
          <OverflowContainer
            verticalScrollIndicators
            horizontalScrollIndicators={false}
            style={{
              width: "100%",
              height: 200,
              border: "1px solid #e5e7eb",
              borderRadius: 8,
              overflow: "hidden",
              maxWidth: "100%",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 12, padding: 8 }}>
              {Array.from({ length: 40 }, (_, i) => ({
                id: i + 1,
                title: `Row ${i + 1}`,
                text: "Scroll vertically to see more. Hover the top or bottom edge to scroll.",
              })).map((item) => (
                <div
                  key={item.id}
                  style={{
                    padding: 12,
                    background: "#f0fdf4",
                    borderRadius: 6,
                    border: "1px solid #bbf7d0",
                  }}
                >
                  <strong>{item.title}</strong>
                  <p style={{ margin: "4px 0 0", fontSize: 14, color: "#166534" }}>{item.text}</p>
                </div>
              ))}
            </div>
          </OverflowContainer>
        </ExampleSection>

        <ExampleSection
          number={3}
          title="Horizontal and vertical overflow"
          description={<>Enable <code>verticalScrollIndicators</code> with horizontal (default). Grid scrolls both ways. Hover any edge to scroll.</>}
          code={bothCode}
        >
          <OverflowContainer
            verticalScrollIndicators
            style={{
              width: "100%",
              height: 220,
              border: "1px solid #e5e7eb",
              borderRadius: 8,
              overflow: "hidden",
              maxWidth: "100%",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(12, 64px)",
                gap: 8,
                padding: 8,
              }}
            >
              {Array.from({ length: 96 }, (_, i) => ({
                id: i + 1,
                row: Math.floor(i / 12) + 1,
                col: (i % 12) + 1,
              })).map((cell) => (
                <div
                  key={cell.id}
                  style={{
                    width: 64,
                    height: 48,
                    background: "#fef3c7",
                    borderRadius: 6,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#92400e",
                  }}
                >
                  {cell.row},{cell.col}
                </div>
              ))}
            </div>
          </OverflowContainer>
        </ExampleSection>

        <ExampleSection
          number={4}
          title="Custom scroll speed and indicators"
          description={<><code>scrollSpeed</code> (ms, lower = faster), <code>scrollDistance</code> (px per tick), <code>horizontalIndicatorClassName</code> and <code>verticalIndicatorClassName</code> for custom gradient indicators.</>}
          code={customScrollCode}
        >
          <OverflowContainer
            scrollSpeed={5}
            scrollDistance={24}
            horizontalIndicatorClassName="custom-indicators"
            verticalIndicatorClassName="custom-indicators"
            style={{
              width: "100%",
              height: 120,
              border: "1px solid #e5e7eb",
              borderRadius: 8,
              overflow: "hidden",
              maxWidth: "100%",
            }}
          >
            <div style={{ display: "flex", gap: 16, padding: 8 }}>
              {Array.from({ length: 24 }, (_, i) => ({ id: i + 1, label: `Item ${i + 1}` })).map((item) => (
                <div
                  key={item.id}
                  style={{
                    flexShrink: 0,
                    width: 100,
                    height: 80,
                    background: "#ede9fe",
                    borderRadius: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 600,
                    color: "#5b21b6",
                  }}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </OverflowContainer>
        </ExampleSection>

        <ExampleSection
          number={5}
          title="Custom with both directions (scrollbars hidden)"
          description={<>Like example #4 with <code>verticalScrollIndicators</code>, plus <code>hideHorizontalScrollbar</code> and <code>hideVerticalScrollbar</code>. Grid overflows both ways.</>}
          code={customBothCode}
        >
          <OverflowContainer
            verticalScrollIndicators
            scrollSpeed={5}
            scrollDistance={24}
            horizontalIndicatorClassName="custom-indicators"
            verticalIndicatorClassName="custom-indicators"
            hideHorizontalScrollbar
            hideVerticalScrollbar
            style={{
              width: "100%",
              height: 220,
              border: "1px solid #e5e7eb",
              borderRadius: 8,
              overflow: "hidden",
              maxWidth: "100%",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(16, 64px)",
                gap: 8,
                padding: 8,
              }}
            >
              {Array.from({ length: 192 }, (_, i) => ({
                id: i + 1,
                row: Math.floor(i / 16) + 1,
                col: (i % 16) + 1,
              })).map((cell) => (
                <div
                  key={cell.id}
                  style={{
                    width: 64,
                    height: 48,
                    background: "#ede9fe",
                    borderRadius: 6,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#5b21b6",
                  }}
                >
                  {cell.row},{cell.col}
                </div>
              ))}
            </div>
          </OverflowContainer>
        </ExampleSection>
      </main>
    </>
  )
}

export default App
