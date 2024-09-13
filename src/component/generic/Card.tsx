import React from "react";


interface prop{
    toSearch: string;
    setToSearch: React.Dispatch<React.SetStateAction<string>> | any;
  
  }

  const card = {
    coloured: ( ...elements: JSX.Element[]) => {
      return (
        <div>
          {elements}
        </div>
      );
    },
    normal: (key: number, ...elements: JSX.Element[]) => (
      <div className="card" key={`card${key}`}>
        {elements}
      </div>
    ),
    cardText: (key: number, text: string) => (
      <span className="cardText" key={`cardText${key}`}>
        {text}
      </span>
    ),
    skipLine: (key: string) => {
      return <br className="skipLine" key={`SkipLine${key}`} />;
    },
  };
  

export {
    card
}