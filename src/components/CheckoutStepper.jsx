import { useState } from "react";

const CheckoutStepper = ({
  checkoutSteps,
  checkoutSuccessfull = () => {
    alert("Your Checkout Process Has Been Succesfull");
  },
}) => {
  const [activeStep, setActiveStep] = useState(1);

  const stepsLineIndicatorWIdth = (activeStep / checkoutSteps.length) * 100;

  const currentStepComponent = checkoutSteps[activeStep - 1].Component();

  const checkStepsCompletion = () => {
   return activeStep === checkoutSteps.length ? true : false;
  };

  const moveToNextStep = () => {
    if (checkStepsCompletion()) {
      checkoutSuccessfull();
    } else {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  return (
    <div
      style={{
        padding : "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "25px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "25px",
          alignItems: "flex-start",
          position: "relative",
        }}
      >
        <div
          style={{
            backgroundColor: "gray",
            height: "8px",
            width: "100%",
            position: "absolute",
            top: "21px",
            zIndex: "-999px",
          }}
        ></div>
        <div
          style={{
            backgroundColor: "green",
            height: "8px",
            width: `${stepsLineIndicatorWIdth}%`,
            position: "absolute",
            top: "21px",
            zIndex: "-999px",
          }}
        ></div>
        {checkoutSteps.map((step, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                zIndex: "999999999",
              }}
            >
              <h2
                style={{
                  borderRadius: "100%",
                  color: "white",
                  height: "50px",
                  width: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "ease-in-out",
                  backgroundColor:
                    activeStep === checkoutSteps.length
                      ? "green"
                      : activeStep > index + 1
                      ? "green"
                      : activeStep === index + 1
                      ? "blue"
                      : "gray",
                }}
              >
                {index + 1}
              </h2>
              <h3 style={{textAlign : "center"}}>{step.name}</h3>
            </div>
          );
        })}
      </div>
      <div>{currentStepComponent}</div>
      <button
        style={{ cursor: "pointer", padding: "10px" }}
        onClick={moveToNextStep}
      >
        {activeStep === checkoutSteps.length ? "Finish" : "Next"}
      </button>
    </div>
  );
};
export default CheckoutStepper;
