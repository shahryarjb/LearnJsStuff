import type { NextPage } from 'next';

type AlertType = {
  text: string;
  type: 'success' | 'warning' | 'danger';
};
const AlertComponent: NextPage<AlertType> = ({ text, type }) => {
  return (
    <>
      {type == 'success' && (
        <div
          className="bg-green-100 rounded-lg py-2 px-4 my-4 text-base text-green-700 w-[80%] mx-auto"
          role="alert"
        >
          {text}
        </div>
      )}

      {type == 'danger' && (
        <div
          className="bg-red-100 rounded-lg py-2 px-4 my-4 text-base text-red-700 w-[80%] mx-auto"
          role="alert"
        >
          {text}
        </div>
      )}

      {type == 'warning' && (
        <div
          className="bg-yellow-100 rounded-lg py-2 px-4 my-4 text-base text-yellow-700 w-[80%] mx-auto"
          role="alert"
        >
          {text}
        </div>
      )}
    </>
  );
};

export default AlertComponent;
