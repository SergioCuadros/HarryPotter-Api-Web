export const HpView = () => {
  return (
    <>
      <main className="flex flex-col items-center justify-center h-screen bg-hogwarts-blue text-white">
        <figure className="diff aspect-16/9" tabIndex={0}>
          <div className="diff-item-1" role="img" tabIndex={0}>
            <div className="bg-primary text-primary-content grid place-content-center text-9xl font-black">
              WELCOME TO
            </div>
          </div>
          <div className="diff-item-2" role="img">
            <div className="bg-base-200 grid place-content-center text-9xl font-black">
              HARRY POTTER DATA WEB
            </div>
          </div>
          <div className="diff-resizer"></div>
        </figure>
      </main>
    </>
  );
};
