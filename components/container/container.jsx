export const Container = ({ children, className }) => {
  return (
    <div
      className={`h-full my-0 mx-auto px-[15px] max-w-[1536px] ${className}`}
    >
      {children}
    </div>
  );
};
