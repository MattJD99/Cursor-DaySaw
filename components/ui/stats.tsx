import Image from 'next/image';

const stats = [
  { id: 1, name: 'Of customers read reviews', value: '90%' },
  { id: 2, name: 'Of map pack clicks', value: '45%' },
  { id: 3, name: 'Increase in conversion rate', value: '31%' },
  { id: 4, name: 'Trust reviews as much as recommendations', value: '88%' },
];

export function Stats() {
  return (
    <div className="relative isolate bg-background">
      <div className="bg-background pt-0 pb-8 sm:pt-0 sm:pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="section-title mb-4">
              Why Google Reviews Matter
            </h2>
            <p className="section-description">
              Google reviews are crucial for your business success. They influence your local search rankings and directly impact customer decisions.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-lg grid-cols-1 items-center gap-6 sm:mt-16 sm:max-w-xl lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {stats.map((stat) => (
              <div 
                key={stat.id}
                className="relative p-[1px] rounded-3xl bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-600 group hover:scale-[1.02] transition-all duration-300"
              >
                <div className="relative h-full bg-white rounded-3xl p-8 flex flex-col items-center justify-center text-center min-h-[160px]">
                  <dd className="text-4xl font-semibold tracking-tight gradient-text mb-3">
                    {stat.value}
                  </dd>
                  <dt className="text-base leading-7 text-muted-foreground">
                    {stat.name}
                  </dt>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden mt-4">
        <div className="w-full h-8 bg-[url('/images/googlefi-dots.webp')] bg-repeat-x bg-contain" />
      </div>
    </div>
  );
} 