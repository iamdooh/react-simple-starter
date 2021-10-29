import React from 'react';

type GreetingsProps = {
  name: string;
  mark: string;
};

const Name = ({ name = 'Dooh', mark = '!' }: GreetingsProps) => {
  return (
    <h1>
      Hello, {name} {mark} ?!!
    </h1>
  );
};

export default Name;
