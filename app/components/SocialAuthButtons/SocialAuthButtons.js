import { Button } from "@/components/Button";

export const SocialAuthButtons = ({ buttons }) => {
  return (
    <>
      {buttons.map((button, index) => (
        <Button key={`button-${index}`} variant={button.variant}>
          <img src={button.icon} />
          <span>{button.name}</span>
        </Button>
      ))}
    </>
  );
};
