export interface CounterProps {
  number: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const Counter = ({ number, onIncrease, onDecrease }: CounterProps) => {
  return (
    <div >
      <h1 className="text-5xl">{number}</h1>
      <div>
        <button className="outline rounded w-5 h-5" onClick={onIncrease}>+1</button>
        <button className="outline rounded w-5 h-5" onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
};

export default Counter;
