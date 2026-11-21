import Badge from "./components/badge/badge";
function App() {
  const variants = ["neutral", "error", "warning", "success", "brand"] as const;
  const sizes = ["sm", "md", "lg"] as const;
  return (
    <div className="container">
      <div className="grid">
        {variants.map((variant) =>
          sizes.map((size) => (
            <Badge
              className="grid__item"
              variant={variant}
              size={size}
              key={`${variant}-${size}`}
            >
              Label
            </Badge>
          )),
        )}
      </div>
    </div>
  );
}

export default App;
