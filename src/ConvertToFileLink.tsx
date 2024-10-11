import './ConvertToFileLink.css';

export const convertToFileLink = (A: React.FunctionComponent<any>): React.FunctionComponent<any> => {
  return ({ children, href, ...props }) => {
    try {
      // your code here
      // return <>Hello, GROWI!</>;
      const urlReg = /(https?:\/\/)([\w:%#\$&\?\(\)~\.=\+\-]+)?(\/?[\w/:%#\$&\?\(\)~\.=\+\-]+)/;
      const yenReg = /(\\|%5[cC])/g;
      const url = href.match(urlReg);
      console.log(url[0]);
      if (url[2] !== undefined && url[2] == 'file.link') {
        // return the converted link
        const link = "file:/" + url[3].replace(yenReg, '/');
        //<a href="${link}">{children}</a>
        return (

          <>
            <a href={link}>{children}</a>
          </>
        );
      }
      // return the original
      //return (<A {...props}>{children}</A>);
      console.log("1");
      return (
        <>
          <A {...props}>{children}</A>
        </>
      );
    }
    catch (err) {
      // console.error(err);
      console.error(err);
    }
    // Return the original if an error occurs
    return (
      //<A {...props}>{children}</A>
      <>
        <A {...props}>{children}</A>
      </>
    );
  };
};
