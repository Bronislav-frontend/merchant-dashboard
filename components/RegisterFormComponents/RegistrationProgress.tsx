interface RegistrationProgressProps {
  step: number;
}

const RegistrationProgress = ({ step }: RegistrationProgressProps) => {
  return <div>Step {step} of 4</div>;
};

export default RegistrationProgress;
