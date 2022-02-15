import './card.scss';

export default function Card(props) {
  return (
    <div className="card">
    <h2 className="card__title">{props.title}</h2>
      {props.children}
    </div>
  );
}