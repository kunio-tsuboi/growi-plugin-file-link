export const convertToFileLink = (A: React.FunctionComponent<any>): React.FunctionComponent<any> => {
  return ({ children, href, ...props }) => {
    try {
      const urlReg = /(https?:\/\/)([\w:%#\$&\?\(\)~\.=\+\-]+)?(\/?.+)/;
      const backslashReg = /(\\|%5[cC])/g;
      const url = href.match(urlReg);
      if (url[2] !== undefined && url[2] == 'file.link') {
        // return the converted link
        const link = "file:/" + url[3].replace(backslashReg, '/');
        return (<a href={link} {...props}>{children}</a>);
      }
      // return the original
      return (<A href={href} {...props}>{children}</A>);
    }
    catch (err) {
      console.error(err);
    }
    // Return the original if an error occurs
    return (<A href={href} {...props}>{children}</A>);
  };
};
