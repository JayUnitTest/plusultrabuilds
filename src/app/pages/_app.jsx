
export const myApp = ({ Component, pageProps} ) => {
  return (
    <div className="bg-amber-200">
        <Component {...pageProps}/>
    </div>
  );
}

export default myApp;
