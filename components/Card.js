export default function Card(props) {
  return (
    <div className="p-6 rounded-lg shadow-lg bg-white dark:bg-gray-700 mr-3 ml-3 mb-2 md:mr-4 md:ml-4 md:mb-4">
      {props?.children}
    </div>
  );
}
