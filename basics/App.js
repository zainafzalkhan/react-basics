const para = React.createElement("p", {}, "This is child paragraph");
const reactHeading = React.createElement("h1", { id: "heading" }, [
  "this is the react heading",
  para,
]);

const reactRoot = ReactDOM.createRoot(document.querySelector("#root"));
reactRoot.render(reactHeading);
