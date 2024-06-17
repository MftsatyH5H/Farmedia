const Global = (() => {
    let globalVariable = 'http://192.168.1.5';
  
    return {
      getGlobalVariable: () => globalVariable,
      setGlobalVariable: (value) => { globalVariable = value; },
    };
  })();
  
export default Global;
