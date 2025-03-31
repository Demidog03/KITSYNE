import CounterComponent2 from '@/modules/counter/ui/CounterComponent2';

export default function TestPage() {
  console.log('test page');

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to my test</p>
      <CounterComponent2 />
    </div>
  );
}
