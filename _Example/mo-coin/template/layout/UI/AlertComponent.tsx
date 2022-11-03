import type { NextPage } from 'next';

/**
 * AlertType is an object with a text property that is a string and a type property that is either
 * 'success', 'warning', or 'danger'.
 * @property {string} text - The text to display in the alert.
 * @property {'success' | 'warning' | 'danger'} type - This is the type of alert. It can be success,
 * warning, or danger.
 */
type AlertType = {
  text: string;
  type: 'success' | 'warning' | 'danger';
};

const AlertComponent: NextPage<AlertType> = ({ text, type }) => {
  return (
    <>
      {type == 'success' && (
        <div
          className="bg-green-100 rounded-sm py-2 px-4 my-4 text-base text-green-700 w-[80%] mx-auto"
          role="alert"
        >
          {text}
        </div>
      )}

      {type == 'danger' && (
        <div
          className="bg-red-100 rounded-sm py-2 px-4 my-4 text-base text-red-700 w-[80%] mx-auto"
          role="alert"
        >
          {text}
        </div>
      )}

      {type == 'warning' && (
        <div
          className="bg-yellow-100 rounded-sm py-2 px-4 my-4 text-base text-yellow-700 w-[80%] mx-auto"
          role="alert"
        >
          {text}
        </div>
      )}
    </>
  );
};

export default AlertComponent;
