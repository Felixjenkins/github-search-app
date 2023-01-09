import { useAppSelector } from '../hooks';

export default function Homepage() {
  const { favorites } = useAppSelector((state) => state.github);

  if (favorites.length === 0) return <p className='text-center'>No items.</p>;

  return (
    <div className='flex justify-center pt-10 mx-auto h-screen'>
      <ul className='list-none'>
        {favorites.map((f, i) => (
          <li key={f + i}>
            <a href={f} target='_blank'>
              {f}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
