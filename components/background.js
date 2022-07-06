const Background = ({ children }) => (
  // Remove transition-all to disable the background color transition.

  <div className="bg-white dark:bg-midnight transition-all" style={{
    overflowX: "hidden"
  }}>{children}</div>
)

export default Background
