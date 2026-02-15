import { OverflowContainer } from "react-scroll-indicators"
import "react-scroll-indicators/styles"

const horizontalItems = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  label: `Item ${i + 1}`,
}))

const verticalItems = Array.from({ length: 40 }, (_, i) => ({
  id: i + 1,
  title: `Row ${i + 1}`,
  text: "Scroll vertically to see more. Hover the top or bottom edge to scroll.",
}))

const COLS = 12
const ROWS = 8
const gridItems = Array.from({ length: COLS * ROWS }, (_, i) => ({
  id: i + 1,
  row: Math.floor(i / COLS) + 1,
  col: (i % COLS) + 1,
}))

const horizontalCode = `<OverflowContainer
  className="overflow-demo"
  style={{ width: "100%", height: 120 }}
>
  <div style={{ display: "flex", gap: 16, padding: 8 }}>
    {items.map((item) => (
      <div key={item.id} className="card">
        {item.label}
      </div>
    ))}
  </div>
</OverflowContainer>`

const verticalCode = `<OverflowContainer
  verticalScrollIndicators
  horizontalScrollIndicators={false}
  className="overflow-demo"
  style={{ width: "100%", height: 200 }}
>
  <div style={{ display: "flex", flexDirection: "column", gap: 12, padding: 8 }}>
    {rows.map((row) => (
      <div key={row.id} className="row-card">
        <strong>{row.title}</strong>
        <p>{row.text}</p>
      </div>
    ))}
  </div>
</OverflowContainer>`

const bothCode = `<OverflowContainer
  verticalScrollIndicators
  className="overflow-demo"
  style={{ width: "100%", height: 220 }}
>
  <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(12, 64px)",
    gap: 8,
    padding: 8,
  }}>
    {cells.map((cell) => (
      <div key={cell.id} className="grid-cell">
        {cell.row},{cell.col}
      </div>
    ))}
  </div>
</OverflowContainer>`

const customScrollCode = `<OverflowContainer
  scrollSpeed={5}
  scrollDistance={24}
  indicatorClassName="custom-indicators"
  className="overflow-demo"
  style={{ width: "100%", height: 120 }}
>
  <div style={{ display: "flex", gap: 16, padding: 8 }}>
    {items.map((item) => (
      <div key={item.id} className="card">
        {item.label}
      </div>
    ))}
  </div>
</OverflowContainer>`

function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="example-code">
      <code>{code}</code>
    </pre>
  )
}

function ExampleSection({
  title,
  description,
  code,
  children,
}: {
  title: string
  description: string
  code: string
  children: React.ReactNode
}) {
  return (
    <section className="example-section">
      <h2>{title}</h2>
      <p className="example-description">{description}</p>
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
          title="Horizontal overflow"
          description="Hover near the left or right edge to scroll. Indicators show when content overflows."
          code={horizontalCode}
        >
          <OverflowContainer
            className="overflow-demo overflow-demo--horizontal"
            style={{ width: "100%", height: 120 }}
          >
            <div style={{ display: "flex", gap: 16, padding: 8 }}>
              {horizontalItems.map((item) => (
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
          title="Vertical overflow"
          description="Hover near the top or bottom edge to scroll."
          code={verticalCode}
        >
          <OverflowContainer
            verticalScrollIndicators
            horizontalScrollIndicators={false}
            className="overflow-demo overflow-demo--vertical"
            style={{ width: "100%", height: 200 }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 12, padding: 8 }}>
              {verticalItems.map((item) => (
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
          title="Horizontal and vertical overflow"
          description="Enable both verticalScrollIndicators and horizontalScrollIndicators (default) for a grid that scrolls in both directions. Hover any edge to scroll."
          code={bothCode}
        >
          <OverflowContainer
            verticalScrollIndicators
            className="overflow-demo overflow-demo--both"
            style={{ width: "100%", height: 220 }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${COLS}, 64px)`,
                gap: 8,
                padding: 8,
              }}
            >
              {gridItems.map((cell) => (
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
          title="Custom scroll speed and indicators"
          description="Use scrollSpeed (interval in ms, lower = faster) and scrollDistance (pixels per tick) for snappier scrolling. Use indicatorClassName to style the gradient indicators (e.g. color, width)."
          code={customScrollCode}
        >
          <OverflowContainer
            scrollSpeed={5}
            scrollDistance={24}
            indicatorClassName="custom-indicators"
            className="overflow-demo overflow-demo--custom"
            style={{ width: "100%", height: 120 }}
          >
            <div style={{ display: "flex", gap: 16, padding: 8 }}>
              {horizontalItems.map((item) => (
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
      </main>
    </>
  )
}

export default App
