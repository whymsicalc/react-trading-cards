"use strict";
const tradingCardData = [
  {
    name: 'Balloonicorn',
    skill: 'video games',
    imgUrl: '/static/img/balloonicorn.jpg'
  },

  {
    name: 'Float',
    skill: 'baking pretzels',
    imgUrl: '/static/img/float.jpg'
  },

  {
    name: 'Llambda',
    skill: 'knitting scarves',
    imgUrl: '/static/img/llambda.jpg'
  },


  {
    name: 'Off-By-One',
    skill: 'climbing mountains',
    imgUrl: '/static/img/off-by-one.jpg'
  },

  {
    name: 'Seed.py',
    skill: 'making curry dishes',
    imgUrl: '/static/img/seedpy.jpg'
  },

  {
    name: 'Polymorphism',
    skill: 'costumes',
    imgUrl: '/static/img/polymorphism.jpg'
  },

  {
    name: 'Short Stack Overflow',
    skill: 'ocean animal trivia',
    imgUrl: '/static/img/shortstack-overflow.jpg'
  },

  {
    name: 'Merge',
    skill: 'bullet journaling',
    imgUrl: '/static/img/merge.jpg'
  }
];

class TradingCard extends React.Component {
  render() {
    return (
      <div className="card">
        <h2>Name: {this.props.name}</h2>
        <img src={this.props.imgUrl} />
        <h2>Skill: {this.props.skill}</h2>
      </div>
    );
  }
}

class TradingCardContainer extends React.Component {
  render() {
    const tradingCards = [];

    for (const card of tradingCardData) {
      tradingCards.push(
             <TradingCard
             name={card.name}
             skill={card.skill}
             imgUrl={card.imgUrl}
           />
      );
    }
    return (
      <div>
        {tradingCards}
      </div>
    );
  }
}
      


ReactDOM.render(
  (
    <TradingCardContainer />
  ),
  document.querySelector('#container')
);

// ReactDOM.render(
//   (
//     <TradingCard
//       name="Float"
//       skill="baking pretzels"
//       imgUrl="/static/img/float.jpg"
//     />
//   ),
//   document.querySelector('#float')
// );

// ReactDOM.render(
//   (
//     <TradingCard
//       name="Llambda"
//       skill="knitting scarves"
//       imgUrl="/static/img/llambda.jpg"
//     />
//   ),
//   document.querySelector('#llambda')
// );

// ReactDOM.render(
//   (
//     <TradingCard
//       name="Shortstack Overflow"
//       skill="baking potatoes"
//       imgUrl="/static/img/shortstack-overflow.jpg"
//     />
//     ),
//     document.querySelector('#shortstack-overflow')
// );

// ReactDOM.render(
//   (
//     <TradingCard
//     name="Seedpy"
//     skill="eating sunflower seeds"
//     imgUrl="/static/img/seedpy.jpg"
//     />
//     ),
//     document.querySelector('#seedpy')
//   );