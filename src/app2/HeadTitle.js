function HeadTitle({ title = "무제", description = "", children }) {
  return (
    <>
      <header>
        <h1>{title}</h1>
        <h1>{description}</h1>
      </header>

      <main>{children}</main>
    </>
  );
}

export default HeadTitle;
