'use client';

import { useRouter } from 'next/navigation';
import { useCounterStore } from '@/modules/counter/model/counter-store-provider';

const CounterComponent2 = () => {
  const router = useRouter();
  const { count } = useCounterStore((store) => store);

  return (
    <div>
      {count}
      <button onClick={() => router.push('/')}>Go to main page</button>
    </div>
  );
};

export default CounterComponent2;
