import Button from "./components/button/button";

type Variant = React.ComponentProps<typeof Button>["variant"];

const rows: { variant: Variant; iconOnly: boolean }[] = [
  { variant: "primary", iconOnly: true },
  { variant: "secondary", iconOnly: true },
  { variant: "tertiary", iconOnly: true },
  { variant: "link", iconOnly: false },
  { variant: "link-gray", iconOnly: false },
  { variant: "destructive", iconOnly: true },
];
const sizes = ["md", "lg", "xl", "2xl"] as const;

function Star() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M7.92549 12.3333L3.02726 15.0751L4.12124 9.56937L0 5.75819L5.57433 5.09726L7.92549 0L10.2766 5.09726L15.8509 5.75819L11.7297 9.56937L12.8237 15.0751L7.92549 12.3333ZM7.92549 10.7417L10.8746 12.3924L10.2159 9.07757L12.6972 6.78292L9.34105 6.38496L7.92549 3.31599L6.5099 6.38496L3.15369 6.78292L5.63501 9.07757L4.97635 12.3924L7.92549 10.7417Z" />
    </svg>
  );
}

function App() {
  return (
    <div className="container container--showcase">
      <div className="showcase">
        {rows.map(({ variant, iconOnly }) => (
          <div className="showcase__row" key={variant}>
            {sizes.map((size) => (
              <Button
                key={size}
                variant={variant}
                size={size}
                leftIcon={<Star />}
                rightIcon={<Star />}
                disabled={variant === "link" || variant === "link-gray"}
              >
                Button CTA
              </Button>
            ))}
            {iconOnly && (
              <Button
                variant={variant}
                size="lg"
                iconOnly
                leftIcon={<Star />}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
