import react from "react";

// Title を渡すための Context を作成
const TitleContext = react.createContext("");

// Title コンポーネントの中で Context の値を参照
const Title = () => {
  return (
    <TitleContext.Consumer>
      {(title) => {
        return <h1>{title}</h1>;
      }}
    </TitleContext.Consumer>
  );
};

const Header = () => {
  return (
    <div>
      <title />
    </div>
  );
};

// Page コンポーネントの中で Context に値を渡す
const Page = () => {
  const title = "react Book";

  return (
    <TitleContext.Provider value={title}>
      <Header />
    </TitleContext.Provider>
  );
};

export default Page;
