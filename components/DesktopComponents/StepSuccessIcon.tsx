// interface IconProps {
//   step: number;
// }

const StepSuccessIcon = () => {
  return (
    <div>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="min-w-[32px]"
      >
        <rect width="32" height="32" rx="16" fill="#32ABF2" />
        <path
          d="M21.3332 12L13.9998 19.3333L10.6665 16"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default StepSuccessIcon;
