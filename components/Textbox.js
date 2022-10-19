/**
 *
 * @param {{className?: string ...props}} props
 * @returns A styled input component
 */
export const Textbox = (props) => {
  return (
    <input
      {...props}
      className={
        "shadow border rounded w-full py-2 px-3 text-gray-700 dark:bg-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:ring-1 focus:ring-primary transition duration-200 " +
        (props.className || "")
      }
    >
      {props.children}
    </input>
  );
};
