export default function Turtles() {
  //   const ninjaTurtles = ['Donatello', 'Michaelangelo', 'Rafael', 'Leonardo'];
  //   const person = { firstName: 'Bob' };
  //   const jsx = <h1>Donatello</h1>;
  //   console.log(jsx);

  const ninjaTurtles = [
    <h2>Donatello</h2>,
    <h2>Michaelangelo</h2>,
    <h2>Rafael</h2>,
    <h2>Leonardo</h2>,
  ];

  return <main>{ninjaTurtles}</main>;
}
